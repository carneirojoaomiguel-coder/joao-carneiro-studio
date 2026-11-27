
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
  "pt": {
    "nav_works": "Obras",
    "nav_studies": "Estudos",
    "studies_heading": "Estudos selecionados",
    "nav_bio": "Biografia",
    "nav_cv": "CV",
    "nav_contact": "Contacto",
    "menu": "Menu",
    "instagram": "Instagram",
    "footer_rights": "João Carneiro. Todos os direitos reservados.",
    "legal_info": "Informação legal",
    "privacy_link": "Política de Privacidade",
    "terms_link": "Termos de Utilização",
    "copyright_link": "Direitos de Autor",
    "title_works": "Obras — João Carneiro",
    "meta_works": "Obras e séries selecionadas de João Carneiro.",
    "works_label": "Obras",
    "works_heading": "Obras selecionadas",
    "works_column": "",
    "studies_column": "",
    "title_studies": "Estudos — João Carneiro",
    "meta_studies": "Estudos de João Carneiro.",
    "studies_label": "ESTUDOS",
    "title_about": "Biografia — João Carneiro",
    "title_cv": "CV — João Carneiro",
    "bio_label": "Biografia",
    "cv_heading": "Curriculum Vitae",
    "education": "Formação",
    "projects": "Projetos",
    "exhibitions": "Exposições",
    "title_contact": "Contacto — João Carneiro",
    "contact_label": "Contacto",
    "inquiries": "Pedidos de informação",
    "name": "Nome",
    "email": "Email",
    "work_interest": "Obra de interesse",
    "message": "Mensagem",
    "send_inquiry": "Enviar pedido",
    "back": "← Voltar a Obras",
    "back_studies": "← Voltar a Estudos",
    "enquire": "Pedido de informação",
    "available": "Disponível",
    "not_available": "Indisponível",
    "legal_label": "Legal",
    "privacy_title": "Política de Privacidade",
    "terms_title": "Termos de Utilização",
    "copyright_title": "Direitos de Autor",
    "privacy_title_full": "Política de Privacidade — João Carneiro",
    "terms_title_full": "Termos de Utilização — João Carneiro",
    "copyright_title_full": "Direitos de Autor — João Carneiro",
    "last_update": "Última atualização: julho de 2026.",
    "close": "Fechar",
    "prev": "Imagem anterior",
    "next": "Imagem seguinte",
    "acrylic": "Acrílico e tinta spray sobre madeira"
  },
  "en": {
    "nav_works": "Works",
    "nav_studies": "Studies",
    "studies_heading": "Selected studies",
    "nav_bio": "Biography",
    "nav_cv": "CV",
    "nav_contact": "Contact",
    "menu": "Menu",
    "instagram": "Instagram",
    "footer_rights": "João Carneiro. All rights reserved.",
    "legal_info": "Legal information",
    "privacy_link": "Privacy Policy",
    "terms_link": "Terms of Use",
    "copyright_link": "Copyright",
    "title_works": "Works — João Carneiro",
    "meta_works": "Selected works and series by João Carneiro.",
    "works_label": "Works",
    "works_heading": "Selected works",
    "works_column": "",
    "studies_column": "",
    "title_studies": "Studies — João Carneiro",
    "meta_studies": "Selected studies by João Carneiro.",
    "studies_label": "STUDIES",
    "title_about": "Biography — João Carneiro",
    "title_cv": "CV — João Carneiro",
    "bio_label": "Biography",
    "cv_heading": "Curriculum Vitae",
    "education": "Education",
    "projects": "Projects",
    "exhibitions": "Exhibitions",
    "title_contact": "Contact — João Carneiro",
    "contact_label": "Contact",
    "inquiries": "Inquiries",
    "name": "Name",
    "email": "Email",
    "work_interest": "Work of interest",
    "message": "Message",
    "send_inquiry": "Send inquiry",
    "back": "← Back to Works",
    "back_studies": "← Back to Studies",
    "enquire": "Enquire",
    "available": "Available",
    "not_available": "Not available",
    "legal_label": "Legal",
    "privacy_title": "Privacy Policy",
    "terms_title": "Terms of Use",
    "copyright_title": "Copyright",
    "privacy_title_full": "Privacy Policy — João Carneiro",
    "terms_title_full": "Terms of Use — João Carneiro",
    "copyright_title_full": "Copyright — João Carneiro",
    "last_update": "Last updated: July 2026.",
    "close": "Close",
    "prev": "Previous image",
    "next": "Next image",
    "acrylic": "Acrylic and spray paint on wood"
  },
  "fr": {
    "nav_works": "Œuvres",
    "nav_studies": "Études",
    "studies_heading": "Études sélectionnées",
    "nav_bio": "Biographie",
    "nav_cv": "CV",
    "nav_contact": "Contact",
    "menu": "Menu",
    "instagram": "Instagram",
    "footer_rights": "João Carneiro. Tous droits réservés.",
    "legal_info": "Informations légales",
    "privacy_link": "Politique de confidentialité",
    "terms_link": "Conditions d’utilisation",
    "copyright_link": "Droits d’auteur",
    "title_works": "Œuvres — João Carneiro",
    "meta_works": "Œuvres et séries sélectionnées de João Carneiro.",
    "works_label": "Œuvres",
    "works_heading": "Œuvres sélectionnées",
    "works_column": "",
    "studies_column": "",
    "title_studies": "Études — João Carneiro",
    "meta_studies": "Études sélectionnées de João Carneiro.",
    "studies_label": "ÉTUDES",
    "title_about": "Biographie — João Carneiro",
    "title_cv": "CV — João Carneiro",
    "bio_label": "Biographie",
    "cv_heading": "Curriculum Vitae",
    "education": "Formation",
    "projects": "Projets",
    "exhibitions": "Expositions",
    "title_contact": "Contact — João Carneiro",
    "contact_label": "Contact",
    "inquiries": "Demandes d’information",
    "name": "Nom",
    "email": "Email",
    "work_interest": "Œuvre d’intérêt",
    "message": "Message",
    "send_inquiry": "Envoyer la demande",
    "back": "← Retour aux œuvres",
    "back_studies": "← Retour aux études",
    "enquire": "Demande d’information",
    "available": "Disponible",
    "not_available": "Indisponible",
    "legal_label": "Mentions légales",
    "privacy_title": "Politique de confidentialité",
    "terms_title": "Conditions d’utilisation",
    "copyright_title": "Droits d’auteur",
    "privacy_title_full": "Politique de confidentialité — João Carneiro",
    "terms_title_full": "Conditions d’utilisation — João Carneiro",
    "copyright_title_full": "Droits d’auteur — João Carneiro",
    "last_update": "Dernière mise à jour : juillet 2026.",
    "close": "Fermer",
    "prev": "Image précédente",
    "next": "Image suivante",
    "acrylic": "Acrylique et peinture aérosol sur bois"
  }
};

