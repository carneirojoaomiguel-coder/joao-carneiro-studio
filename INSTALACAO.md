# Backoffice de João Carneiro

Este projeto adapta o site enviado para gerir obras, estudos, imagens, vídeos e textos em `/admin/`. Mantém os recursos gráficos existentes e os endereços das 25 peças. O editor utiliza Decap CMS e a autenticação GitHub suportada pelo Netlify.

O código e a geração do site foram preparados. **O projeto está configurado para o repositório `carneirojoaomiguel-coder/joao-carneiro-studio`, no ramo `main`. Para ativar a edição no site público, conclui a ligação e a autenticação no Netlify conforme os passos abaixo.** Arrastar este ZIP para um deploy manual, por si só, não ativa a gravação nem as publicações automáticas.

## 1. Colocar o projeto no teu GitHub

Repositório escolhido: [carneirojoaomiguel-coder/joao-carneiro-studio](https://github.com/carneirojoaomiguel-coder/joao-carneiro-studio).

Se o site já está ligado a um repositório, usa esse mesmo repositório e guarda a versão atual antes de integrar estes ficheiros.

Se publicavas apenas por upload da pasta, cria um repositório teu, preferencialmente privado. Podes usar o GitHub Desktop: `File > Add local repository`, selecionar a pasta deste projeto, criar o repositório local quando solicitado e escolher `Publish repository`. Mantém a opção de repositório privado.

A raiz do repositório deve conter `package.json`, `netlify.toml`, `cms-settings.json`, `content`, `assets`, `scripts` e `admin`. A pasta `dist` é gerada automaticamente e está excluída pelo `.gitignore`. Não é necessário instalar pacotes para gerar o site.

## 2. Indicar o repositório

O ficheiro `cms-settings.json` já está preenchido com a tua conta e o repositório:

```json
{
  "repository": "carneirojoaomiguel-coder/joao-carneiro-studio",
  "branch": "main"
}
```

Alternativamente, com Node.js 22 ou superior:

```sh
node scripts/configure.mjs --repo carneirojoaomiguel-coder/joao-carneiro-studio --branch main --url https://joao-carneiro.com
npm test
npm run build
```

Utiliza o ramo real do repositório, caso não seja `main`. Faz commit e envia esta configuração para o GitHub. Os nomes são informação pública de configuração; não são palavras-passe nem tokens.

## 3. Ligar o projeto atual no Netlify

1. Abre o projeto que já serve `joao-carneiro.com`.
2. Nas definições de construção e publicação contínua, liga o repositório GitHub do passo anterior. Autoriza o Netlify a ler o repositório.
3. Ramo de produção: `main`, ou o ramo configurado.
4. Diretório base: raiz do projeto, sem uma subpasta adicional.
5. Comando de construção: `npm run build`.
6. Diretório de publicação: `dist`.
7. Mantém o domínio atual associado ao mesmo projeto. Confirma as definições antes da primeira publicação.

O ficheiro `netlify.toml` já declara o comando, a pasta e a versão de Node. O código original de Netlify Forms foi mantido nas páginas de contacto e pedido de informação; as notificações de email continuam a configurar-se no painel do Netlify.

## 4. Ativar a entrada com GitHub

1. No GitHub, abre `Settings > Developer settings > OAuth Apps > New OAuth App`.
2. Nome sugerido: `João Carneiro — Backoffice`.
3. Homepage URL: `https://joao-carneiro.com`.
4. Authorization callback URL: `https://api.netlify.com/auth/done`.
5. Regista a aplicação e guarda o Client ID. Gera o Client Secret.
6. No projeto do Netlify, abre `Project configuration > Security > OAuth`.
7. Em `Authentication Providers`, escolhe `Install Provider > GitHub`.
8. Introduz aí o Client ID e o Client Secret e guarda.

**O Client Secret fica exclusivamente nas definições do Netlify. Não o coloques no código, no GitHub, no ZIP ou numa conversa.** Não é necessário configurar Git Gateway ou Netlify Identity para este projeto.

Depois de o deploy concluir, abre `https://joao-carneiro.com/admin/`, escolhe entrar no backoffice e autentica-te no GitHub. Só utilizadores com permissão de escrita no repositório conseguem guardar alterações. A interface de entrada pode ser consultada publicamente; os rascunhos e as operações de escrita dependem da autenticação e das permissões do GitHub.

## 5. Confirmar o funcionamento

1. Cria uma peça de teste, com título, categoria, ano, técnica, dimensões e uma imagem.
2. Guarda como rascunho; confirma que ainda não aparece no site.
3. Revê a pré-visualização e publica pelo menu de publicação do editor.
4. Confirma em `Deploys` que o Netlify terminou com sucesso.
5. Abre a página pública e confirma a imagem e a ficha.
6. Edita o título e acrescenta uma imagem; publica e volta a confirmar.
7. Testa um MP4/WebM até 50 MB ou um link de YouTube/Vimeo.
8. Oculta ou elimina a peça de teste e publica novamente.

Estes passos finais requerem a tua conta GitHub e o Netlify. Não foram executados neste ambiente.

## Utilização diária

- **Obras e estudos:** criar, editar, mudar categoria, disponibilidade, ordem, imagens e vídeos.
- **Páginas do site:** fotografia inicial, peça em destaque, anúncio de exposição, biografia e CV.
- **Contactos e definições:** email, localização, Instagram, descrição de pesquisa e imagem de partilha.
- **Biblioteca multimédia:** carregar e selecionar ficheiros. Guarda cópias dos originais.
- **Rascunho:** guardar sem mostrar ao público.
- **Publicar:** desencadear uma atualização no Netlify. A versão pública só muda após o deploy terminar.

Os textos têm campos para PT, EN e FR. As traduções que já existiam foram importadas; uma tradução vazia utiliza o texto português. Os textos são tratados como texto simples, com quebras de linha: código HTML introduzido no editor não é executado. Os conteúdos legais existentes foram preservados e não têm um editor próprio nesta versão.

O campo «Visível no site» permite ocultar uma peça sem a eliminar. Se a peça destacada for ocultada ou eliminada, a página inicial utiliza a primeira peça visível. Os endereços das peças existentes, incluindo espaços nos nomes, são mantidos. Uma peça nova recebe um endereço a partir do nome do ficheiro criado pelo CMS; mudar depois o título mantém esse endereço.

## Imagens e vídeos

| Tipo | Limite configurado | Nota |
| --- | --- | --- |
| Imagem em campo de fotografia | 15 MB | JPG, PNG ou WebP recomendados; sem filtros, recortes ou conversão automática |
| Vídeo carregado | 50 MB | MP4 ou WebM; MP4/H.264 é recomendado para compatibilidade |
| Vídeo externo | Link | YouTube ou Vimeo; o fornecedor só é carregado após um clique do visitante |
| CV em PDF | 15 MB | Disponível na página CV |

Os limites acima aplicam-se aos campos de carregamento das páginas e peças. Na biblioteca geral, respeita também os limites de ficheiros do GitHub. As galerias mantêm a ordem que definires e as proporções das imagens. Para que o site carregue rapidamente, procura exportar fotografias com 2000–2500 px e tamanho próximo ou inferior a 2 MB. Em cada item de vídeo, preenche o ficheiro ou o link externo, sem preencher ambos. A validação impede uma atualização com ficheiros em falta ou endereços inválidos.

Os vídeos carregados ficam no Git e são servidos pelo Netlify. Para muitos vídeos ou ficheiros longos, usa YouTube/Vimeo ou considera mais tarde armazenamento dedicado. O histórico de ficheiros aumenta o tamanho do repositório. Os limites e eventuais custos de armazenamento, tráfego e builds dependem das contas GitHub e Netlify. O projeto não subscreve serviços nem altera planos.

## Organização do projeto

| Pasta/ficheiro | Função |
| --- | --- |
| `content/catalogue/*.json` | Fichas das peças geridas pelo CMS |
| `content/pages/*.json` | Textos e definições das páginas |
| `cms-settings.json` | Identificação do repositório, sem credenciais |
| `assets/uploads/` | Novos ficheiros carregados pelo backoffice |
| `assets/` | Fotografias e outros recursos já existentes |
| `admin/` | Painel, editor, ajuda e pré-visualizações |
| `scripts/` | Geração das páginas e configuração do CMS |
| `templates/` | Páginas legais e formulários existentes |
| `dist/` | Resultado pronto para servir; gerado, não editar |

`npm test` verifica a geração, a inclusão/remoção de peças, os caminhos existentes, a ocultação de rascunhos, a validação de ficheiros e o tratamento seguro de textos e ligações. `npm run build` gera o site sem dependências de terceiros no processo de construção. O editor carrega Decap CMS 3.16.3 por CDN quando a ligação ao repositório está preenchida.

## Notas da importação

Foram importadas 16 obras e 9 estudos. A peça com endereço `dissipate into negative.html` tinha títulos diferentes na lista e na página: «Dissipate into negative» e «Portrait of Vincent Cassel». Foi mantido «Dissipate into negative», conforme a lista, e preservado o endereço. Podes corrigir o título no backoffice. A capa das listas e as imagens das galerias foram mantidas; as descrições genéricas dos modelos de Study A/B foram substituídas pelo respetivo título nos textos alternativos.

## Referências oficiais

- [Decap CMS — backend GitHub](https://decapcms.org/docs/github-backend/)
- [Netlify — configuração OAuth](https://docs.netlify.com/manage/security/secure-access-to-sites/oauth-provider-tokens/)
- [Decap CMS — configuração](https://decapcms.org/docs/configuration-options/)
- [Decap CMS — carregamento de ficheiros](https://decapcms.org/docs/widgets/file/)
