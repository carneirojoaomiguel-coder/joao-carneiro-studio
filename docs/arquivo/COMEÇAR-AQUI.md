# João Carneiro — instalação limpa

Este pacote foi preparado para substituir a tentativa anterior e reduzir a confusão.

## O que este pacote corrige

- Site limpo para GitHub + Netlify.
- Formulário com Netlify Forms e página `/thank-you/`.
- Thumbnail de partilha para WhatsApp/redes sociais com `https://joao-carneiro.com/assets/social/whatsapp-thumbnail.jpg`.
- Backoffice em `/admin/` via Decap CMS.
- Imagens comprimidas para facilitar upload no GitHub.

## Instalação recomendada

### 1. GitHub

No repositório `joao-carneiro-site`, apaga os ficheiros atuais ou cria um repositório novo.
Depois faz upload do conteúdo desta pasta, não do ZIP.

Importante: seleciona ficheiros como `index.html`, `assets`, `admin`, `series`, `netlify.toml`, etc.

### 2. Netlify

No Netlify, cria um site novo a partir do repositório GitHub.

Configuração:

- Build command: deixar vazio
- Publish directory: `.`

### 3. Domínio

Depois do deploy funcionar no endereço Netlify, liga o domínio:

`joao-carneiro.com`

em:

Project configuration → Domain management

### 4. Formulário

Depois do deploy, vai a:

Forms

Verifica se aparece o formulário `inquire` ou `contact`.
Depois adiciona notificação para:

`studio.joaocarneiro@gmail.com`

### 5. Backoffice

No projeto correto do Netlify:

1. Project configuration → Identity
2. Clicar em `Enable Identity`
3. Registration preferences → `Invite only`
4. Services → `Enable Git Gateway`
5. Identity → Invite users
6. Enviar convite para o teu email
7. Aceitar convite e criar password
8. Abrir `/admin/`

Exemplo:

`https://joao-carneiro.com/admin/`

## Nota importante

O backoffice só funciona quando:

- o site foi criado a partir do GitHub;
- Identity está ativo nesse mesmo projeto;
- Git Gateway está ativo nesse mesmo projeto;
- o utilizador foi convidado nesse mesmo projeto.

Se o convite for feito no projeto antigo, o `/admin/` continua a falhar.
