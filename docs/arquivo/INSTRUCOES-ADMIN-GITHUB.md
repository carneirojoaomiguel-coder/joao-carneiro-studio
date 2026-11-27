# João Carneiro — Admin integrado sem Decap/Git Gateway

Esta versão substitui o Decap CMS por um painel em `/admin` que publica diretamente no GitHub através da API oficial do GitHub.

## O que fica resolvido

- Não usa Netlify Identity.
- Não usa Git Gateway.
- Não usa Decap.
- As alterações são guardadas no repositório GitHub.
- O Netlify faz deploy automático após cada alteração.

## Passo 1 — Publicar estes ficheiros

1. Descompacta este ZIP.
2. Vai ao GitHub → repositório `joao-carneiro-site`.
3. Faz upload/substituição destes ficheiros.
4. Commit changes.
5. Espera o deploy do Netlify.

## Passo 2 — Criar token do GitHub

1. GitHub → fotografia de perfil → Settings.
2. Developer settings.
3. Personal access tokens.
4. Fine-grained tokens.
5. Generate new token.
6. Repository access: escolher apenas `joao-carneiro-site`.
7. Permissions → Repository permissions → Contents: **Read and write**.
8. Generate token.
9. Copia o token.

## Passo 3 — Entrar no admin

1. Abre `https://joao-carneiro.com/admin/`.
2. Cola o token.
3. Clica em Entrar.
4. Opcionalmente, clica em “Guardar token neste computador”.

## Como funciona

O painel edita o ficheiro:

`content/site.json`

E carrega imagens para:

`assets/uploads/`

Depois o Netlify publica automaticamente.

## Segurança

O token fica apenas no teu browser se escolheres guardar. Não o envies a ninguém. Se perderes o token, podes apagá-lo no GitHub e criar outro.
