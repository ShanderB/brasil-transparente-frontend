## 📦 Instalação e Configuração

### Pré-requisitos
- Node.JS (^20.19.0 || ^22.12.0 || ^24.0.0)
- Angular CLI (^20.2.0)
- Preetier
- Git

# Passos para rodar o projeto localmente

### Clonar o repositório
```bash
git clone https://github.com/brasil-transparente/brasil-transparente-frontend.git
```

Entrar no diretório do projeto
```bash
cd brasil-transparente-frontend
```

Instalar as dependências
```bash
npm install

npm i -g @angular/cli@20.2.0 prettier
```

### Configuração de variáveis de ambiente
Configurar o arquivo `environment.ts` localizado em `src\environments\environment.development.ts` com a variável: 
```typescript
apiUrl: 'URL_DA_API'
```

Atualmente o projeto não está utilizando proxy do angular (foi feito mas removido). Para rodar, é necessário acessar o arquivo `brasil-transparente-api\src\main\java\com\brasil\transparente\api\controller\FinderController.java` e alterar o CORS, removendo o comentário da anotação `@CrossOrigin` e seguir com o start do projeto conforme o readme.

### Iniciar o servidor de desenvolvimento local

```bash
npm start
```

Ao executar o projeto local, a feature de cache local (localStorage) estará desabilitada. Para habilitar, alterar a variável `SHOULD_CACHE` para `true` no arquivo de environment `src\environments\environment.development.ts`.

### Build para produção

```bash
docker build -t brasil-transparente-frontend .
```

Após gerado a imagem, rode o container:

```bash
docker run -p 80:80 brasil-transparente-frontend
```


## 🤝 Como Contribuir
- 📌 **Participe no Discord**: A melhor forma de ajudar na contribuição do projeto é estar alinhado com o que está sendo discutido no nosso Discord:
  https://discord.gg/sQbf3bSzt4
- 🐛 **Issues existentes**: Dentro do repositório no GitHub mantemos uma lista de Issues que devem trabalhadas, geralmente alocadas dentro de projetos. É possível acompanhar o andamento das entregas por lá.
- 🛠️ **Reportar problemas/sugestões**: Para reportar bugs e sugerir novas melhorias, por favor, entre em contato com a gente no nosso Discord.

## ⚖️ Licença
[![AGPL-3.0](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

Este projeto está licenciado sob os termos da **GNU Affero General Public License v3.0** (AGPL-3.0).
- ✅ Liberdade para usar e modificar.
- 🔁 Exige compartilhamento das modificações.
- 🌍 Código-fonte deve ser disponibilizado para usuários.

Consulte o arquivo LICENSE.md para o texto completo da licença.