const textTranslations = {
  "Menu": {
    "pt": "Menu",
    "en": "Menu",
    "fr": "Menu"
  },
  "Works": {
    "pt": "Obras",
    "en": "Works",
    "fr": "Œuvres"
  },
  "Studies": {
    "pt": "Estudos",
    "en": "Studies",
    "fr": "Études"
  },
  "Biography": {
    "pt": "Biografia",
    "en": "Biography",
    "fr": "Biographie"
  },
  "CV": {
    "pt": "CV",
    "en": "CV",
    "fr": "CV"
  },
  "Contact": {
    "pt": "Contacto",
    "en": "Contact",
    "fr": "Contact"
  },
  "Instagram": {
    "pt": "Instagram",
    "en": "Instagram",
    "fr": "Instagram"
  },
  "Privacy Policy": {
    "pt": "Política de Privacidade",
    "en": "Privacy Policy",
    "fr": "Politique de confidentialité"
  },
  "Terms of Use": {
    "pt": "Termos de Utilização",
    "en": "Terms of Use",
    "fr": "Conditions d’utilisation"
  },
  "Copyright": {
    "pt": "Direitos de Autor",
    "en": "Copyright",
    "fr": "Droits d’auteur"
  },
  "João Carneiro. Todos os direitos reservados.": {
    "pt": "João Carneiro. Todos os direitos reservados.",
    "en": "João Carneiro. All rights reserved.",
    "fr": "João Carneiro. Tous droits réservés."
  },
  "Inquiries": {
    "pt": "Pedidos de informação",
    "en": "Inquiries",
    "fr": "Demandes d’information"
  },
  "Obras": {
    "pt": "Obras",
    "en": "Works",
    "fr": "Œuvres"
  },
  "Obras selecionadas": {
    "pt": "Obras selecionadas",
    "en": "Selected works",
    "fr": "Œuvres sélectionnées"
  },
  "Trabalhos": {
    "pt": "Trabalhos selecionados",
    "en": "Selected works",
    "fr": "Œuvres sélectionnées"
  },
  "Trabalhos selecionados": {
    "pt": "Trabalhos selecionados",
    "en": "Selected works",
    "fr": "Œuvres sélectionnées"
  },
  "Estudos": {
    "pt": "Estudos",
    "en": "Studies",
    "fr": "Études"
  },
  "Estudos selecionados": {
    "pt": "Estudos selecionados",
    "en": "Selected studies",
    "fr": "Études sélectionnées"
  },
  "Biografia": {
    "pt": "Biografia",
    "en": "Biography",
    "fr": "Biographie"
  },
  "Contacto": {
    "pt": "Contacto",
    "en": "Contact",
    "fr": "Contact"
  },
  "Pedidos de informação": {
    "pt": "Pedidos de informação",
    "en": "Inquiries",
    "fr": "Demandes d’information"
  },
  "Curriculum Vitae": {
    "pt": "Curriculum Vitae",
    "en": "Curriculum Vitae",
    "fr": "Curriculum Vitae"
  },
  "Formação": {
    "pt": "Formação",
    "en": "Education",
    "fr": "Formation"
  },
  "Projetos": {
    "pt": "Projetos",
    "en": "Projects",
    "fr": "Projets"
  },
  "Exposições": {
    "pt": "Exposições",
    "en": "Exhibitions",
    "fr": "Expositions"
  },
  "Legal": {
    "pt": "Legal",
    "en": "Legal",
    "fr": "Mentions légales"
  },
  "Direitos de autor": {
    "pt": "Direitos de Autor",
    "en": "Copyright",
    "fr": "Droits d’auteur"
  },
  "Acrylic and spray on canvas": {
    "pt": "Acrílico e spray sobre tela",
    "en": "Acrylic and spray on canvas",
    "fr": "Acrylique et peinture aérosol sur toile"
  },
  "Acrylic and spray paint on wood": {
    "pt": "Acrílico e tinta spray sobre madeira",
    "en": "Acrylic and spray paint on wood",
    "fr": "Acrylique et peinture aérosol sur bois"
  },
  "Acrylic and spray on 180 g/m² paper": {
    "pt": "Acrílico e spray sobre papel 180 g/m²",
    "en": "Acrylic and spray on 180 g/m² paper",
    "fr": "Acrylique et peinture aérosol sur papier 180 g/m²"
  },
  "Acrylic and spray on 400 g/m² paper": {
    "pt": "Acrílico e spray sobre papel 400 g/m²",
    "en": "Acrylic and spray on 400 g/m² paper",
    "fr": "Acrylique et peinture aérosol sur papier 400 g/m²"
  },
  "Acrylic and spray on 450 g/m² paper": {
    "pt": "Acrílico e spray sobre papel 450 g/m²",
    "en": "Acrylic and spray on 450 g/m² paper",
    "fr": "Acrylique et peinture aérosol sur papier 450 g/m²"
  },
  "Mixed media on canvas": {
    "pt": "Técnica mista sobre tela",
    "en": "Mixed media on canvas",
    "fr": "Technique mixte sur toile"
  },
  "Técnica mista": {
    "pt": "Técnica mista",
    "en": "Mixed media",
    "fr": "Technique mixte"
  },
  "Available": {
    "pt": "Disponível",
    "en": "Available",
    "fr": "Disponible"
  },
  "Not available": {
    "pt": "Indisponível",
    "en": "Not available",
    "fr": "Indisponible"
  },
  "Abstract": {
    "pt": "Abstrato",
    "en": "Abstract",
    "fr": "Abstrait"
  },
  "Portrait of Le Corbusier": {
    "pt": "Retrato de Le Corbusier",
    "en": "Portrait of Le Corbusier",
    "fr": "Portrait de Le Corbusier"
  },
  "Tribute to Vincent Cassel": {
    "pt": "Homenagem a Vincent Cassel",
    "en": "Tribute to Vincent Cassel",
    "fr": "Hommage à Vincent Cassel"
  },
  "Portrait of Vincent Cassel": {
    "pt": "Retrato de Vincent Cassel",
    "en": "Portrait of Vincent Cassel",
    "fr": "Portrait de Vincent Cassel"
  },
  "Portrait of Werner Herzog": {
    "pt": "Retrato de Werner Herzog",
    "en": "Portrait of Werner Herzog",
    "fr": "Portrait de Werner Herzog"
  },
  "Portrait of MF DOOM": {
    "pt": "Retrato de MF DOOM",
    "en": "Portrait of MF DOOM",
    "fr": "Portrait de MF DOOM"
  },
  "← Back to Works": {
    "pt": "← Voltar a Obras",
    "en": "← Back to Works",
    "fr": "← Retour aux œuvres"
  },
  "Enquire": {
    "pt": "Pedido de informação",
    "en": "Enquire",
    "fr": "Demande d’information"
  },
  "Burial explores the anonymous mass of humanity consumed by systems of power, where individual identity dissolves into silence and uniformity.": {
    "pt": "Burial explora a massa anónima da humanidade consumida por sistemas de poder, onde a identidade individual se dissolve em silêncio e uniformidade.",
    "en": "Burial explores the anonymous mass of humanity consumed by systems of power, where individual identity dissolves into silence and uniformity.",
    "fr": "Burial explore la masse anonyme de l’humanité absorbée par des systèmes de pouvoir, où l’identité individuelle se dissout dans le silence et l’uniformité."
  },
  "Caught between armed tensions and calls for unity, Europe feels more hesitant than decisive. Political responses shift between careful planning and outright paralysis, while old national interests keep getting in the way of a shared vision. In this fragile balance, the real danger is not just conflict, it is failing to choose a direction and quietly drifting along.": {
    "pt": "Entre tensões armadas e apelos à unidade, a Europa parece mais hesitante do que decisiva. As respostas políticas oscilam entre planeamento cauteloso e paralisia evidente, enquanto velhos interesses nacionais continuam a bloquear uma visão comum. Neste equilíbrio frágil, o verdadeiro perigo não é apenas o conflito, mas a incapacidade de escolher uma direção e continuar à deriva.",
    "en": "Caught between armed tensions and calls for unity, Europe feels more hesitant than decisive. Political responses shift between careful planning and outright paralysis, while old national interests keep getting in the way of a shared vision. In this fragile balance, the real danger is not just conflict, it is failing to choose a direction and quietly drifting along.",
    "fr": "Prise entre tensions armées et appels à l’unité, l’Europe paraît plus hésitante que décisive. Les réponses politiques oscillent entre planification prudente et paralysie manifeste, tandis que d’anciens intérêts nationaux continuent d’entraver une vision commune. Dans cet équilibre fragile, le véritable danger n’est pas seulement le conflit, mais l’incapacité à choisir une direction et à dériver silencieusement."
  },
  "Unsettled I explores visual instability, tension and fragmentation through layered marks, gesture and surface.": {
    "pt": "Unsettled I explora instabilidade visual, tensão e fragmentação através de marcas sobrepostas, gesto e superfície.",
    "en": "Unsettled I explores visual instability, tension and fragmentation through layered marks, gesture and surface.",
    "fr": "Unsettled I explore l’instabilité visuelle, la tension et la fragmentation à travers des marques superposées, le geste et la surface."
  },
  "Unsettled II explores visual instability, tension and fragmentation through layered marks, gesture and surface.": {
    "pt": "Unsettled II explora instabilidade visual, tensão e fragmentação através de marcas sobrepostas, gesto e superfície.",
    "en": "Unsettled II explores visual instability, tension and fragmentation through layered marks, gesture and surface.",
    "fr": "Unsettled II explore l’instabilité visuelle, la tension et la fragmentation à travers des marques superposées, le geste et la surface."
  },
  "Universidade Lusófona de Humanidades e Tecnologias — Arquitetura": {
    "pt": "Universidade Lusófona de Humanidades e Tecnologias — Arquitetura",
    "en": "Universidade Lusófona de Humanidades e Tecnologias — Architecture",
    "fr": "Universidade Lusófona de Humanidades e Tecnologias — Architecture"
  },
  "Escola Secundária Artística António Arroio — Design de Comunicação": {
    "pt": "Escola Secundária Artística António Arroio — Design de Comunicação",
    "en": "Escola Secundária Artística António Arroio — Communication Design",
    "fr": "Escola Secundária Artística António Arroio — Design de communication"
  },
  "Lisboa, Portugal": {
    "pt": "Lisboa, Portugal",
    "en": "Lisbon, Portugal",
    "fr": "Lisbonne, Portugal"
  },
  "João Carneiro (Entroncamento, 1988) é artista visual e arquiteto, que desenvolve a sua prática entre Lisboa e o Entroncamento. Formado em Arte, Arquitetura e Design, desenvolve uma investigação centrada na relação entre a pintura e o graffiti, explorando os pontos de contacto entre duas linguagens que, apesar de distintas, coexistem de forma contínua no seu percurso.": {
    "pt": "João Carneiro (Entroncamento, 1988) é artista visual e arquiteto, que desenvolve a sua prática entre Lisboa e o Entroncamento. Formado em Arte, Arquitetura e Design, desenvolve uma investigação centrada na relação entre a pintura e o graffiti, explorando os pontos de contacto entre duas linguagens que, apesar de distintas, coexistem de forma contínua no seu percurso.",
    "en": "João Carneiro (Entroncamento, 1988) is a visual artist and architect whose practice is based between Lisbon and Entroncamento. With a background in Fine Art, Architecture and Design, his research focuses on the relationship between painting and graffiti, exploring the points of convergence between two distinct visual languages that have continuously coexisted throughout his practice.",
    "fr": "João Carneiro (Entroncamento, 1988) est un artiste visuel et architecte dont la pratique se développe entre Lisbonne et Entroncamento. Formé en art, architecture et design, il mène une recherche centrée sur la relation entre la peinture et le graffiti, en explorant les points de contact entre deux langages visuels distincts qui coexistent de manière continue dans son parcours."
  },
  "Desde 2003 desenvolve trabalho no universo do graffiti, prática que permanece como uma referência estruturante da sua produção artística. Em paralelo, dedica-se à pintura, recorrendo a diferentes técnicas e materiais, entre os quais o acrílico, a tinta spray e marcadores. Entre a abstração e a figuração, a sua obra explora processos de construção da imagem através da fragmentação, da sobreposição e da transformação, propondo composições onde coexistem diferentes ritmos, camadas e níveis de leitura.": {
    "pt": "Desde 2003 desenvolve trabalho no universo do graffiti, prática que permanece como uma referência estruturante da sua produção artística. Em paralelo, dedica-se à pintura, recorrendo a diferentes técnicas e materiais, entre os quais o acrílico, a tinta spray e marcadores. Entre a abstração e a figuração, a sua obra explora processos de construção da imagem através da fragmentação, da sobreposição e da transformação, propondo composições onde coexistem diferentes ritmos, camadas e níveis de leitura.",
    "en": "Since 2003, he has been actively engaged in graffiti, a discipline that remains a defining reference within his artistic practice. Alongside this, he has developed an extensive painting practice using a range of techniques and materials, including acrylic, spray paint and paint markers. Oscillating between abstraction and figuration, his work investigates processes of image construction through fragmentation, layering and transformation, creating compositions in which multiple rhythms, strata and modes of reading coexist.",
    "fr": "Depuis 2003, il développe un travail dans l’univers du graffiti, une pratique qui demeure une référence structurante de sa production artistique. En parallèle, il se consacre à la peinture, en recourant à différentes techniques et matières, dont l’acrylique, la peinture aérosol et les marqueurs. Entre abstraction et figuration, son œuvre explore des processus de construction de l’image par la fragmentation, la superposition et la transformation, proposant des compositions où coexistent différents rythmes, strates et niveaux de lecture."
  },
  "Sem se circunscrever a uma temática específica, o seu trabalho articula uma reflexão sobre a cultura visual contemporânea com uma investigação sobre as possibilidades da própria pintura. Através de diferentes suportes e processos, João Carneiro constrói uma linguagem visual singular, onde a experiência do graffiti é continuamente reinterpretada no contexto da prática pictórica, afirmando um percurso marcado pela experimentação, pela consistência formal e pela procura de novas formas de representação.": {
    "pt": "Sem se circunscrever a uma temática específica, o seu trabalho articula uma reflexão sobre a cultura visual contemporânea com uma investigação sobre as possibilidades da própria pintura. Através de diferentes suportes e processos, João Carneiro constrói uma linguagem visual singular, onde a experiência do graffiti é continuamente reinterpretada no contexto da prática pictórica, afirmando um percurso marcado pela experimentação, pela consistência formal e pela procura de novas formas de representação.",
    "en": "Rather than being confined to a specific subject matter, his work brings together a reflection on contemporary visual culture with an ongoing investigation into the possibilities of painting itself. Through a variety of media and working methods, João Carneiro has developed a distinctive visual language in which the experience of graffiti is continually reinterpreted within the context of contemporary painting, resulting in a body of work defined by experimentation, formal coherence and the pursuit of new modes of representation.",
    "fr": "Sans se limiter à une thématique spécifique, son travail articule une réflexion sur la culture visuelle contemporaine avec une recherche sur les possibilités mêmes de la peinture. À travers différents supports et processus, João Carneiro construit un langage visuel singulier, dans lequel l’expérience du graffiti est continuellement réinterprétée dans le contexte de la pratique picturale, affirmant un parcours marqué par l’expérimentation, la cohérence formelle et la recherche de nouvelles formes de représentation."
  },
  "João Carneiro (Entroncamento, 1988) é artista visual e arquiteto; vive e trabalha entre Lisboa e o Entroncamento. Formado em Arte, Arquitetura e Design, desenvolve uma investigação centrada nas relações entre a pintura e o graffiti, que entende como sistemas de construção da imagem.": {
    "pt": "João Carneiro (Entroncamento, 1988) é artista visual e arquiteto; vive e trabalha entre Lisboa e o Entroncamento. Formado em Arte, Arquitetura e Design, desenvolve uma investigação centrada nas relações entre a pintura e o graffiti, que entende como sistemas de construção da imagem.",
    "en": "João Carneiro (Entroncamento, 1988) is a visual artist and architect; he lives and works between Lisbon and Entroncamento. With a background in Art, Architecture and Design, he develops a research practice centred on the relationships between painting and graffiti, which he understands as systems of image construction.",
    "fr": "João Carneiro (Entroncamento, 1988) est artiste visuel et architecte ; il vit et travaille entre Lisbonne et Entroncamento. Formé en art, architecture et design, il développe une recherche centrée sur les relations entre la peinture et le graffiti, qu’il comprend comme des systèmes de construction de l’image."
  },
  "Ativo no graffiti desde 2003, encontra nesta prática a base da sua investigação artística. A sua produção recorre a diferentes técnicas e materiais, entre os quais acrílico, tinta spray e marcadores, e explora processos de fragmentação, sobreposição, ocultação e reconfiguração. Entre a abstração e a figuração, as suas obras resultam da acumulação de gestos, camadas e marcas e evidenciam uma atenção particular aos processos de transformação da imagem.": {
    "pt": "Ativo no graffiti desde 2003, encontra nesta prática a base da sua investigação artística. A sua produção recorre a diferentes técnicas e materiais, entre os quais acrílico, tinta spray e marcadores, e explora processos de fragmentação, sobreposição, ocultação e reconfiguração. Entre a abstração e a figuração, as suas obras resultam da acumulação de gestos, camadas e marcas e evidenciam uma atenção particular aos processos de transformação da imagem.",
    "en": "Active in graffiti since 2003, he finds in this practice the basis of his artistic research. His production uses different techniques and materials, including acrylic, spray paint and markers, and explores processes of fragmentation, layering, concealment and reconfiguration. Between abstraction and figuration, his works result from the accumulation of gestures, layers and marks, and reveal a particular attention to processes of image transformation.",
    "fr": "Actif dans le graffiti depuis 2003, il trouve dans cette pratique la base de sa recherche artistique. Sa production recourt à différentes techniques et matières, parmi lesquelles l’acrylique, la peinture aérosol et les marqueurs, et explore des processus de fragmentation, de superposition, d’occultation et de reconfiguration. Entre abstraction et figuration, ses œuvres résultent de l’accumulation de gestes, de couches et de marques, et témoignent d’une attention particulière aux processus de transformation de l’image."
  },
  "Mais do que estabelecer um diálogo entre pintura e graffiti, o seu trabalho investiga a forma como os princípios de construção, ocupação e intervenção característicos do graffiti podem ser transpostos para o campo da pintura. Nesse processo, questiona as fronteiras entre ambas as práticas e analisa a circulação das imagens e os seus processos contínuos de reconfiguração na cultura visual contemporânea.": {
    "pt": "Mais do que estabelecer um diálogo entre pintura e graffiti, o seu trabalho investiga a forma como os princípios de construção, ocupação e intervenção característicos do graffiti podem ser transpostos para o campo da pintura. Nesse processo, questiona as fronteiras entre ambas as práticas e analisa a circulação das imagens e os seus processos contínuos de reconfiguração na cultura visual contemporânea.",
    "en": "More than establishing a dialogue between painting and graffiti, his work investigates how the principles of construction, occupation and intervention characteristic of graffiti can be transposed into the field of painting. In this process, he questions the boundaries between both practices and analyses the circulation of images and their continuous processes of reconfiguration within contemporary visual culture.",
    "fr": "Plus que d’établir un dialogue entre peinture et graffiti, son travail examine la manière dont les principes de construction, d’occupation et d’intervention propres au graffiti peuvent être transposés dans le champ de la peinture. Dans ce processus, il interroge les frontières entre les deux pratiques et analyse la circulation des images ainsi que leurs processus continus de reconfiguration dans la culture visuelle contemporaine."
  },
  "Última atualização: julho de 2026.": {
    "pt": "Última atualização: julho de 2026.",
    "en": "Last updated: July 2026.",
    "fr": "Dernière mise à jour : juillet 2026."
  },
  "Conservação": {
    "pt": "Conservação",
    "en": "Retention",
    "fr": "Conservation"
  },
  "Cookies": {
    "pt": "Cookies",
    "en": "Cookies",
    "fr": "Cookies"
  },
  "Dados recolhidos": {
    "pt": "Dados recolhidos",
    "en": "Data collected",
    "fr": "Données collectées"
  },
  "Direitos do titular dos dados": {
    "pt": "Direitos do titular dos dados",
    "en": "Data subject rights",
    "fr": "Droits de la personne concernée"
  },
  "Finalidade": {
    "pt": "Finalidade",
    "en": "Purpose",
    "fr": "Finalité"
  },
  "Partilha de dados": {
    "pt": "Partilha de dados",
    "en": "Data sharing",
    "fr": "Partage des données"
  },
  "Esta política explica como são tratados os dados pessoais enviados através deste website.": {
    "pt": "Esta política explica como são tratados os dados pessoais enviados através deste website.",
    "en": "This policy explains how personal data submitted through this website is processed.",
    "fr": "Cette politique explique comment sont traitées les données personnelles transmises via ce site."
  },
  "Quando utiliza o formulário de contacto, podem ser recolhidos o nome, email, obra de interesse e mensagem enviada.": {
    "pt": "Quando utiliza o formulário de contacto, podem ser recolhidos o nome, email, obra de interesse e mensagem enviada.",
    "en": "When you use the contact form, your name, email, work of interest and message may be collected.",
    "fr": "Lorsque vous utilisez le formulaire de contact, le nom, l’email, l’œuvre d’intérêt et le message envoyé peuvent être collectés."
  },
  "Os dados são utilizados exclusivamente para responder a pedidos de informação, contactos profissionais, pedidos curatoriais, imprensa, aquisição de obras ou outros assuntos relacionados com a prática artística de João Carneiro.": {
    "pt": "Os dados são utilizados exclusivamente para responder a pedidos de informação, contactos profissionais, pedidos curatoriais, imprensa, aquisição de obras ou outros assuntos relacionados com a prática artística de João Carneiro.",
    "en": "The data is used exclusively to respond to enquiries, professional contacts, curatorial requests, press, acquisition of works or other matters related to João Carneiro’s artistic practice.",
    "fr": "Les données sont utilisées exclusivement pour répondre aux demandes d’information, contacts professionnels, demandes curatoriales, presse, acquisition d’œuvres ou autres sujets liés à la pratique artistique de João Carneiro."
  },
  "Os dados não são vendidos nem cedidos a terceiros. Poderão ser processados por serviços técnicos necessários ao funcionamento do website, alojamento, email ou formulário de contacto.": {
    "pt": "Os dados não são vendidos nem cedidos a terceiros. Poderão ser processados por serviços técnicos necessários ao funcionamento do website, alojamento, email ou formulário de contacto.",
    "en": "The data is not sold or transferred to third parties. It may be processed by technical services necessary for the operation of the website, hosting, email or contact form.",
    "fr": "Les données ne sont ni vendues ni cédées à des tiers. Elles peuvent être traitées par des services techniques nécessaires au fonctionnement du site, de l’hébergement, de l’email ou du formulaire de contact."
  },
  "Os dados são conservados apenas pelo período necessário para responder ao pedido e manter o respetivo acompanhamento profissional, salvo obrigação legal em contrário.": {
    "pt": "Os dados são conservados apenas pelo período necessário para responder ao pedido e manter o respetivo acompanhamento profissional, salvo obrigação legal em contrário.",
    "en": "Data is retained only for the period necessary to respond to the request and maintain the relevant professional follow-up, unless otherwise required by law.",
    "fr": "Les données sont conservées uniquement pendant la durée nécessaire pour répondre à la demande et assurer le suivi professionnel correspondant, sauf obligation légale contraire."
  },
  "Este website não utiliza cookies de marketing. Caso sejam adicionadas ferramentas de análise, vídeo incorporado ou serviços externos, esta política deverá ser atualizada.": {
    "pt": "Este website não utiliza cookies de marketing. Caso sejam adicionadas ferramentas de análise, vídeo incorporado ou serviços externos, esta política deverá ser atualizada.",
    "en": "This website does not use marketing cookies. If analytics tools, embedded video or external services are added, this policy should be updated.",
    "fr": "Ce site n’utilise pas de cookies marketing. Si des outils d’analyse, des vidéos intégrées ou des services externes sont ajoutés, cette politique devra être mise à jour."
  },
  "Nos termos do Regulamento Geral sobre a Proteção de Dados, pode solicitar acesso, correção, oposição, limitação ou eliminação dos seus dados através do email": {
    "pt": "Nos termos do Regulamento Geral sobre a Proteção de Dados, pode solicitar acesso, correção, oposição, limitação ou eliminação dos seus dados através do email",
    "en": "Under the General Data Protection Regulation, you may request access, correction, objection, restriction or deletion of your data by email",
    "fr": "Conformément au Règlement général sur la protection des données, vous pouvez demander l’accès, la rectification, l’opposition, la limitation ou la suppression de vos données par email"
  },
  "Utilização do website": {
    "pt": "Utilização do website",
    "en": "Use of the website",
    "fr": "Utilisation du site"
  },
  "Propriedade intelectual": {
    "pt": "Propriedade intelectual",
    "en": "Intellectual property",
    "fr": "Propriété intellectuelle"
  },
  "Disponibilidade e informação sobre obras": {
    "pt": "Disponibilidade e informação sobre obras",
    "en": "Availability and information about works",
    "fr": "Disponibilité et informations sur les œuvres"
  },
  "Responsabilidade": {
    "pt": "Responsabilidade",
    "en": "Liability",
    "fr": "Responsabilité"
  },
  "Links externos": {
    "pt": "Links externos",
    "en": "External links",
    "fr": "Liens externes"
  },
  "Lei aplicável": {
    "pt": "Lei aplicável",
    "en": "Governing law",
    "fr": "Droit applicable"
  },
  "Ao aceder a este website, aceita os presentes termos de utilização.": {
    "pt": "Ao aceder a este website, aceita os presentes termos de utilização.",
    "en": "By accessing this website, you accept these terms of use.",
    "fr": "En accédant à ce site, vous acceptez les présentes conditions d’utilisation."
  },
  "Este website apresenta obras, estudos, informação biográfica, curriculum vitae e contactos profissionais de João Carneiro. O conteúdo é disponibilizado para consulta, investigação, imprensa, curadoria e contacto profissional.": {
    "pt": "Este website apresenta obras, estudos, informação biográfica, curriculum vitae e contactos profissionais de João Carneiro. O conteúdo é disponibilizado para consulta, investigação, imprensa, curadoria e contacto profissional.",
    "en": "This website presents works, studies, biographical information, curriculum vitae and professional contacts for João Carneiro. The content is provided for viewing, research, press, curatorial and professional contact purposes.",
    "fr": "Ce site présente les œuvres, études, informations biographiques, curriculum vitae et contacts professionnels de João Carneiro. Le contenu est mis à disposition pour la consultation, la recherche, la presse, la curation et les contacts professionnels."
  },
  "Todo o conteúdo visual e textual está protegido por direitos de autor. A utilização de imagens ou textos fora deste website exige autorização prévia por escrito.": {
    "pt": "Todo o conteúdo visual e textual está protegido por direitos de autor. A utilização de imagens ou textos fora deste website exige autorização prévia por escrito.",
    "en": "All visual and textual content is protected by copyright. The use of images or texts outside this website requires prior written authorisation.",
    "fr": "Tout le contenu visuel et textuel est protégé par le droit d’auteur. L’utilisation d’images ou de textes en dehors de ce site nécessite une autorisation écrite préalable."
  },
  "A indicação de disponibilidade de uma obra é meramente informativa e pode ser alterada sem aviso prévio. Dimensões, técnicas, datas e demais dados técnicos devem ser confirmados antes de qualquer aquisição, publicação ou exposição.": {
    "pt": "A indicação de disponibilidade de uma obra é meramente informativa e pode ser alterada sem aviso prévio. Dimensões, técnicas, datas e demais dados técnicos devem ser confirmados antes de qualquer aquisição, publicação ou exposição.",
    "en": "The indication of a work’s availability is for information only and may be changed without prior notice. Dimensions, techniques, dates and other technical details should be confirmed before any acquisition, publication or exhibition.",
    "fr": "L’indication de disponibilité d’une œuvre est purement informative et peut être modifiée sans préavis. Les dimensions, techniques, dates et autres données techniques doivent être confirmées avant toute acquisition, publication ou exposition."
  },
  "É feito um esforço para manter a informação correta e atualizada, mas não é garantida a ausência de erros, omissões ou interrupções técnicas.": {
    "pt": "É feito um esforço para manter a informação correta e atualizada, mas não é garantida a ausência de erros, omissões ou interrupções técnicas.",
    "en": "Efforts are made to keep the information accurate and up to date, but the absence of errors, omissions or technical interruptions is not guaranteed.",
    "fr": "Un effort est fait pour maintenir les informations exactes et à jour, mais l’absence d’erreurs, d’omissions ou d’interruptions techniques n’est pas garantie."
  },
  "O website pode incluir ligações para plataformas externas, incluindo Instagram. João Carneiro não é responsável pelo conteúdo, políticas ou funcionamento desses serviços.": {
    "pt": "O website pode incluir ligações para plataformas externas, incluindo Instagram. João Carneiro não é responsável pelo conteúdo, políticas ou funcionamento desses serviços.",
    "en": "The website may include links to external platforms, including Instagram. João Carneiro is not responsible for the content, policies or operation of those services.",
    "fr": "Le site peut inclure des liens vers des plateformes externes, notamment Instagram. João Carneiro n’est pas responsable du contenu, des politiques ou du fonctionnement de ces services."
  },
  "Estes termos são regidos pela legislação portuguesa.": {
    "pt": "Estes termos são regidos pela legislação portuguesa.",
    "en": "These terms are governed by Portuguese law.",
    "fr": "Ces conditions sont régies par la législation portugaise."
  },
  "Todas as obras, imagens, textos, fotografias, composições, estudos e restantes conteúdos presentes neste website são propriedade de João Carneiro, salvo indicação expressa em contrário.": {
    "pt": "Todas as obras, imagens, textos, fotografias, composições, estudos e restantes conteúdos presentes neste website são propriedade de João Carneiro, salvo indicação expressa em contrário.",
    "en": "All works, images, texts, photographs, compositions, studies and other content on this website are the property of João Carneiro, unless expressly stated otherwise.",
    "fr": "Toutes les œuvres, images, textes, photographies, compositions, études et autres contenus présents sur ce site sont la propriété de João Carneiro, sauf indication expresse contraire."
  },
  "É proibida a reprodução, distribuição, publicação, alteração, venda, utilização comercial, treino de modelos, criação de obras derivadas ou qualquer outro uso dos conteúdos deste website sem autorização prévia por escrito.": {
    "pt": "É proibida a reprodução, distribuição, publicação, alteração, venda, utilização comercial, treino de modelos, criação de obras derivadas ou qualquer outro uso dos conteúdos deste website sem autorização prévia por escrito.",
    "en": "Reproduction, distribution, publication, alteration, sale, commercial use, model training, creation of derivative works or any other use of this website’s content is prohibited without prior written authorisation.",
    "fr": "La reproduction, distribution, publication, modification, vente, utilisation commerciale, entraînement de modèles, création d’œuvres dérivées ou toute autre utilisation des contenus de ce site est interdite sans autorisation écrite préalable."
  },
  "A visualização, partilha do link do website e referência crítica, curatorial, académica ou jornalística são permitidas desde que a autoria seja devidamente identificada e que os conteúdos não sejam descarregados, alterados ou reutilizados fora do contexto original.": {
    "pt": "A visualização, partilha do link do website e referência crítica, curatorial, académica ou jornalística são permitidas desde que a autoria seja devidamente identificada e que os conteúdos não sejam descarregados, alterados ou reutilizados fora do contexto original.",
    "en": "Viewing, sharing the website link and critical, curatorial, academic or journalistic reference are permitted provided authorship is properly identified and the content is not downloaded, altered or reused outside its original context.",
    "fr": "La consultation, le partage du lien du site et la référence critique, curatoriale, académique ou journalistique sont autorisés à condition que l’auteur soit dûment identifié et que les contenus ne soient pas téléchargés, modifiés ou réutilisés hors de leur contexte original."
  },
  "Para pedidos de imprensa, publicação, aquisição, exposição ou utilização de imagens em catálogos, artigos, redes sociais institucionais ou materiais curatoriais, contacte:": {
    "pt": "Para pedidos de imprensa, publicação, aquisição, exposição ou utilização de imagens em catálogos, artigos, redes sociais institucionais ou materiais curatoriais, contacte:",
    "en": "For press, publication, acquisition, exhibition or image-use requests for catalogues, articles, institutional social media or curatorial materials, please contact:",
    "fr": "Pour toute demande de presse, publication, acquisition, exposition ou utilisation d’images dans des catalogues, articles, réseaux sociaux institutionnels ou supports curatoriaux, veuillez contacter :"
  },
  "Para pedidos de informação sobre obras, disponibilidade, aquisição ou colaboração, preencha o formulário abaixo.": {
    "pt": "Para pedidos de informação sobre obras, disponibilidade, aquisição ou colaboração, preencha o formulário abaixo.",
    "en": "For enquiries about works, availability, acquisition or collaboration, please use the form below.",
    "fr": "Pour toute demande concernant les œuvres, leur disponibilité, leur acquisition ou une collaboration, veuillez utiliser le formulaire ci-dessous."
  },
  "For enquiries about works, availability, acquisition or collaboration, please use the form below.": {
    "pt": "Para pedidos de informação sobre obras, disponibilidade, aquisição ou colaboração, preencha o formulário abaixo.",
    "en": "For enquiries about works, availability, acquisition or collaboration, please use the form below.",
    "fr": "Pour toute demande concernant les œuvres, leur disponibilité, leur acquisition ou une collaboration, veuillez utiliser le formulaire ci-dessous."
  },
  "Nome / Name": {
    "pt": "Nome",
    "en": "Name",
    "fr": "Nom"
  },
  "Mensagem / Message": {
    "pt": "Mensagem",
    "en": "Message",
    "fr": "Message"
  },
  "Obra / Work": {
    "pt": "Obra",
    "en": "Work",
    "fr": "Œuvre"
  },
  "Email direto:": {
    "pt": "Email direto:",
    "en": "Direct email:",
    "fr": "Email direct :"
  },
  "Send enquiry": {
    "pt": "Enviar pedido",
    "en": "Send enquiry",
    "fr": "Envoyer la demande"
  },
  "Inquire": {
    "pt": "Pedido de informação",
    "en": "Inquire",
    "fr": "Demande d’information"
  },
  "Enquiries": {
    "pt": "Pedidos de informação",
    "en": "Enquiries",
    "fr": "Demandes d’information"
  },
  "O seu pedido de informação foi enviado com sucesso.": {
    "pt": "O seu pedido de informação foi enviado com sucesso.",
    "en": "Your enquiry has been sent successfully.",
    "fr": "Votre demande d’information a bien été envoyée."
  },
  "Responderei com a maior brevidade possível através de": {
    "pt": "Responderei com a maior brevidade possível através de",
    "en": "I will reply as soon as possible via",
    "fr": "Je répondrai dès que possible via"
  },
  "Your enquiry has been sent successfully. I will reply as soon as possible.": {
    "pt": "O seu pedido de informação foi enviado com sucesso. Responderei com a maior brevidade possível.",
    "en": "Your enquiry has been sent successfully. I will reply as soon as possible.",
    "fr": "Votre demande d’information a bien été envoyée. Je répondrai dès que possible."
  },
  "Back to website": {
    "pt": "Voltar ao website",
    "en": "Back to website",
    "fr": "Retour au site"
  },
  "Obrigado / Thank You": {
    "pt": "Obrigado",
    "en": "Thank You",
    "fr": "Merci"
  },
  "Clica na imagem principal para ampliar. Usa as setas, o teclado ou o gesto lateral para ver as diferentes perspetivas.": {
    "pt": "Clica na imagem principal para ampliar. Usa as setas, o teclado ou o gesto lateral para ver as diferentes perspetivas.",
    "en": "Click the main image to enlarge. Use the arrows, keyboard or swipe gesture to view the different perspectives.",
    "fr": "Cliquez sur l’image principale pour l’agrandir. Utilisez les flèches, le clavier ou le geste latéral pour voir les différentes perspectives."
  }
};

