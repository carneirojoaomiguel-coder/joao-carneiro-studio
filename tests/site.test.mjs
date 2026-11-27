import test from 'node:test';
import assert from 'node:assert/strict';
import { access, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildSite, loadContent, safeUrl, videoEmbed } from '../scripts/build.mjs';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

test('gera as 25 peças importadas, preserva URLs e formulários, exclui os ficheiros de conteúdo da publicação', async () => {
  const output = await mkdtemp(path.join(root, '.verify-'));
  try {
    const result = await buildSite({ root, output });
    assert.equal(result.works, 16); assert.equal(result.studies, 9);
    await access(path.join(output, 'series/study a.html'));
    await access(path.join(output, 'series/dissipate into negative.html'));
    assert.match(await readFile(path.join(output, 'studies.html'), 'utf8'), /series\/study%20a\.html/);
    assert.match(await readFile(path.join(output, 'contact.html'), 'utf8'), /data-netlify="true"/);
    assert.match(await readFile(path.join(output, 'thank-you/index.html'), 'utf8'), /src="\/js\/script.js"/);
    await assert.rejects(access(path.join(output, 'content')));
    await assert.rejects(access(path.join(output, 'cms-settings.json')));
    const config = JSON.parse(await readFile(path.join(output, 'admin/config.yml'), 'utf8'));
    assert.equal(config.backend.name, 'github'); assert.equal(config.publish_mode, 'editorial_workflow');
    assert.equal(config.collections[0].fields.find(f => f.name === 'videos').fields.find(f => f.name === 'file').widget, 'file');
    assert.equal(config.collections[0].fields.find(f => f.name === 'description').fields[0].required, false);
  } finally { await rm(output, { recursive: true, force: true }); }
});

test('uma nova peça aparece com imagens e vídeo; uma peça oculta ou eliminada sai da lista e da página', async () => {
  const output = await mkdtemp(path.join(root, '.verify-'));
  try {
    const content = await loadContent(root);
    const fresh = structuredClone(content.catalogue[0]);
    fresh.id = 'nova-obra'; delete fresh.legacy_path;
    fresh.title = 'Nova obra <exemplo>'; fresh.description = { pt: '<script>alert(1)</script>\nTexto de exemplo' };
    fresh.category = 'works'; fresh.order = 0;
    fresh.videos = [{ url: 'https://youtu.be/dQw4w9WgXcQ', caption: 'Processo' }];
    content.catalogue.push(fresh);
    const hidden = content.catalogue.find(a => a.id === content.home.featured);
    hidden.published = false;
    await buildSite({ root, output, content });
    const generated = await readFile(path.join(output, 'series/nova-obra.html'), 'utf8');
    assert.match(generated, /Nova obra &lt;exemplo&gt;/);
    assert.match(generated, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/);
    assert.doesNotMatch(generated, /<script>alert\(1\)<\/script>/);
    assert.match(generated, /data-video-src="https:\/\/www.youtube-nocookie.com\/embed\//);
    assert.doesNotMatch(generated, /<iframe/);
    await assert.rejects(access(path.join(output, `series/${hidden.legacy_path}.html`)));
    assert.doesNotMatch(await readFile(path.join(output, 'sitemap.xml'), 'utf8'), /echoes-before-morning/);
    assert.match(await readFile(path.join(output, 'works.html'), 'utf8'), /nova-obra.html/);
    assert.doesNotMatch(await readFile(path.join(output, 'index.html'), 'utf8'), /echoes-before-morning/);
    fresh.title = 'Título atualizado'; fresh.description = { pt: null };
    await buildSite({ root, output, content });
    assert.match(await readFile(path.join(output, 'series/nova-obra.html'), 'utf8'), /Título atualizado/);
    content.catalogue = content.catalogue.filter(a => a.id !== 'nova-obra');
    await buildSite({ root, output, content });
    await assert.rejects(access(path.join(output, 'series/nova-obra.html')));
    assert.doesNotMatch(await readFile(path.join(output, 'works.html'), 'utf8'), /nova-obra.html/);
  } finally { await rm(output, { recursive: true, force: true }); }
});

test('ficheiros em falta e vídeos ambíguos interrompem a geração antes de substituir o resultado anterior', async () => {
  const output = await mkdtemp(path.join(root, '.verify-'));
  try {
    const content = await loadContent(root);
    await writeFile(path.join(output, 'sentinel.txt'), 'versão anterior');
    content.catalogue[0].cover = '/assets/imagem-em-falta.jpg';
    await assert.rejects(buildSite({ root, output, content }), /Imagem em falta/);
    assert.equal(await readFile(path.join(output, 'sentinel.txt'), 'utf8'), 'versão anterior');
    content.catalogue[0].cover = content.catalogue[0].gallery[0].image;
    content.catalogue[0].videos = [{ file: '/assets/a.mp4', url: 'https://youtu.be/dQw4w9WgXcQ' }];
    await assert.rejects(buildSite({ root, output, content }), /um ficheiro de vídeo ou um link externo/);
  } finally { await rm(output, { recursive: true, force: true }); }
});

test('permite apenas caminhos seguros e ligações HTTPS e reconhece YouTube/Vimeo', () => {
  for (const url of ['javascript:alert(1)', 'data:text/html,<script>', '//evil.test', '/a/../b', '/a/%2e%2e/b', '/a\\b', 'http://example.com', 'https://user:pass@example.com']) assert.throws(() => safeUrl(url));
  assert.equal(safeUrl('/assets/study a/imagem.png'), '/assets/study a/imagem.png');
  assert.equal(videoEmbed('https://www.youtube.com/watch?v=dQw4w9WgXcQ'), 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ');
  assert.equal(videoEmbed('https://vimeo.com/12345'), 'https://player.vimeo.com/video/12345');
  assert.throws(() => videoEmbed('https://vimeo.com.evil.test/12345'));
});
