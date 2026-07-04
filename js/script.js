
function normalizeText(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}



const translations = {
  pt: {
    nav_works: 'Obras', nav_studies: 'Estudos', nav_bio: 'Biografia', nav_cv: 'CV', nav_contact: 'Contacto', menu: 'Menu', instagram: 'Instagram',
    footer_rights: 'João Carneiro. Todos os direitos reservados.', legal_info: 'Informação legal',
    privacy_link: 'Política de Privacidade', terms_link: 'Termos de Utilização', copyright_link: 'Direitos de Autor',
    title_works: 'Obras — João Carneiro', meta_works: 'Obras e séries selecionadas de João Carneiro.', works_label: 'Obras', works_heading: 'Séries selecionadas', works_column: 'Trabalhos selecionados', studies_column: 'Estudos',
    title_studies: 'Estudos — João Carneiro', meta_studies: 'Estudos selecionados de João Carneiro.', studies_label: 'Estudos', studies_heading: 'Estudos',
    title_about: 'Biografia — João Carneiro', title_cv: 'CV — João Carneiro', bio_label: 'Biografia', cv_heading: 'Curriculum Vitae', education: 'Formação', projects: 'Projetos', exhibitions: 'Exposições',
    title_contact: 'Contacto — João Carneiro', contact_label: 'Contacto', inquiries: 'Pedidos de informação', name: 'Nome', email: 'Email', work_interest: 'Obra de interesse', message: 'Mensagem', send_inquiry: 'Enviar pedido',
    back: '← Voltar a Obras', enquire: 'Pedido de informação', available: 'Disponível', not_available: 'Indisponível',
    legal_label: 'Legal', privacy_title: 'Política de Privacidade', terms_title: 'Termos de Utilização', copyright_title: 'Direitos de Autor', privacy_title_full: 'Política de Privacidade — João Carneiro', terms_title_full: 'Termos de Utilização — João Carneiro', copyright_title_full: 'Direitos de Autor — João Carneiro',
    last_update: 'Última atualização: julho de 2026.',
    close: 'Fechar', prev: 'Imagem anterior', next: 'Imagem seguinte', acrylic: 'Acrílico e tinta spray sobre madeira'
  },
  en: {
    nav_works: 'Works', nav_studies: 'Studies', nav_bio: 'Biography', nav_cv: 'CV', nav_contact: 'Contact', menu: 'Menu', instagram: 'Instagram',
    footer_rights: 'João Carneiro. All rights reserved.', legal_info: 'Legal information',
    privacy_link: 'Privacy Policy', terms_link: 'Terms of Use', copyright_link: 'Copyright',
    title_works: 'Works — João Carneiro', meta_works: 'Selected works and series by João Carneiro.', works_label: 'Works', works_heading: 'Selected Series', works_column: 'Selected works', studies_column: 'Studies',
    title_studies: 'Studies — João Carneiro', meta_studies: 'Selected studies by João Carneiro.', studies_label: 'Studies', studies_heading: 'Studies',
    title_about: 'Biography — João Carneiro', title_cv: 'CV — João Carneiro', bio_label: 'Biography', cv_heading: 'Curriculum Vitae', education: 'Education', projects: 'Projects', exhibitions: 'Exhibitions',
    title_contact: 'Contact — João Carneiro', contact_label: 'Contact', inquiries: 'Inquiries', name: 'Name', email: 'Email', work_interest: 'Work of interest', message: 'Message', send_inquiry: 'Send inquiry',
    back: '← Back to Works', enquire: 'Enquire', available: 'Available', not_available: 'Not available',
    legal_label: 'Legal', privacy_title: 'Privacy Policy', terms_title: 'Terms of Use', copyright_title: 'Copyright', privacy_title_full: 'Privacy Policy — João Carneiro', terms_title_full: 'Terms of Use — João Carneiro', copyright_title_full: 'Copyright — João Carneiro',
    last_update: 'Last updated: July 2026.',
    close: 'Close', prev: 'Previous image', next: 'Next image', acrylic: 'Acrylic and spray paint on wood'
  }
};

