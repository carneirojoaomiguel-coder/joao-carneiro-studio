import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const get = flag => { const i = args.indexOf(flag); return i < 0 ? undefined : args[i + 1]; };
const repository = get('--repo');
const branch = get('--branch') || 'main';
const url = get('--url');
if (!repository || !/^[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+$/.test(repository) || !/^[a-zA-Z0-9_./-]+$/.test(branch) || branch.includes('..')) {
  console.error('Uso: node scripts/configure.mjs --repo UTILIZADOR/REPOSITORIO [--branch main] [--url https://joao-carneiro.com]');
  process.exitCode = 1;
} else {
  let normalized;
  if (url) { const u = new URL(url); if (u.protocol !== 'https:' || u.username || u.password) throw new Error('O domínio deve usar HTTPS.'); normalized = u.origin; }
  await writeFile(path.join(root, 'cms-settings.json'), JSON.stringify({ repository, branch }, null, 2) + '\n');
  if (normalized) {
    const file = path.join(root, 'content/pages/settings.json');
    const settings = JSON.parse(await readFile(file, 'utf8')); settings.url = normalized;
    await writeFile(file, JSON.stringify(settings, null, 2) + '\n');
  }
  console.log(`Backoffice associado a ${repository}, ramo ${branch}. Executa npm run build e publica o commit no GitHub.`);
}
