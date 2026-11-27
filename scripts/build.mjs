import { cp, mkdir, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { cmsConfig } from './cms-config.mjs';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const text = value => escapeHtml(value).replace(/\r?\n/g, '<br>');
const json = value => JSON.stringify(value).replace(/</g, '\\u003c');
const tr = value => typeof value === 'string' ? { pt: value, en: value, fr: value } : { pt: String(value?.pt ?? ''), en: String(value?.en ?? ''), fr: String(value?.fr ?? '') };
const localized = (tag, value, attrs = '') => {
  const t = tr(value);
  return `<${tag} ${attrs} data-pt="${escapeHtml(text(t.pt))}" data-en="${escapeHtml(text(t.en || t.pt))}" data-fr="${escapeHtml(text(t.fr || t.pt))}">${text(t.pt)}</${tag}>`;
};

export function safeUrl(value, { internalOnly = false } = {}) {
  if (!value) return '';
  const v = String(value).trim();
  if (/^\/(?!\/)/.test(v) && !/[\\\x00-\x1f]/.test(v) && !v.split(/[/?#]/).some(p => p === '..' || /%2e|%5c|%00/i.test(p))) return v;
  if (!internalOnly) {
    try { const u = new URL(v); if (u.protocol === 'https:' && !u.username && !u.password) return u.href; } catch {}
  }
  throw new Error(`Endereço inválido: ${v}. Usa um caminho do site ou um endereço HTTPS.`);
}

export function videoEmbed(value) {
  if (!value) return '';
  const u = new URL(safeUrl(value));
  let id;
  if (['youtube.com', 'www.youtube.com', 'm.youtube.com'].includes(u.hostname)) id = u.searchParams.get('v') || u.pathname.match(/^\/(?:embed|shorts)\/([^/]+)/)?.[1];
  if (u.hostname === 'youtu.be') id = u.pathname.slice(1);
  if (id && /^[a-zA-Z0-9_-]{11}$/.test(id)) return `https://www.youtube-nocookie.com/embed/${id}`;
  if (['vimeo.com', 'www.vimeo.com', 'player.vimeo.com'].includes(u.hostname)) {
    const vimeoId = u.pathname.match(/^\/(?:video\/)?(\d+)\/?$/)?.[1];
    if (vimeoId) {
      const hash = u.searchParams.get('h');
      return `https://player.vimeo.com/video/${vimeoId}${hash && /^[a-zA-Z0-9]+$/.test(hash) ? `?h=${hash}` : ''}`;
    }
  }
  throw new Error('Vídeo externo inválido. Usa um link público do YouTube ou Vimeo.');
}

const statusLabels = {
  available: { pt: 'Disponível', en: 'Available', fr: 'Disponible' },
  reserved: { pt: 'Reservado', en: 'Reserved', fr: 'Réservé' },
  sold: { pt: 'Vendido', en: 'Sold', fr: 'Vendu' },
  unavailable: { pt: 'Indisponível', en: 'Not available', fr: 'Indisponible' }
};
const categoryLabels = { works: { pt: 'Obras', en: 'Works', fr: 'Œuvres' }, studies: { pt: 'Estudos', en: 'Studies', fr: 'Études' } };
const cleanDescription = v => tr(v).pt.replace(/\s+/g, ' ').trim();
const artworkPath = art => `/series/${encodeURIComponent(art.legacy_path || art.id)}.html`;

function navigation(settings) {
  return `<header class="site-header"><a class="brand" href="/">${escapeHtml(settings.title)}</a><button aria-expanded="false" aria-label="Abrir menu" class="menu-toggle" data-i18n="menu" data-i18n-aria-label="menu_open" type="button">Menu</button><nav aria-label="Menu principal" class="site-nav" data-i18n-aria-label="main_menu"><a data-i18n="nav_works" href="/works.html">Obras</a><a data-i18n="nav_studies" href="/studies.html">Estudos</a><a data-i18n="nav_bio" href="/about.html">Biografia</a><a data-i18n="nav_cv" href="/cv.html">CV</a><a data-i18n="nav_contact" href="/contact.html">Contacto</a>${settings.instagram ? `<a data-i18n="instagram" href="${escapeHtml(safeUrl(settings.instagram))}" rel="noopener noreferrer" target="_blank">Instagram</a>` : ''}</nav></header>`;
}
function footer(settings) {
  return `<footer class="site-footer"><div class="footer-inner"><p data-footer-rights="true">© <span id="year"></span> <span data-i18n="footer_rights">${escapeHtml(settings.title)}. Todos os direitos reservados.</span></p><nav aria-label="Informação legal" class="footer-links" data-i18n-aria-label="legal_info"><a data-i18n="privacy_title" href="/privacy.html">Política de Privacidade</a><a data-i18n="terms_title" href="/terms.html">Termos de Utilização</a><a data-i18n="copyright_title" href="/copyright.html">Direitos de Autor</a><a data-i18n="nav_contact" href="/contact.html">Contacto</a></nav></div></footer>`;
}
function shell(settings, { title, page = '', urlPath, description = '', image, body, schema }) {
  const origin = new URL(settings.url).origin;
  const url = origin + urlPath;
  const shareImage = new URL(safeUrl(image || settings.social_image), origin).href;
  const pageTitle = title ? `${title} — ${settings.title}` : settings.title;
  const metaDescription = description || settings.description;
  const person = { '@context': 'https://schema.org', '@type': 'Person', '@id': `${origin}/#joao-carneiro`, name: settings.title, url: `${origin}/`, jobTitle: ['Visual Artist', 'Architect'], sameAs: settings.instagram ? [safeUrl(settings.instagram)] : [] };
  return `<!DOCTYPE html>
<html lang="pt" data-page="${escapeHtml(page)}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(pageTitle)}</title><meta name="description" content="${escapeHtml(metaDescription)}"><meta name="author" content="${escapeHtml(settings.title)}"><meta name="robots" content="index, follow, max-image-preview:large"><link rel="canonical" href="${escapeHtml(url)}"><link rel="icon" href="/assets/favicon.svg" type="image/svg+xml"><link rel="manifest" href="/manifest.webmanifest"><link rel="stylesheet" href="/css/styles.css"><link rel="stylesheet" href="/css/cms-content.css"><meta property="og:type" content="website"><meta property="og:site_name" content="${escapeHtml(settings.title)}"><meta property="og:title" content="${escapeHtml(pageTitle)}"><meta property="og:description" content="${escapeHtml(metaDescription)}"><meta property="og:url" content="${escapeHtml(url)}"><meta property="og:image" content="${escapeHtml(shareImage)}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${escapeHtml(pageTitle)}"><meta name="twitter:description" content="${escapeHtml(metaDescription)}"><meta name="twitter:image" content="${escapeHtml(shareImage)}"><script type="application/ld+json">${json(person)}</script>${schema ? `<script type="application/ld+json">${json(schema)}</script>` : ''}</head><body>${navigation(settings)}${body}${footer(settings)}<script src="/js/script.js"></script><script src="/js/cms-content.js"></script></body></html>\n`;
}

function gallery(art) {
  const images = art.gallery?.length ? art.gallery : [{ image: art.cover, alt: art.title }];
  return `<section class="artwork-gallery-panel" aria-label="${escapeHtml(`Galeria de ${art.title}`)}"><img id="mainArtworkImage" class="main-artwork-image" data-gallery-main src="${escapeHtml(safeUrl(images[0].image))}" alt="${escapeHtml(images[0].alt || art.title)}" decoding="async"><div class="thumbnail-row" aria-label="Miniaturas">${images.map((img, i) => `<button type="button" class="thumbnail-button${i === 0 ? ' active-thumb' : ''}" aria-label="${escapeHtml(img.alt || `Ver imagem ${i + 1}`)}"><img data-gallery-thumb src="${escapeHtml(safeUrl(img.image))}" alt="${escapeHtml(img.alt || art.title)}" loading="lazy" decoding="async"></button>`).join('')}</div>${localized('p', { pt: 'Clica na imagem principal para ampliar. Usa as teclas de direção ou desliza para ver as restantes imagens.', en: 'Click the main image to enlarge. Use the arrow keys or swipe to view the other images.', fr: 'Cliquez sur l’image principale pour l’agrandir. Utilisez les touches de direction ou faites glisser pour voir les autres images.' }, 'class="gallery-help"')}${(art.videos || []).map(video => {
    let player;
    if (video.file) player = `<video class="cms-video" controls playsinline preload="metadata"${video.poster ? ` poster="${escapeHtml(safeUrl(video.poster))}"` : ''}><source src="${escapeHtml(safeUrl(video.file))}">${localized('span', { pt: 'O teu navegador não suporta este vídeo.', en: 'Your browser does not support this video.', fr: 'Votre navigateur ne prend pas en charge cette vidéo.' })}</video>`;
    else player = `<button class="cms-video-consent" type="button" data-video-src="${escapeHtml(videoEmbed(video.url))}" data-video-title="${escapeHtml(video.caption || art.title)}">${localized('span', { pt: 'Reproduzir vídeo externo', en: 'Play external video', fr: 'Lire la vidéo externe' })}${localized('small', { pt: 'Ao reproduzir, ligas-te ao YouTube ou Vimeo.', en: 'Playing connects you to YouTube or Vimeo.', fr: 'La lecture vous connecte à YouTube ou Vimeo.' })}</button>`;
    return `<figure class="cms-video-figure">${player}${video.caption ? `<figcaption>${escapeHtml(video.caption)}</figcaption>` : ''}</figure>`;
  }).join('')}</section>`;
}

function artworkBody(art) {
  return `<main class="page artwork-page"><a class="back-link" href="/${art.category}.html">Voltar</a><section class="artwork-detail-layout"><aside class="artwork-info-panel"><h1>${escapeHtml(art.title)}</h1><p>${escapeHtml(art.year)}</p>${localized('p', art.technique)}<p>${escapeHtml(art.dimensions)}</p>${localized('p', statusLabels[art.availability] || statusLabels.unavailable)}<hr>${localized('p', art.description)}<a class="enquire-button" data-i18n="enquire" href="/inquires.html?work=${encodeURIComponent(art.title)}">Pedido de informação</a></aside>${gallery(art)}</section></main>`;
}

export async function loadContent(root = projectRoot) {
  const read = async name => JSON.parse(await readFile(path.join(root, 'content', name), 'utf8'));
  const catalogue = [];
  for (const name of (await readdir(path.join(root, 'content/catalogue'))).filter(n => n.endsWith('.json')).sort()) catalogue.push({ ...(await read(`catalogue/${name}`)), id: name.slice(0, -5) });
  return { catalogue, cms: JSON.parse(await readFile(path.join(root, 'cms-settings.json'), 'utf8')), settings: await read('pages/settings.json'), home: await read('pages/home.json'), biography: await read('pages/biography.json'), cv: await read('pages/cv.json') };
}

export async function buildSite({ root = projectRoot, output = path.join(root, 'dist'), content } = {}) {
  const data = content || await loadContent(root);
  const { settings, home, biography, cv } = data;
  const origin = new URL(safeUrl(settings.url)).origin;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(settings.email)) throw new Error('O email de contacto é inválido.');
  const catalogue = data.catalogue.filter(a => a.published !== false).sort((a, b) => Number(a.order || 0) - Number(b.order || 0) || a.id.localeCompare(b.id));
  const seen = new Set();
  for (const art of catalogue) {
    const filename = art.legacy_path || art.id;
    if (!filename || /[\/\\\x00-\x1f]/.test(filename) || filename === '.' || filename === '..') throw new Error(`Caminho de obra inválido: ${filename}`);
    if (seen.has(filename.toLowerCase())) throw new Error(`Duas obras usam o mesmo endereço: ${filename}`);
    seen.add(filename.toLowerCase());
    if (!art.title || !categoryLabels[art.category]) throw new Error(`Título ou categoria em falta: ${art.id}`);
    if (!statusLabels[art.availability]) throw new Error(`Estado de disponibilidade inválido: ${art.id}`);
    const images = [art.cover, ...(art.gallery || []).map(i => i.image)];
    for (const source of images) {
      const url = safeUrl(source);
      if (!url) throw new Error(`Falta uma imagem em ${art.title}`);
      if (url.startsWith('/')) {
        const local = path.join(root, decodeURIComponent(url.split(/[?#]/)[0]));
        if (!(await stat(local).catch(() => null))?.isFile()) throw new Error(`Imagem em falta: ${url} (${art.title})`);
      }
    }
    for (const video of art.videos || []) {
      if (!!video.file === !!video.url) throw new Error(`Em ${art.title}, escolhe um ficheiro de vídeo ou um link externo por vídeo.`);
      if (video.file) {
        const url = safeUrl(video.file);
        if (!/\.(mp4|webm)(?:[?#]|$)/i.test(url)) throw new Error('Usa vídeos MP4 ou WebM.');
        if (url.startsWith('/') && !(await stat(path.join(root, decodeURIComponent(url.split(/[?#]/)[0]))).catch(() => null))?.isFile()) throw new Error(`Vídeo em falta: ${url}`);
      } else videoEmbed(video.url);
    }
  }
  // Validate all inputs before replacing a previous successful build.
  for (const image of [home.artist_image, settings.social_image, cv.pdf, home.announcement?.image].filter(Boolean)) {
    const url = safeUrl(image);
    if (url.startsWith('/') && !(await stat(path.join(root, decodeURIComponent(url.split(/[?#]/)[0]))).catch(() => null))?.isFile()) throw new Error(`Ficheiro em falta: ${url}`);
  }
  if (home.announcement?.link) safeUrl(home.announcement.link);
  if (settings.instagram) safeUrl(settings.instagram);
  if (!path.resolve(output).startsWith(path.resolve(root) + path.sep)) throw new Error('A pasta de saída deve ficar dentro da pasta do projeto.');
  await rm(output, { recursive: true, force: true });
  await mkdir(path.join(output, 'series'), { recursive: true });
  for (const folder of ['assets', 'css', 'js', 'admin']) await cp(path.join(root, folder), path.join(output, folder), { recursive: true });
  for (const file of ['_redirects', 'manifest.webmanifest']) await cp(path.join(root, file), path.join(output, file));
  if ((await stat(path.join(root, 'llms.txt')).catch(() => null))?.isFile()) await cp(path.join(root, 'llms.txt'), path.join(output, 'llms.txt'));
  const savePage = async (filename, props) => writeFile(path.join(output, filename), shell(settings, props));
  const urls = ['/', '/works.html', '/studies.html', '/about.html', '/cv.html', '/contact.html'];
  for (const art of catalogue) {
    const urlPath = artworkPath(art);
    await savePage(`series/${art.legacy_path || art.id}.html`, { page: 'artwork', title: art.title, urlPath, description: cleanDescription(art.description) === '-' ? `${art.title}, ${art.year}. ${tr(art.technique).pt}. ${art.dimensions}.` : cleanDescription(art.description), image: art.cover, body: artworkBody(art), schema: { '@context': 'https://schema.org', '@type': 'VisualArtwork', name: art.title, dateCreated: String(art.year), artMedium: tr(art.technique).pt, image: new URL(safeUrl(art.cover), origin).href, url: origin + urlPath, creator: { '@type': 'Person', name: settings.title } } });
    urls.push(urlPath);
  }
  for (const category of ['works', 'studies']) {
    const arts = catalogue.filter(a => a.category === category);
    const labels = categoryLabels[category];
    const heading = category === 'works' ? { pt: 'Obras selecionadas', en: 'Selected works', fr: 'Œuvres sélectionnées' } : { pt: 'Estudos selecionados', en: 'Selected studies', fr: 'Études sélectionnées' };
    await savePage(`${category}.html`, { page: category, title: labels.pt, urlPath: `/${category}.html`, body: `<main class="page"><section class="page-heading">${localized('p', labels)}${localized('h1', heading)}</section><section class="works-columns"><div class="works-primary-column"><section class="series-list">${arts.map(art => `<a class="series-row" href="${escapeHtml(artworkPath(art))}"><img src="${escapeHtml(safeUrl(art.cover))}" alt="${escapeHtml(art.title)}" loading="lazy" decoding="async"><div><h2>${escapeHtml(art.title)}</h2><p>${escapeHtml(art.year)}</p></div></a>`).join('')}${!arts.length ? localized('p', { pt: 'Brevemente.', en: 'Coming soon.', fr: 'Prochainement.' }) : ''}</section></div></section></main>` });
  }
  const featured = catalogue.find(a => a.id === home.featured) || catalogue[0];
  const featuredImages = featured?.gallery?.length ? featured.gallery : featured ? [{ image: featured.cover }] : [];
  const announcement = home.announcement;
  await savePage('index.html', { page: 'home', title: '', urlPath: '/', body: `<main><section class="home-hero home-hero-duo" aria-label="${escapeHtml(settings.title)}"><figure class="home-feature home-feature-artist"><img class="hero-image" src="${escapeHtml(safeUrl(home.artist_image))}" alt="${escapeHtml(home.artist_alt || settings.title)}" decoding="async"></figure>${featured ? `<a class="home-feature home-feature-artwork" href="${escapeHtml(artworkPath(featured))}" aria-label="${escapeHtml(featured.title)}"><span class="home-artwork-switcher" aria-hidden="true"><img class="hero-image home-artwork-view home-artwork-view-frontal" src="${escapeHtml(safeUrl(featuredImages[0].image))}" alt="" decoding="async"><img class="hero-image home-artwork-view home-artwork-view-lateral" src="${escapeHtml(safeUrl((featuredImages[1] || featuredImages[0]).image))}" alt="" decoding="async"></span><span class="home-feature-caption">${escapeHtml(featured.title)}</span></a>` : ''}</section>${announcement?.enabled ? `<section class="cms-announcement">${announcement.image ? `<img src="${escapeHtml(safeUrl(announcement.image))}" alt="${escapeHtml(announcement.title)}" loading="lazy">` : ''}<div><h2>${escapeHtml(announcement.title)}</h2>${localized('p', announcement.text)}${announcement.link ? `<a href="${escapeHtml(safeUrl(announcement.link))}">${localized('span', { pt: 'Saber mais', en: 'Find out more', fr: 'En savoir plus' })}</a>` : ''}</div></section>` : ''}</main>` });
  await savePage('about.html', { page: 'bio', title: 'Biografia', urlPath: '/about.html', body: `<main class="page text-page"><section class="page-heading"><p data-i18n="bio_label">Biografia</p><h1>${escapeHtml(biography.title || settings.title)}</h1></section><article class="bio-text">${biography.paragraphs.map(p => localized('p', p)).join('')}</article></main>` });
  await savePage('cv.html', { page: 'cv', title: 'CV', urlPath: '/cv.html', body: `<main class="page text-page"><section class="page-heading"><p>CV</p><h1 data-i18n="cv_heading">Curriculum Vitae</h1></section><div class="cv-list">${cv.sections.map(s => `<div>${localized('span', s.heading)}${localized('p', s.body)}</div>`).join('')}</div>${cv.pdf ? `<p><a href="${escapeHtml(safeUrl(cv.pdf))}" target="_blank" rel="noopener noreferrer">${localized('span', { pt: 'Descarregar CV em PDF', en: 'Download CV as PDF', fr: 'Télécharger le CV en PDF' })}</a></p>` : ''}</main>` });
  // Keep the existing Netlify Forms markup and confirmation/legal pages.
  for (const file of ['contact.html', 'inquires.html', 'inquire.html', 'enquire.html', 'enquiries.html', 'thank-you.html', 'privacy.html', 'terms.html', 'copyright.html']) {
    let markup = await readFile(path.join(root, 'templates', file), 'utf8');
    markup = markup.replaceAll('studio.joaocarneiro@gmail.com', escapeHtml(settings.email)).replaceAll('https://joao-carneiro.com', origin).replaceAll('https://www.instagram.com/joao__carneiro/', escapeHtml(settings.instagram || origin)).replaceAll('@joao__carneiro', escapeHtml(settings.instagram_label || 'Instagram')).replaceAll('Lisboa, Portugal', escapeHtml(settings.location));
    markup = markup.replace(/<header class="site-header">[\s\S]*?<\/header>/, navigation(settings));
    await writeFile(path.join(output, file), markup);
    if (['privacy.html', 'terms.html', 'copyright.html'].includes(file)) urls.push('/' + file);
  }
  await mkdir(path.join(output, 'thank-you'), { recursive: true });
  await cp(path.join(output, 'thank-you.html'), path.join(output, 'thank-you/index.html'));
  // Relative references in the old confirmation template must work at /thank-you/.
  const thanks = await readFile(path.join(output, 'thank-you/index.html'), 'utf8');
  await writeFile(path.join(output, 'thank-you/index.html'), thanks.replaceAll('href="css/', 'href="/css/').replaceAll('href="assets/', 'href="/assets/').replaceAll('src="js/', 'src="/js/').replace(/href="(index|works|studies|about|cv|contact|privacy|terms|copyright)\.html"/g, 'href="/$1.html"'));
  await writeFile(path.join(output, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(p => `<url><loc>${escapeHtml(origin + p)}</loc></url>`).join('')}</urlset>`);
  await writeFile(path.join(output, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /admin/\nSitemap: ${origin}/sitemap.xml\n`);
  const config = cmsConfig({ ...settings, ...data.cms });
  await writeFile(path.join(output, 'admin/config.yml'), JSON.stringify(config, null, 2) + '\n');
  await writeFile(path.join(output, 'admin/state.json'), JSON.stringify({ configured: Boolean(data.cms?.repository), total: catalogue.length, works: catalogue.filter(a => a.category === 'works').length, studies: catalogue.filter(a => a.category === 'studies').length }) + '\n');
  return { total: catalogue.length, works: catalogue.filter(a => a.category === 'works').length, studies: catalogue.filter(a => a.category === 'studies').length, output };
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  try { const result = await buildSite(); console.log(`Site gerado: ${result.works} obras e ${result.studies} estudos. Saída: ${result.output}`); }
  catch (error) { console.error(`Não foi possível gerar o site: ${error.message}`); process.exitCode = 1; }
}
