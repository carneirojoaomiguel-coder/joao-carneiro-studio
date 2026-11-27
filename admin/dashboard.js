fetch('/admin/state.json', { cache: 'no-store' }).then(response => {
  if (!response.ok) throw new Error('Não foi possível consultar a configuração.');
  return response.json();
}).then(state => {
  document.getElementById('works-count').textContent = state.works;
  document.getElementById('studies-count').textContent = state.studies;
  document.getElementById('setup').hidden = state.configured;
}).catch(() => { document.getElementById('setup').hidden = false; });