function translateKnownTextNodes(lang) {
  const elements = document.querySelectorAll('p, span, h1, h2, h3, li, a, button, label, strong');
  elements.forEach(el => {
    if (el.closest('.language-switch') || el.hasAttribute('data-pt') || el.children.length) return;
    const normalized = normalizeText(el.textContent);
    for (const entry of Object.values(textTranslations)) {
      if (normalized === entry.pt || normalized === entry.en || normalized === entry.fr) {
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
  wrapper.innerHTML = '<button type="button" data-lang-option="pt">PT</button><span>/</span><button type="button" data-lang-option="en">EN</button><span>/</span><button type="button" data-lang-option="fr">FR</button>';
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
    if (lang === 'fr' && el.dataset.fr) el.setAttribute('content', el.dataset.fr);
    else el.setAttribute('content', lang === 'en' ? el.dataset.en : el.dataset.pt);
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    const key = el.dataset.i18nAriaLabel;
    const labels = {
      menu_open: { pt: 'Abrir menu', en: 'Open menu', fr: 'Ouvrir le menu' },
      main_menu: { pt: 'Menu principal', en: 'Main menu', fr: 'Menu principal' },
      legal_info: { pt: 'Informação legal', en: 'Legal information', fr: 'Informations légales' },
      close: { pt: 'Fechar', en: 'Close', fr: 'Fermer' },
      prev: { pt: 'Imagem anterior', en: 'Previous image', fr: 'Image précédente' },
      next: { pt: 'Imagem seguinte', en: 'Next image', fr: 'Image suivante' }
    };
    if (labels[key]) el.setAttribute('aria-label', labels[key][lang] || labels[key].pt);
  });
  document.querySelectorAll('[data-pt][data-en]').forEach(el => {
    if (lang === 'fr' && el.dataset.fr) el.innerHTML = el.dataset.fr;
    else el.innerHTML = lang === 'en' ? el.dataset.en : el.dataset.pt;
  });

  const navLinks = Array.from(document.querySelectorAll('.site-nav a'));
  navLinks.forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href.endsWith('works.html')) link.textContent = dict.nav_works;
    if (href.endsWith('studies.html')) link.textContent = dict.nav_studies || dict.studies_heading;
    if (href.endsWith('about.html')) link.textContent = dict.nav_bio;
    if (href.endsWith('cv.html')) link.textContent = dict.nav_cv;
    if (href.endsWith('contact.html')) link.textContent = dict.nav_contact;
  });

  const menuButton = document.querySelector('.menu-toggle');
  if (menuButton) {
    menuButton.textContent = dict.menu;
    menuButton.setAttribute('aria-label', lang === 'fr' ? 'Ouvrir le menu' : (lang === 'pt' ? 'Abrir menu' : 'Open menu'));
  }

  document.querySelectorAll('.back-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    link.textContent = href.includes('studies.html') ? (dict.back_studies || dict.back) : dict.back;
  });
  document.querySelectorAll('.enquire-button').forEach(link => link.textContent = dict.enquire);
  document.querySelectorAll('.artwork-info-panel p').forEach(p => {
    const value = p.textContent.trim();
    if (value === 'Available' || value === 'Disponível' || value === 'Disponible') p.textContent = dict.available;
    if (value === 'Not available' || value === 'Indisponível' || value === 'Indisponible') p.textContent = dict.not_available;
    if (value === 'Acrylic and spray paint on wood' || value === 'Acrílico e tinta spray sobre madeira' || value === 'Acrylique et peinture aérosol sur bois') p.textContent = dict.acrylic;
  });

  translateKnownTextNodes(lang);

  const active = document.querySelectorAll('[data-lang-option]');
  active.forEach(button => button.classList.toggle('is-active', button.dataset.langOption === lang));
}

