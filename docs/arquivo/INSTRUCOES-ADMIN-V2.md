# João Carneiro — Admin v2

Esta versão substitui Decap/Git Gateway por um painel próprio em `/admin`.

## 1. Supabase
1. Cria uma conta gratuita em Supabase.
2. Cria um projeto novo.
3. Vai a **SQL Editor**.
4. Cola e executa o conteúdo de `supabase-schema.sql`.
5. Vai a **Project Settings → API**.
6. Copia:
   - Project URL
   - anon public key
7. Abre `admin/config.local.js` e coloca esses valores em:
   - `supabaseUrl`
   - `supabaseAnonKey`

## 2. Criar utilizador admin
1. Publica o site.
2. Abre `https://joao-carneiro.com/admin/`.
3. Escreve o email e uma password.
4. Clica **Criar utilizador**.
5. Se o Supabase pedir confirmação, confirma o email.
6. Depois entra com esse email/password.

## 3. Cloudinary para imagens
1. Cria conta gratuita em Cloudinary.
2. Cria um **unsigned upload preset**.
3. Copia o cloud name e o preset para `admin/config.local.js`:
   - `cloudinaryCloudName`
   - `cloudinaryUnsignedPreset`

## 4. Publicação
Depois de editares `admin/config.local.js`, faz upload/commit no GitHub.
O Netlify publica automaticamente.

## Nota importante
O site público continua a funcionar mesmo sem o admin configurado. O painel `/admin` só fica operacional depois de configurares Supabase e Cloudinary.
