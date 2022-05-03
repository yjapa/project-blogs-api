# Project Blogs API
# Contexto
Este projeto foi desenvolvido na @Trybe(curso de programação). O projeto consiste na construção de uma API RESTful utilizando a arquitetura MSC, tratando-se de um sistema capaz de cadastrar usuários na aplicação que desejam fazer `Posts` com suas devidas `Categorias` na plataforma.

A aplicação foi desenvolvida em `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts.

## Técnologias usadas

Back-end:
> Desenvolvido usando: Node.js, Express , Sequelize!

## Instalando Dependências

Após clonar o projeto, utilize na pasta raiz o comando:

```bash
npm install
```

## Variáveis de Ambiente

Na raiz do projeto, crie um arquivo .env para configurar as variáveis de ambiente. Por exemplo, caso o seu usuário SQL seja `nome` e senha `1234` seu arquivo ficará desta forma:

```bash
MYSQL_HOST=localhost
MYSQL_USER=nome
MYSQL_PASSWORD=1234
PORT=3000
```

## Executando aplicação

Para rodar o projeto, utilize na pasta raiz o comando:

```bash
npm start
```

* Os endpoints estão no padrão REST, ou seja, utilize os verbos HTTP para realizar as requisições.

## Requisições

### Cadastro Usuário

* Para cadastrar um usuário, devemos acessar o endpoint `POST /user`
* O endpoint deve receber a seguinte estrutura:
```bash
{
  "displayName": "Brett Wiltshire",
  "email": "brett@email.com",
  "password": "123456",
  "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
}
```

### Login

* Para realizar o login, devemos acessar o endpoint `POST /login`
* O endpoint deve receber a seguinte estrutura:
```bash
{
  "email": "email@mail.com",
  "password": "123456"
}
```
* Este endpoint te retornará um `Token`

### Listar todos os Usuários

* Para listar todos os usuários, devemos acessar o endpoint `GET /user`.
* A requisição deve conter no Header o `token` gerado no login 

### Listar um Usuário

* Para listar um usuário, devemos acessar o endpoint `GET /user/:id` passando na `URL` o `ID` do usuário que desejamos buscar.
* A requisição deve conter no Header o `token` gerado no login 

### Criar uma Categoria

* Para Criar uma categoria , devemos acessar o endpoint `POST /categories`
* O endpoint deve receber a seguinte estrutura:
```bash
 {
   "name": "Inovação"
 }
```
* A requisição deve conter no Header o `token` gerado no login 

### Listar todas as Categorias

* Para listar todas as categorias, devemos acessar o endpoint `GET /categories`
* O endpoint deve receber a seguinte estrutura:
* A requisição deve conter no Header o `token` gerado no login 

### Criar um Post

* Para criar um post, devemos acessar o endpoint `POST /post`
* O endpoint deve receber a seguinte estrutura:
```bash
{
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key",
  "categoryIds": [1, 2]
}
```
* A requisição deve conter no Header o `token` gerado no login 

### Listar todos os Posts

* Para listar todos os posts, devemos acessar o endpoint `GET /posts`
* A requisição deve conter no Header o `token` gerado no login 