function setLanguage(lang) {
  const normalized = (lang === 'en' || lang === 'fr') ? lang : 'pt';
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
    const lang = localStorage.getItem('site-language');
    return (lang === 'en' || lang === 'fr') ? lang : 'pt';
  }

  function itemFromImage(img) {
    return {
      src: img.getAttribute('data-full') || img.currentSrc || img.src || img.getAttribute('src'),
      alt: img.alt || img.getAttribute('aria-label') || (currentLang() === 'en' ? 'Artwork image' : (currentLang() === 'fr' ? 'Image de l’œuvre' : 'Imagem da obra'))
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
    const lbLang = currentLang();
    const lbLabels = {
      pt: { gallery: 'Galeria ampliada da obra', close: 'Fechar', prev: 'Imagem anterior', next: 'Imagem seguinte', expanded: 'Imagem ampliada' },
      en: { gallery: 'Expanded artwork gallery', close: 'Close', prev: 'Previous image', next: 'Next image', expanded: 'Expanded image' },
      fr: { gallery: 'Galerie agrandie de l’œuvre', close: 'Fermer', prev: 'Image précédente', next: 'Image suivante', expanded: 'Image agrandie' }
    }[lbLang] || { gallery: 'Galeria ampliada da obra', close: 'Fechar', prev: 'Imagem anterior', next: 'Imagem seguinte', expanded: 'Imagem ampliada' };
    box.setAttribute('aria-label', lbLabels.gallery);
    box.innerHTML = `
      <button aria-label="${lbLabels.close}" class="lightbox-close" type="button">×</button>
      <button aria-label="${lbLabels.prev}" class="lightbox-prev" type="button">‹</button>
      <figure class="lightbox-figure">
        <img alt="${lbLabels.expanded}" decoding="async" src="" />
        <figcaption class="lightbox-caption"></figcaption>
      </figure>
      <button aria-label="${lbLabels.next}" class="lightbox-next" type="button">›</button>
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
      '#jc-lightbox-overlay{position:fixed!important;inset:0!important;display:none!important;align-items:center!important;justify-content:center!important;background:rgba(5,5,5,.96)!important;z-index:2147483000!important;padding:32px!important;box-sizing:border-box!important}' +
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

// Subtle museum-grade reveal choreography and refined cursor
(function () {
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function revealMosaic() {
    document.body.classList.add('jc-motion-ready');
    var items = Array.prototype.slice.call(document.querySelectorAll('.series-row'));
    if (!items.length) return;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach(function (item) { item.classList.add('is-visible'); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (item, index) {
      item.style.transitionDelay = Math.min(index * 55, 420) + 'ms';
      observer.observe(item);
    });
  }

  function refinedCursor() {
    if (reduceMotion || !window.matchMedia || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    var ring = document.createElement('div');
    ring.className = 'jc-cursor-ring';
    document.body.appendChild(ring);
    document.body.classList.add('jc-cursor-enabled', 'jc-cursor-hidden');

    function bringCursorToFront() {
      if (ring && ring.parentNode === document.body) document.body.appendChild(ring);
    }
    document.addEventListener('click', function () { requestAnimationFrame(bringCursorToFront); }, true);

    var x = window.innerWidth / 2;
    var y = window.innerHeight / 2;
    var rx = x;
    var ry = y;
    var lastX = x;
    var lastY = y;
    var tilt = 0;

    window.addEventListener('mousemove', function (event) {
      x = event.clientX;
      y = event.clientY;
      document.body.classList.remove('jc-cursor-hidden');
    }, { passive: true });

    document.addEventListener('mouseover', function (event) {
      if (event.target.closest('a, button, input, textarea, select, .main-artwork-image, .thumbnail-button')) {
        document.body.classList.add('jc-cursor-active');
      }
    });
    document.addEventListener('mouseout', function (event) {
      if (event.target.closest('a, button, input, textarea, select, .main-artwork-image, .thumbnail-button')) {
        document.body.classList.remove('jc-cursor-active');
      }
    });
    document.addEventListener('mouseleave', function () { document.body.classList.add('jc-cursor-hidden'); });
    document.addEventListener('mouseenter', function () { document.body.classList.remove('jc-cursor-hidden'); });

    function animate() {
      rx += (x - rx) * 0.82;
      ry += (y - ry) * 0.82;
      var dx = rx - lastX;
      var dy = ry - lastY;
      if (Math.abs(dx) + Math.abs(dy) > 0.02) {
        tilt = Math.atan2(dy, dx) * 180 / Math.PI;
      }
      lastX = rx;
      lastY = ry;
      ring.style.setProperty('--cursor-x', rx + 'px');
      ring.style.setProperty('--cursor-y', ry + 'px');
      ring.style.setProperty('--cursor-tilt', tilt + 'deg');
      requestAnimationFrame(animate);
    }
    animate();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { revealMosaic(); refinedCursor(); });
  } else {
    revealMosaic();
    refinedCursor();
  }
})();