const textTranslations = {
  'Menu': { pt: 'Menu', en: 'Menu' },
  'Works': { pt: 'Obras', en: 'Works' },
  'Studies': { pt: 'Estudos', en: 'Studies' },
  'Biography': { pt: 'Biografia', en: 'Biography' },
  'CV': { pt: 'CV', en: 'CV' },
  'Contact': { pt: 'Contacto', en: 'Contact' },
  'Instagram': { pt: 'Instagram', en: 'Instagram' },
  'Privacy Policy': { pt: 'Política de Privacidade', en: 'Privacy Policy' },
  'Terms of Use': { pt: 'Termos de Utilização', en: 'Terms of Use' },
  'Copyright': { pt: 'Direitos de Autor', en: 'Copyright' },
  'João Carneiro. Todos os direitos reservados.': { pt: 'João Carneiro. Todos os direitos reservados.', en: 'João Carneiro. All rights reserved.' },
  'Contact': { pt: 'Contacto', en: 'Contact' },
  'Inquiries': { pt: 'Pedidos de informação', en: 'Inquiries' },
  'Obras': { pt: 'Obras', en: 'Works' },
  'Séries selecionadas': { pt: 'Séries selecionadas', en: 'Selected Series' },
  'Trabalhos': { pt: 'Trabalhos selecionados', en: 'Selected works' },
  'Trabalhos selecionados': { pt: 'Trabalhos selecionados', en: 'Selected works' },
  'Estudos': { pt: 'Estudos', en: 'Studies' },
  'Biografia': { pt: 'Biografia', en: 'Biography' },
  'Contacto': { pt: 'Contacto', en: 'Contact' },
  'Pedidos de informação': { pt: 'Pedidos de informação', en: 'Inquiries' },
  'Curriculum Vitae': { pt: 'Curriculum Vitae', en: 'Curriculum Vitae' },
  'Formação': { pt: 'Formação', en: 'Education' },
  'Projetos': { pt: 'Projetos', en: 'Projects' },
  'Exposições': { pt: 'Exposições', en: 'Exhibitions' },
  'Legal': { pt: 'Legal', en: 'Legal' },
  'Direitos de autor': { pt: 'Direitos de Autor', en: 'Copyright' },
  'Acrylic and spray on canvas': { pt: 'Acrílico e spray sobre tela', en: 'Acrylic and spray on canvas' },
  'Acrylic and spray paint on wood': { pt: 'Acrílico e tinta spray sobre madeira', en: 'Acrylic and spray paint on wood' },
  'Acrylic and spray on 180 g/m² paper': { pt: 'Acrílico e spray sobre papel 180 g/m²', en: 'Acrylic and spray on 180 g/m² paper' },
  'Acrylic and spray on 400 g/m² paper': { pt: 'Acrílico e spray sobre papel 400 g/m²', en: 'Acrylic and spray on 400 g/m² paper' },
  'Mixed media on canvas': { pt: 'Técnica mista sobre tela', en: 'Mixed media on canvas' },
  'Available': { pt: 'Disponível', en: 'Available' },
  'Not available': { pt: 'Indisponível', en: 'Not available' },
  'Abstract': { pt: 'Abstrato', en: 'Abstract' },
  'Portrait of Le Corbusier': { pt: 'Retrato de Le Corbusier', en: 'Portrait of Le Corbusier' },
  'Tribute to Vincent Cassel': { pt: 'Homenagem a Vincent Cassel', en: 'Tribute to Vincent Cassel' },
  'Portrait of Werner Herzog': { pt: 'Retrato de Werner Herzog', en: 'Portrait of Werner Herzog' },
  'Portrait of MF DOOM': { pt: 'Retrato de MF DOOM', en: 'Portrait of MF DOOM' },
  '← Back to Works': { pt: '← Voltar a Obras', en: '← Back to Works' },
  'Enquire': { pt: 'Pedido de informação', en: 'Enquire' },
  'Burial explores the anonymous mass of humanity consumed by systems of power, where individual identity dissolves into silence and uniformity.': { pt: 'Burial explora a massa anónima da humanidade consumida por sistemas de poder, onde a identidade individual se dissolve em silêncio e uniformidade.', en: 'Burial explores the anonymous mass of humanity consumed by systems of power, where individual identity dissolves into silence and uniformity.' },
  'Caught between armed tensions and calls for unity, Europe feels more hesitant than decisive. Political responses shift between careful planning and outright paralysis, while old national interests keep getting in the way of a shared vision. In this fragile balance, the real danger is not just conflict, it is failing to choose a direction and quietly drifting along.': { pt: 'Entre tensões armadas e apelos à unidade, a Europa parece mais hesitante do que decisiva. As respostas políticas oscilam entre planeamento cauteloso e paralisia evidente, enquanto velhos interesses nacionais continuam a bloquear uma visão comum. Neste equilíbrio frágil, o verdadeiro perigo não é apenas o conflito, mas a incapacidade de escolher uma direção e continuar à deriva.', en: 'Caught between armed tensions and calls for unity, Europe feels more hesitant than decisive. Political responses shift between careful planning and outright paralysis, while old national interests keep getting in the way of a shared vision. In this fragile balance, the real danger is not just conflict, it is failing to choose a direction and quietly drifting along.' },
  'Unsettled I explores visual instability, tension and fragmentation through layered marks, gesture and surface.': { pt: 'Unsettled I explora instabilidade visual, tensão e fragmentação através de marcas sobrepostas, gesto e superfície.', en: 'Unsettled I explores visual instability, tension and fragmentation through layered marks, gesture and surface.' },
  'Unsettled II explores visual instability, tension and fragmentation through layered marks, gesture and surface.': { pt: 'Unsettled II explora instabilidade visual, tensão e fragmentação através de marcas sobrepostas, gesto e superfície.', en: 'Unsettled II explores visual instability, tension and fragmentation through layered marks, gesture and surface.' },
  'Universidade Lusófona de Humanidades e Tecnologias — Arquitetura': { pt: 'Universidade Lusófona de Humanidades e Tecnologias — Arquitetura', en: 'Universidade Lusófona de Humanidades e Tecnologias — Architecture' },
  'Escola Secundária Artística António Arroio — Design de Comunicação': { pt: 'Escola Secundária Artística António Arroio — Design de Comunicação', en: 'Escola Secundária Artística António Arroio — Communication Design' },
  'Lisboa, Portugal': { pt: 'Lisboa, Portugal', en: 'Lisbon, Portugal' },
  'Study 01': { pt: 'Estudo 01', en: 'Study 01' },
  'Study 02': { pt: 'Estudo 02', en: 'Study 02' },
  'Study 03': { pt: 'Estudo 03', en: 'Study 03' }
};

