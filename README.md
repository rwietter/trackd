## Trackd

Trackd é um sistema de cadastro e rastreamento de fichas odontológicas. O sistema foi desenvolvido durante a disciplina de Qualidade de Software. O sistema foi desenvolvido utilizando a linguagem de programação TypeScript e os frameworks Nodejs para o backend, React e Nextjs para o frontend.

### Como utilizar

Para utilizar o sistema, é necessário ter o Nodejs instalado na máquina. Após isso, basta clonar o repositório e executar os seguintes comandos:

```bash
cd trackd
```

Instale as dependências do projeto:

```bash
npm install # ou yarn install
```

Crie um banco de dados `Postgres` e crie um .env em `app/server` com as variáveis de ambiente:

```bash
PORT=3000
DATABASE_URL="postgresql://user:password@localhost:5432/postgres?schema=public"
SECRET_JWT_KEY=""
SENTRY_DSN=""
```

Execute as migrations:

```bash
npm prisma migrate dev # ou yarn prisma migrate dev
```

Inicie o servidor:

```bash
cd apps/server && npm run dev # ou yarn dev
```

Inicie o cliente:

```bash
cd apps/client && npm run dev # ou yarn dev
```

Inicie o administrador:

```bash
cd apps/web && npm run dev # ou yarn dev
```

Abra o navegador e acesse `http://localhost:3001`

---

### Como contribuir

Para contribuir com o projeto, leia o [CONTRIBUTING.md] envie um pull request.

---

### Licença
[LICENSE](LICENSE.md)

---

### Documentação

- [Server API](https://trackrow.herokuapp.com/)
- [Docs](https://rwietter.github.io/trackd/#/)
- [Swagger](https://trackrow.herokuapp.com/documentation/static/index.html#/)
- [Admin](https://trackrow.vercel.app/)
- [Client](https://trackd.vercel.app/)
- [Sentry](https://sentry.io/)

---

### Links úteis

- [Nextjs](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [Postgres](https://www.postgresql.org/)
- [Sentry](https://sentry.io/welcome/)
