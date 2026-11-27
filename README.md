# João Carneiro — site com backoffice

O site existente foi adaptado para editar conteúdos em `/admin/` através de Decap CMS, GitHub e Netlify. Estão importadas as 16 obras e os 9 estudos da pasta enviada.

**O projeto está configurado para carneirojoaomiguel-coder/joao-carneiro-studio, ramo main. É necessário concluir a ligação inicial ao Netlify antes de guardar ou publicar no site público.** O guia [INSTALACAO.md](INSTALACAO.md) explica os passos. A publicação e a autenticação do backoffice dependem da configuração do projeto no Netlify, explicada no guia.

Requisitos de construção: Node.js 22 ou superior. Sem dependências de construção.

```sh
npm test
npm run build
```

A saída é `dist/`. O Netlify executa a construção automaticamente quando publicas uma alteração no CMS, depois de o repositório e a autenticação estarem ligados.

Não edites `dist` para alterar conteúdos: utiliza o backoffice ou os ficheiros em `content`. O guia de utilização também fica disponível em `/admin/ajuda.html`.