function translateKnownTextNodes(lang) {
  const elements = document.querySelectorAll('p, span, h1, h2, a, button');
  elements.forEach(el => {
    if (el.closest('.language-switch')) return;
    const normalized = normalizeText(el.textContent);
    for (const entry of Object.values(textTranslations)) {
      if (normalized === entry.pt || normalized === entry.en) {
        el.textContent = entry[lang];
        return;
      }
    }
  });
}

function getAssetPrefix() {
  return window.location.pathname.includes('/series/') ? '../' : '';
}

function createLanguageSwitch() {
  const nav = document.querySelector('.site-nav');
  if (!nav || document.querySelector('.language-switch')) return;
  const wrapper = document.createElement('div');
  wrapper.className = 'language-switch';
  wrapper.setAttribute('aria-label', 'Language');
  wrapper.innerHTML = '<button type="button" data-lang-option="pt">PT</button><span>/</span><button type="button" data-lang-option="en">EN</button>';
  nav.appendChild(wrapper);
  wrapper.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => setLanguage(button.dataset.langOption));
  });
}

function translateStaticText(lang) {
  const dict = translations[lang] || translations.pt;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key]) el.placeholder = dict[key];
  });
  document.querySelectorAll('[data-i18n-content]').forEach(el => {
    const key = el.dataset.i18nContent;
    if (dict[key]) el.setAttribute('content', dict[key]);
  });
  document.querySelectorAll('[data-pt][data-en][content]').forEach(el => {
    el.setAttribute('content', lang === 'en' ? el.dataset.en : el.dataset.pt);
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    const key = el.dataset.i18nAriaLabel;
    const labels = {
      menu_open: { pt: 'Abrir menu', en: 'Open menu' },
      main_menu: { pt: 'Menu principal', en: 'Main menu' },
      legal_info: { pt: 'Informação legal', en: 'Legal information' },
      close: { pt: 'Fechar', en: 'Close' },
      prev: { pt: 'Imagem anterior', en: 'Previous image' },
      next: { pt: 'Imagem seguinte', en: 'Next image' }
    };
    if (labels[key]) el.setAttribute('aria-label', labels[key][lang]);
  });
  document.querySelectorAll('[data-pt][data-en]').forEach(el => {
    el.innerHTML = lang === 'en' ? el.dataset.en : el.dataset.pt;
  });

  const navLinks = Array.from(document.querySelectorAll('.site-nav a'));
  navLinks.forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href.endsWith('works.html')) link.textContent = dict.nav_works;
    if (href.endsWith('about.html')) link.textContent = dict.nav_bio;
    if (href.endsWith('contact.html')) link.textContent = dict.nav_contact;
  });

  const menuButton = document.querySelector('.menu-toggle');
  if (menuButton) {
    menuButton.textContent = dict.menu;
    menuButton.setAttribute('aria-label', lang === 'pt' ? 'Abrir menu' : 'Open menu');
  }

  document.querySelectorAll('.back-link').forEach(link => link.textContent = dict.back);
  document.querySelectorAll('.enquire-button').forEach(link => link.textContent = dict.enquire);
  document.querySelectorAll('.artwork-info-panel p').forEach(p => {
    const value = p.textContent.trim();
    if (value === 'Available' || value === 'Disponível') p.textContent = dict.available;
    if (value === 'Acrylic and spray paint on wood' || value === 'Acrílico e tinta spray sobre madeira') p.textContent = dict.acrylic;
  });

  translateKnownTextNodes(lang);

  const active = document.querySelectorAll('[data-lang-option]');
  active.forEach(button => button.classList.toggle('is-active', button.dataset.langOption === lang));
}

