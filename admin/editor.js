(async function () {
  const loading = document.getElementById('loading');
  try {
    const response = await fetch('/admin/config.yml', { cache: 'no-store' });
    if (!response.ok) throw new Error('Não foi possível ler a configuração do editor.');
    const config = JSON.parse(await response.text()); // JSON is also valid YAML.
    if (!config.backend.repo) {
      loading.innerHTML = '<h1>O editor está preparado.</h1><p>Falta concluir a ligação ao GitHub e ao Netlify para poderes guardar e publicar alterações.</p><p>Esta configuração é feita uma única vez. Depois, a gestão faz-se aqui.</p><p><a href="/admin/ajuda.html#instalacao">Consultar a instalação</a></p><p><a href="/admin/">Voltar à gestão do site</a></p>';
      return;
    }
    window.CMS_MANUAL_INIT = true;
    await new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/decap-cms@3.16.3/dist/decap-cms.js';
      script.onload = resolve;
      script.onerror = () => reject(new Error('Não foi possível carregar o editor. Verifica a ligação à Internet e tenta novamente.'));
      document.head.appendChild(script);
    });
    window.CMS.init({ config: { ...config, load_config_file: false } });
    await new Promise((resolve, reject) => {
      const script = document.createElement('script'); script.src = '/admin/previews.js'; script.onload = resolve; script.onerror = reject; document.head.appendChild(script);
    });
    loading.remove();
  } catch (error) {
    loading.replaceChildren();
    const title = document.createElement('h1'); title.textContent = 'Não foi possível abrir o editor.';
    const description = document.createElement('p'); description.textContent = error.message || 'Recarrega esta página para voltar a tentar.';
    const link = document.createElement('a'); link.href = '/admin/'; link.textContent = 'Voltar à gestão do site'; loading.append(title, description, link);
  }
})();
