# NORC — Precision in Motion

Site institucional em React, TypeScript e Vite. Inclui a marca, quatro linhas, identidade visual, projeto da feira e apresentação do app.

## Desenvolvimento

Use Node.js 22.x e npm.

~~~sh
npm ci
npm run dev
~~~

## Validação e build

~~~sh
npm run build
npm run preview
~~~

O build verifica o TypeScript e gera o site em dist/. Todos os arquivos de public/ são copiados para a publicação. Não são necessárias variáveis de ambiente, chaves de API ou banco de dados.

## Deploy na Vercel pelo Git

1. Envie o projeto para um repositório Git, incluindo package-lock.json e toda a pasta public/.
2. Na Vercel, selecione Add New → Project e importe o repositório.
3. Use a raiz do projeto como Root Directory.
4. Selecione Node.js 22.x nas configurações de build.
5. Clique em Deploy.

O arquivo vercel.json define:

| Configuração | Valor |
| --- | --- |
| Framework | Vite |
| Instalação | npm ci |
| Build | npm run build |
| Saída | dist |

Após conectar o repositório, os próximos pushes seguem a configuração de deploy do projeto na Vercel.

## Deploy pelo terminal

Na raiz do projeto:

~~~sh
npx vercel login
npx vercel
~~~

O segundo comando cria um deploy de preview e solicita a conta/projeto de destino. Confira a URL gerada. Para publicar em produção:

~~~sh
npx vercel --prod
~~~

A pasta .vercel é local e não deve ser versionada. O arquivo .vercelignore exclui arquivos locais do envio pelo CLI.

## Rotas e conferência após o deploy

O site utiliza HashRouter. O endereço da página do app, por exemplo, termina em /#/app. O fragmento após # é tratado no navegador, por isso não é necessário rewrite de SPA na Vercel.

Confira:
- /#/ — home
- /#/about — marca
- /#/line/FORCE — exemplo de linha
- /#/identidade-visual — imagens e folder
- /#/feira — stand e seleção das experiências
- /#/app — filtros, carrossel e ampliação das telas

Abra também as rotas diretamente e atualize a página. Confirme imagens, menu móvel e navegação. As imagens em public/ acompanham o deploy; algumas fotografias e fontes do site são carregadas de serviços externos.

Documentação: https://vercel.com/docs/frameworks/frontend/vite