function setLanguage(lang) {
  const normalized = lang === 'en' ? 'en' : 'pt';
  localStorage.setItem('site-language', normalized);
  translateStaticText(normalized);
}

createLanguageSwitch();
setLanguage(localStorage.getItem('site-language') || 'pt');


/* Artwork gallery / lightbox
   The artwork page keeps a normal page layout. The larger viewing mode only appears
   as an overlay after the visitor clicks the main image or a thumbnail. */
(function () {
  const galleryMain = document.querySelector('[data-gallery-main]');
  const galleryThumbs = Array.from(document.querySelectorAll('[data-gallery-thumb]'));
  const thumbnailButtons = Array.from(document.querySelectorAll('.thumbnail-button'));
  let activeGalleryIndex = 0;
  let lightboxItems = [];
  let currentIndex = 0;
  let lastFocusedElement = null;
  let touchStartX = 0;

  function currentLang() {
    return localStorage.getItem('site-language') === 'en' ? 'en' : 'pt';
  }

  function itemFromImage(img) {
    return {
      src: img.getAttribute('data-full') || img.currentSrc || img.src || img.getAttribute('src'),
      alt: img.alt || img.getAttribute('aria-label') || 'Imagem da obra'
    };
  }

  function getGalleryItems() {
    const source = galleryThumbs.length ? galleryThumbs : (galleryMain ? [galleryMain] : []);
    return source.map(itemFromImage).filter(item => item.src);
  }

  function setMainArtwork(index) {
    if (!galleryMain || !galleryThumbs[index]) return;
    activeGalleryIndex = index;
    const item = itemFromImage(galleryThumbs[index]);
    galleryMain.src = item.src;
    galleryMain.alt = item.alt;
    thumbnailButtons.forEach((button, i) => {
      button.classList.toggle('active-thumb', i === index);
      button.setAttribute('aria-pressed', i === index ? 'true' : 'false');
    });
  }

  function buildLightbox() {
    let box = document.querySelector('.lightbox');
    if (!box) {
      box = document.createElement('div');
      box.className = 'lightbox';
      document.body.appendChild(box);
    }
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-hidden', 'true');
    box.setAttribute('aria-label', currentLang() === 'en' ? 'Expanded artwork gallery' : 'Galeria ampliada da obra');
    box.innerHTML = `
      <button aria-label="Fechar" class="lightbox-close" type="button">×</button>
      <button aria-label="Imagem anterior" class="lightbox-prev" type="button">‹</button>
      <figure class="lightbox-figure">
        <img alt="Imagem ampliada" decoding="async" src="" />
        <figcaption class="lightbox-caption"></figcaption>
      </figure>
      <button aria-label="Imagem seguinte" class="lightbox-next" type="button">›</button>
      <div class="lightbox-counter" aria-live="polite"></div>
    `;
    return box;
  }

  const lightbox = buildLightbox();
  const lightboxImg = lightbox.querySelector('img');
  const caption = lightbox.querySelector('.lightbox-caption');
  const counter = lightbox.querySelector('.lightbox-counter');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');

  function render() {
    if (!lightboxItems.length) return;
    const item = lightboxItems[currentIndex];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt;
    caption.textContent = item.alt;
    counter.textContent = `${currentIndex + 1} / ${lightboxItems.length}`;
    const single = lightboxItems.length <= 1;
    prevBtn.hidden = single;
    nextBtn.hidden = single;
  }

  function openAt(index) {
    lightboxItems = getGalleryItems();
    if (!lightboxItems.length) return;
    currentIndex = Math.max(0, Math.min(index, lightboxItems.length - 1));
    lastFocusedElement = document.activeElement;
    render();
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
    closeBtn.focus();
  }

  function close() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    lightboxImg.src = '';
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') lastFocusedElement.focus();
  }

  function move(step) {
    if (!lightboxItems.length) return;
    currentIndex = (currentIndex + step + lightboxItems.length) % lightboxItems.length;
    render();
    setMainArtwork(currentIndex);
  }

  if (galleryMain) {
    galleryMain.tabIndex = 0;
    galleryMain.setAttribute('role', 'button');
    galleryMain.setAttribute('aria-label', currentLang() === 'en' ? 'Open expanded artwork gallery' : 'Abrir galeria ampliada da obra');
    galleryMain.addEventListener('click', () => openAt(activeGalleryIndex));
    galleryMain.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openAt(activeGalleryIndex);
      }
    });
  }

  thumbnailButtons.forEach((button, index) => {
    button.setAttribute('aria-pressed', index === 0 ? 'true' : 'false');
    button.addEventListener('click', (event) => {
      event.preventDefault();
      setMainArtwork(index);
      openAt(index);
    });
  });

  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', (event) => { event.stopPropagation(); move(-1); });
  nextBtn.addEventListener('click', (event) => { event.stopPropagation(); move(1); });
  lightbox.addEventListener('click', (event) => { if (event.target === lightbox) close(); });
  lightbox.addEventListener('touchstart', (event) => { touchStartX = event.changedTouches[0].screenX; }, { passive: true });
  lightbox.addEventListener('touchend', (event) => {
    const delta = event.changedTouches[0].screenX - touchStartX;
    if (Math.abs(delta) > 45) move(delta < 0 ? 1 : -1);
  }, { passive: true });

  document.addEventListener('keydown', (event) => {
    if (!lightbox.classList.contains('is-open')) return;
    if (event.key === 'Escape') close();
    if (event.key === 'ArrowRight') move(1);
    if (event.key === 'ArrowLeft') move(-1);
  });
})();

