(function () {
  const CMS = window.CMS;
  const h = window.h;
  if (!CMS || !h) return;
  CMS.registerPreviewStyle('/admin/preview.css');
  CMS.registerEventListener({ name: 'preSave', handler: ({ entry }) => {
    if (entry.get('collection') !== 'artworks') return entry.get('data');
    const data = entry.get('data').toJS();
    for (const video of data.videos || []) {
      if (!!video.file === !!video.url) throw new Error('Em cada vídeo, preenche um ficheiro OU um link YouTube/Vimeo.');
      if (video.file && !/\.(mp4|webm)(?:[?#]|$)/i.test(video.file)) throw new Error('Usa um vídeo MP4 ou WebM.');
      if (video.url) {
        let valid = false;
        try {
          const u = new URL(video.url);
          valid = u.protocol === 'https:' && !u.username && !u.password && ((['youtube.com', 'www.youtube.com', 'm.youtube.com'].includes(u.hostname) && /^[a-zA-Z0-9_-]{11}$/.test(u.searchParams.get('v') || u.pathname.match(/^\/(?:embed|shorts)\/([^/]+)/)?.[1] || '')) || (u.hostname === 'youtu.be' && /^[a-zA-Z0-9_-]{11}$/.test(u.pathname.slice(1))) || (['vimeo.com', 'www.vimeo.com', 'player.vimeo.com'].includes(u.hostname) && /^\/(?:video\/)?\d+\/?$/.test(u.pathname)));
        } catch {}
        if (!valid) throw new Error('Indica um link HTTPS válido do YouTube ou Vimeo.');
      }
    }
    return entry.get('data');
  } });
  const asset = (getAsset, value) => value ? String(getAsset(value)) : '';
  const pt = value => typeof value === 'string' ? value : value?.pt || '';
  const paragraphs = value => pt(value).split('\n').map((line, i) => h('p', { key: i }, line));
  const availability = { available: 'Disponível', reserved: 'Reservado', sold: 'Vendido', unavailable: 'Indisponível' };
  CMS.registerPreviewTemplate('artworks', function ({ entry, getAsset }) {
    const d = entry.get('data').toJS();
    return h('article', { className: 'preview' }, h('p', { className: 'label' }, d.category === 'studies' ? 'Estudos' : 'Obras'), h('h1', {}, d.title), h('p', {}, d.year), h('p', {}, pt(d.technique)), h('p', {}, d.dimensions), h('p', {}, availability[d.availability]), h('p', { className: 'visibility' }, d.published === false ? 'Esta peça está oculta no site.' : 'Esta peça ficará visível quando a publicares.'), d.cover && h('img', { src: asset(getAsset, d.cover), alt: d.title }), ...paragraphs(d.description), h('div', { className: 'images' }, ...(d.gallery || []).map((img, i) => h('figure', { key: i }, h('img', { src: asset(getAsset, img.image), alt: img.alt || d.title }), h('figcaption', {}, img.alt)))), ...(d.videos || []).map((v, i) => h('div', { key: 'v' + i, className: 'video' }, h('p', {}, v.caption || 'Vídeo'), v.file ? h('video', { controls: true, src: asset(getAsset, v.file), poster: asset(getAsset, v.poster) }) : h('p', {}, v.url))) );
  });
  CMS.registerPreviewTemplate('home', function ({ entry, getAsset }) {
    const d = entry.get('data').toJS();
    return h('article', { className: 'preview' }, h('h1', {}, 'Página inicial'), d.artist_image && h('img', { src: asset(getAsset, d.artist_image), alt: d.artist_alt }), h('p', {}, 'Peça em destaque: ' + (d.featured || 'Primeira peça visível')), d.announcement?.enabled && h('section', {}, h('h2', {}, d.announcement.title), ...paragraphs(d.announcement.text), d.announcement.image && h('img', { src: asset(getAsset, d.announcement.image), alt: d.announcement.title })));
  });
  CMS.registerPreviewTemplate('biography', function ({ entry }) { const d = entry.get('data').toJS(); return h('article', { className: 'preview' }, h('h1', {}, d.title), ...(d.paragraphs || []).map((p, i) => h('p', { key: i }, pt(p)))); });
  CMS.registerPreviewTemplate('cv', function ({ entry }) { const d = entry.get('data').toJS(); return h('article', { className: 'preview' }, h('h1', {}, 'Curriculum Vitae'), ...(d.sections || []).map((s, i) => h('section', { key: i }, h('h2', {}, pt(s.heading)), ...paragraphs(s.body))), d.pdf && h('p', {}, 'Inclui CV em PDF.')); });
})();
