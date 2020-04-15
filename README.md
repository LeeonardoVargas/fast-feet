<h1 align="center">
  <img alt="FastFeet" title="FastFeet" src=".github/logo.png" width="300px" />
</h1>

<h4 align = "center">
  Um aplicativo de gestão e acompanhamento de encomendas
</h4>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/leeonardovargas/fast-feet.svg">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/leeonardovargas/fast-feet.svg">
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/leeonardovargas/fast-feet.svg">

  <a href="https://github.com/leeonardovargas/gobarber/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/leeonardovargas/fast-feet.svg">
  </a>
  
  <a href="https://github.com/leeonardovargas/gobarber/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/leeonardovargas/fast-feet.svg">
  </a>
  
  <img alt="GitHub" src="https://img.shields.io/github/license/leeonardovargas/fast-feet.svg">
</p>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação-e-execução">Instalação e execução</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<p align="center">
  <img alt="Screen Shot 1" src=".github/screen-shot-1.png" width="100%">
</p>

<p align="center">
  <img alt="Screen Shot 2" src=".github/screen-shot-2.png" width="100%">
</p>


## :rocket: Tecnologias

-  [Node.js](https://nodejs.org/en/)
-  [Docker](https://docs.docker.com/)
-  [MailTrap](https://mailtrap.io/)
-  [React](https://pt-br.reactjs.org/)
-  [Redux](https://redux.js.org/)
-  [Redux-Saga](https://redux-saga.js.org/)
-  [React-Toastify](https://fkhadra.github.io/react-toastify/)
-  [Styled-components](https://www.styled-components.com/)
-  [Unform](https://unform.dev/)
-  [React-Icons](https://react-icons.netlify.com/)
-  [Yup](https://github.com/jquense/yup)
-  [Date-fns](https://date-fns.org/)
-  [React Native](https://reactnative.dev/)
-  [React Navigation v5](https://reactnavigation.org/)
-  [React-Native-Vector-Icons](https://oblador.github.io/react-native-vector-icons/)
-  [ESLint](https://eslint.org/)

Permitir que o mobile consiga acessar o localhost da api
```sh
$ adb reverse tcp:3333 tcp:3333
```

## 💻 Projeto

O FastFeet uma aplicação completa(Back-end, Front-end, Mobile) desenvolvida durante o Bootcamp GoStack 
da <a target="_blank" href="https://rocketseat.com.br/">Rocketseat</a>. Esse projeto é o desafio final do curso que será
avialido para a emissão do Certificado.

## :information_source: Instalação e execução

```bash
# Clone esse repositório e acesse o diretório 
$ git clone https://github.com/LeeonardoVargas/fast-feet.git && cd fast-feet
```

#### backend

```bash
# Acessar diretório 
$ cd backend/
# Criando container Postgres 
$ docker run --name postgres-fastfeet -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
# Criando database fastfeet no container postgres-fastfeet  
$ docker exec -it postgres-fastfeet psql -h localhost -U postgres -c "CREATE DATABASE fastfeet"
# Criando container Redis 
$ docker run --name redis-fastfeet -p 6379:6379 -d -t redis:alpine
# Executando o migrate e os seeds 
$ yarn sequelize db:migrate && yarn sequelize db:seed:all
# Executando 
$ sh init.sh

# Abra outra janela/aba do terminal 
$ yarn queue

```


#### frontend

```bash

cd frontend/

yarn install

yarn start

```

EM BREVE VOCÊ TERÁ MAIS INFORMAÇÕES.... :sunglasses:

## :wrench: Readme em Construção
<div align="center">
  <img src="https://media.giphy.com/media/9zXM9n2URlcjC2Tnaq/giphy.gif"/>
</div>

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
