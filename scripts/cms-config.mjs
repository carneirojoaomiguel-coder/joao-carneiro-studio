const field = (name, label, widget = 'string', extra = {}) => ({ name, label, widget, ...extra });
const langFields = (widget = 'text') => [field('pt', 'Português', widget), field('en', 'Inglês', widget, { required: false, hint: 'Se ficar vazio, será usado o texto em português.' }), field('fr', 'Francês', widget, { required: false, hint: 'Se ficar vazio, será usado o texto em português.' })];
const languages = (name, label, extra = {}) => field(name, label, 'object', { fields: langFields().map(f => extra.required === false ? { ...f, required: false } : f), ...extra });
const image = (name, label, extra = {}) => field(name, label, 'image', { choose_url: true, media_library: { config: { max_file_size: 15 * 1024 * 1024 } }, ...extra });

export function cmsConfig(settings) {
  return {
    backend: { name: 'github', repo: settings.repository || '', branch: settings.branch || 'main', use_graphql: true, commit_messages: { create: 'Criar {{collection}}: {{slug}}', update: 'Atualizar {{collection}}: {{slug}}', delete: 'Eliminar {{collection}}: {{slug}}', uploadMedia: 'Carregar ficheiro: {{path}}', deleteMedia: 'Eliminar ficheiro: {{path}}' } },
    publish_mode: 'editorial_workflow',
    media_folder: 'assets/uploads',
    public_folder: '/assets/uploads',
    media_processing: { enabled: false },
    site_url: settings.url,
    display_url: settings.url,
    logo_url: '/admin/logo.svg',
    locale: 'pt',
    slug: { encoding: 'ascii', clean_accents: true, sanitize_replacement: '-' },
    collections: [
      {
        name: 'artworks', label: 'Obras e estudos', label_singular: 'Obra ou estudo', folder: 'content/catalogue', create: true, extension: 'json', format: 'json', slug: '{{slug}}', identifier_field: 'title', summary: '{{title}} · {{year}}', sortable_fields: ['order', 'title', 'year', 'category'],
        description: 'Adiciona imagens, vídeos e a ficha da peça. Publicar inicia a atualização automática do site. Para retirar uma peça do site, desativa «Visível no site» e publica a alteração.',
        view_filters: [{ label: 'Obras', field: 'category', pattern: 'works' }, { label: 'Estudos', field: 'category', pattern: 'studies' }, { label: 'Disponíveis', field: 'availability', pattern: '^available$' }, { label: 'Ocultos', field: 'published', pattern: false }],
        view_groups: [{ label: 'Categoria', field: 'category' }, { label: 'Ano', field: 'year' }],
        fields: [
          field('title', 'Título'),
          field('category', 'Secção do site', 'select', { options: [{ label: 'Obras', value: 'works' }, { label: 'Estudos', value: 'studies' }], default: 'works' }),
          field('year', 'Ano', 'string', { default: String(new Date().getFullYear()) }),
          languages('technique', 'Técnica e materiais'),
          field('dimensions', 'Dimensões', 'string', { hint: 'Exemplo: 50 × 65 cm. Indica se as medidas incluem moldura.' }),
          field('availability', 'Disponibilidade', 'select', { default: 'available', options: [{ label: 'Disponível', value: 'available' }, { label: 'Reservado', value: 'reserved' }, { label: 'Vendido', value: 'sold' }, { label: 'Indisponível', value: 'unavailable' }] }),
          field('order', 'Ordem de apresentação', 'number', { value_type: 'int', min: 0, default: 10, hint: 'Números mais baixos aparecem primeiro. Podes usar 10, 20, 30…' }),
          field('published', 'Visível no site', 'boolean', { default: true }),
          image('cover', 'Imagem de capa', { hint: 'Aparece na lista de obras ou estudos. Máximo: 15 MB.' }),
          field('gallery', 'Galeria de imagens', 'list', { required: false, summary: '{{fields.alt}}', hint: 'A primeira imagem é a imagem principal. Arrasta para alterar a ordem. Sem galeria, é utilizada a capa.', fields: [image('image', 'Imagem'), field('alt', 'Descrição da imagem', 'string', { required: false, hint: 'Exemplo: Burial — vista frontal. Ajuda quem usa leitores de ecrã.' })] }),
          languages('description', 'Texto sobre a peça', { required: false, collapsed: true }),
          field('videos', 'Vídeos', 'list', { required: false, collapsed: true, summary: '{{fields.caption}}', hint: 'Em cada vídeo, escolhe um ficheiro OU um link YouTube/Vimeo. Os vídeos não reproduzem automaticamente.', fields: [field('file', 'Carregar vídeo MP4 ou WebM', 'file', { required: false, hint: 'Máximo: 50 MB. Para vídeos maiores, usa YouTube ou Vimeo.', media_library: { config: { max_file_size: 50 * 1024 * 1024 } }, pattern: ['^$|\\.(mp4|webm)([?#].*)?$', 'Usa um ficheiro MP4 ou WebM.'] }), field('url', 'Link YouTube ou Vimeo', 'string', { required: false, hint: 'Exemplo: https://www.youtube.com/watch?v=… ou https://vimeo.com/…' }), image('poster', 'Imagem de apresentação do vídeo', { required: false }), field('caption', 'Legenda do vídeo', 'string', { required: false })] }),
          field('legacy_path', 'Endereço preservado', 'hidden', { required: false })
        ]
      },
      {
        name: 'pages', label: 'Páginas do site', files: [
          { name: 'home', label: 'Página inicial', file: 'content/pages/home.json', fields: [image('artist_image', 'Fotografia do artista'), field('artist_alt', 'Descrição da fotografia'), field('featured', 'Obra ou estudo em destaque', 'relation', { collection: 'artworks', search_fields: ['title'], value_field: '{{slug}}', display_fields: ['title', 'year'], required: false, hint: 'Escolhe uma peça visível. Se a ocultares ou eliminares, será apresentada a primeira peça disponível.' }), field('announcement', 'Destaque de exposição ou notícia', 'object', { collapsed: true, fields: [field('enabled', 'Mostrar destaque', 'boolean', { default: false }), field('title', 'Título', 'string', { required: false }), languages('text', 'Texto', { required: false }), image('image', 'Imagem', { required: false }), field('link', 'Ligação para mais informação', 'string', { required: false, hint: 'Endereço HTTPS ou caminho interno, por exemplo /cv.html.' })] })] },
          { name: 'biography', label: 'Biografia', file: 'content/pages/biography.json', fields: [field('title', 'Título da página'), field('paragraphs', 'Parágrafos da biografia', 'list', { summary: '{{fields.pt}}', fields: langFields() })] },
          { name: 'cv', label: 'Curriculum Vitae', file: 'content/pages/cv.json', fields: [field('sections', 'Secções do CV', 'list', { fields: [field('heading', 'Título da secção', 'object', { fields: langFields('string') }), languages('body', 'Conteúdo da secção')] }), field('pdf', 'CV em PDF para descarregar', 'file', { required: false, media_library: { config: { max_file_size: 15 * 1024 * 1024 } }, pattern: ['^$|\\.pdf([?#].*)?$', 'Seleciona um ficheiro PDF.'] })] }
        ]
      },
      {
        name: 'settings', label: 'Contactos e definições', files: [
          { name: 'settings', label: 'Contactos e apresentação', file: 'content/pages/settings.json', fields: [field('title', 'Nome do site'), field('url', 'Endereço do site', 'hidden'), field('description', 'Descrição para motores de pesquisa', 'text'), image('social_image', 'Imagem para partilhas nas redes sociais', { hint: 'Idealmente horizontal, 1200 × 630 px.' }), field('email', 'Email de contacto', 'string', { pattern: ['^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$', 'Indica um email válido.'] }), field('location', 'Localização'), field('instagram', 'Link do Instagram', 'string', { required: false }), field('instagram_label', 'Nome apresentado no Instagram', 'string', { required: false })] }
        ]
      }
    ]
  };
}
