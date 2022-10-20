<p align="center">
  <img src="https://res.cloudinary.com/technical-intelligence/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1666278388/Gamersclub.jpg" alt="Gamersclub-test">
</p>

<br />

<div align="center"><strong>Aplicação desenvolvida para GamersClub - FrontEnd</strong></div>
<div align="center">Esta aplicação foi desenvolvida apenas para prova de conhecimento e não é oficical da empresa GamersClub.</div>

<br />

<div align="center">
  <strong>Aplicação em produção: <a href="https://gamers-club-test.vercel.app" target="_blank">gamers-club-test.com.br</a></strong>
</div>

<br />

<div align="center">
  <sub>Desenvolvido por <a href="https://www.linkedin.com/in/daniel-luiz-alves-791a7911a/">Daniel Luiz Alves</a>.</sub>
</div>

<br />

## Tecnologias

- ⚡️ Next.js 12
- ⚛️ React 18
- ⛑ TypeScript
- 📏 ESLint — Para encontrar e corrigir problemas no código
- 💖 Prettier — Formatador de código para estilo consistente
- 🐶 Husky — Para executar scripts antes de commitar alterações
- 🚓 Commitlint — Para garantir que as mensagens de commit sigam a convenção
- 🖌 Renovate — Para manter as dependências atualizadas
- 🚫 lint-staged — Executa o ESLint e Prettier em arquivos Git preparados
- 👷 PR Workflow — Executa verificação de tipo e linters em solicitações pull
- ⚙️ EditorConfig — Estilos de codificação consistentes entre editores e IDEs

<br />

## Executando o projeto

Realize o download do projeto: 

```
git clone https://github.com/danielalves96/gamers-club-test.git
```
Para instalar as dependências do projeto execute o seguinte comando:
```
yarn install
```

### Desenvolvimento

Para rodar o projeto em modo de desenvolvimento, execute o comando abaixo para inicializar as variáveis de ambiente:

```bash
cp .env.example .env
```

Por fim, execute:
```bash
yarn dev
```


Abra `http://localhost:3000` em seu navegador e veja o resultado.


### Testes

Para executar os testes basta executar o comando:
```bash
yarn test
```

## Documentação

### Requisitos

Node.js >= 12.22.0
yarn

### Estrutura de pastas

- [`.github`](.github) — Configuração do GitHub, incluindo o CI Workflow.<br>
- [`.husky`](.husky) — Configuração do Husky e hooks.<br>
- [`public`](./public) — Arquivos estáticos, como robots.txt, imagns, e favicon.<br>
- [`src`](./src) — Código fonte da aplicação, incluindo páginas, componentes, estilos.

### Scripts

- `yarn dev` — Inicia o aplicativo no modo de desenvolvimento em `http://localhost:3000`.
- `yarn build` — Cria uma compilação de produção otimizada do seu aplicativo.
- `yarn start` — Inicia a aplicação no modo de produção.
- `yarn type-check` — Valide o código usando o compilador TypeScript.
- `yarn lint` — Executa o ESLint para todos os arquivos no diretório `src`.
- `yarn format` — Executa o Prettier para todos os arquivos no diretório `src`.
- `yarn test` — Executa os testes da aplicação.


## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para mais informações.