/* Final robust artwork lightbox fix: event delegation + inline overlay styles.
   This does not depend on previous lightbox code or CSS order. */
(function () {
  if (window.__joaoFinalLightboxInstalled) return;
  window.__joaoFinalLightboxInstalled = true;

  function getGalleryImages(trigger) {
    var page = trigger.closest('.artwork-page') || document;
    var thumbs = Array.prototype.slice.call(page.querySelectorAll('.thumbnail-row img'));
    var main = page.querySelector('.main-artwork-image');
    var imgs = thumbs.length ? thumbs : (main ? [main] : []);
    return imgs.map(function (img) {
      return {
        src: img.getAttribute('data-full') || img.currentSrc || img.src || img.getAttribute('src'),
        alt: img.getAttribute('alt') || 'Artwork image'
      };
    }).filter(function (item) { return !!item.src; });
  }

  var items = [];
  var index = 0;
  var startX = 0;

  function ensureOverlay() {
    var overlay = document.getElementById('jc-lightbox-overlay');
    if (overlay) return overlay;

    overlay = document.createElement('div');
    overlay.id = 'jc-lightbox-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.innerHTML = '' +
      '<button class="jc-lightbox-close" type="button" aria-label="Fechar">×</button>' +
      '<button class="jc-lightbox-prev" type="button" aria-label="Imagem anterior">‹</button>' +
      '<img class="jc-lightbox-image" alt="" />' +
      '<button class="jc-lightbox-next" type="button" aria-label="Imagem seguinte">›</button>' +
      '<div class="jc-lightbox-count" aria-live="polite"></div>';
    document.body.appendChild(overlay);

    var style = document.createElement('style');
    style.textContent = '' +
      '#jc-lightbox-overlay{position:fixed!important;inset:0!important;display:none!important;align-items:center!important;justify-content:center!important;background:rgba(5,5,5,.96)!important;z-index:2147483647!important;padding:32px!important;box-sizing:border-box!important}' +
      '#jc-lightbox-overlay.is-open{display:flex!important}' +
      '#jc-lightbox-overlay .jc-lightbox-image{display:block!important;max-width:92vw!important;max-height:88vh!important;width:auto!important;height:auto!important;object-fit:contain!important;background:transparent!important;box-shadow:none!important}' +
      '#jc-lightbox-overlay button{position:absolute!important;z-index:2!important;border:0!important;background:rgba(255,255,255,.08)!important;color:#fff!important;cursor:pointer!important;font-family:Arial,sans-serif!important;line-height:1!important;border-radius:999px!important}' +
      '#jc-lightbox-overlay button:hover{background:rgba(255,255,255,.2)!important}' +
      '#jc-lightbox-overlay .jc-lightbox-close{top:22px!important;right:28px!important;width:46px!important;height:46px!important;font-size:34px!important}' +
      '#jc-lightbox-overlay .jc-lightbox-prev,#jc-lightbox-overlay .jc-lightbox-next{top:50%!important;transform:translateY(-50%)!important;width:56px!important;height:56px!important;font-size:46px!important}' +
      '#jc-lightbox-overlay .jc-lightbox-prev{left:28px!important}' +
      '#jc-lightbox-overlay .jc-lightbox-next{right:28px!important}' +
      '#jc-lightbox-overlay .jc-lightbox-count{position:absolute!important;right:28px!important;bottom:22px!important;color:#fff!important;font:14px/1.4 Arial,sans-serif!important;letter-spacing:.08em!important}' +
      'body.jc-lightbox-open{overflow:hidden!important}' +
      '.main-artwork-image,.thumbnail-button{cursor:zoom-in!important}' +
      '.thumbnail-button img{pointer-events:none!important}' +
      '@media(max-width:700px){#jc-lightbox-overlay{padding:18px!important}#jc-lightbox-overlay .jc-lightbox-image{max-width:94vw!important;max-height:82vh!important}#jc-lightbox-overlay .jc-lightbox-prev{left:10px!important}#jc-lightbox-overlay .jc-lightbox-next{right:10px!important}#jc-lightbox-overlay .jc-lightbox-prev,#jc-lightbox-overlay .jc-lightbox-next{width:44px!important;height:44px!important;font-size:34px!important}#jc-lightbox-overlay .jc-lightbox-close{top:12px!important;right:12px!important;width:42px!important;height:42px!important;font-size:30px!important}}';
    document.head.appendChild(style);

    overlay.querySelector('.jc-lightbox-close').addEventListener('click', close);
    overlay.querySelector('.jc-lightbox-prev').addEventListener('click', function (e) { e.stopPropagation(); move(-1); });
    overlay.querySelector('.jc-lightbox-next').addEventListener('click', function (e) { e.stopPropagation(); move(1); });
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    overlay.addEventListener('touchstart', function (e) { startX = e.changedTouches[0].clientX; }, { passive: true });
    overlay.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 45) move(dx < 0 ? 1 : -1);
    }, { passive: true });
    return overlay;
  }

  function render() {
    var overlay = ensureOverlay();
    var img = overlay.querySelector('.jc-lightbox-image');
    var count = overlay.querySelector('.jc-lightbox-count');
    var prev = overlay.querySelector('.jc-lightbox-prev');
    var next = overlay.querySelector('.jc-lightbox-next');
    if (!items.length) return;
    img.src = items[index].src;
    img.alt = items[index].alt;
    count.textContent = (index + 1) + ' / ' + items.length;
    var single = items.length < 2;
    prev.style.display = single ? 'none' : 'block';
    next.style.display = single ? 'none' : 'block';
  }

  function open(trigger, desiredIndex) {
    items = getGalleryImages(trigger);
    if (!items.length) return;
    index = Math.max(0, Math.min(desiredIndex || 0, items.length - 1));
    var overlay = ensureOverlay();
    render();
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('jc-lightbox-open');
    overlay.querySelector('.jc-lightbox-close').focus();
  }

  function close() {
    var overlay = ensureOverlay();
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('jc-lightbox-open');
    var img = overlay.querySelector('.jc-lightbox-image');
    if (img) img.removeAttribute('src');
  }

  function move(step) {
    if (!items.length) return;
    index = (index + step + items.length) % items.length;
    render();
  }

  document.addEventListener('click', function (event) {
    var target = event.target;
    var main = target.closest && target.closest('.main-artwork-image');
    var thumbButton = target.closest && target.closest('.thumbnail-button');
    if (!main && !thumbButton) return;
    event.preventDefault();
    event.stopPropagation();
    var desiredIndex = 0;
    if (thumbButton && thumbButton.parentElement) {
      desiredIndex = Array.prototype.indexOf.call(thumbButton.parentElement.querySelectorAll('.thumbnail-button'), thumbButton);
    } else if (main) {
      var all = Array.prototype.slice.call((main.closest('.artwork-gallery-panel') || document).querySelectorAll('.thumbnail-row img'));
      var mainSrc = main.currentSrc || main.src || main.getAttribute('src');
      var found = all.findIndex(function (img) { return (img.currentSrc || img.src || img.getAttribute('src')) === mainSrc; });
      desiredIndex = found >= 0 ? found : 0;
    }
    open(main || thumbButton, desiredIndex);
  }, true);

  document.addEventListener('keydown', function (event) {
    var overlay = document.getElementById('jc-lightbox-overlay');
    if (!overlay || !overlay.classList.contains('is-open')) return;
    if (event.key === 'Escape') close();
    if (event.key === 'ArrowRight') move(1);
    if (event.key === 'ArrowLeft') move(-1);
  });
})();
