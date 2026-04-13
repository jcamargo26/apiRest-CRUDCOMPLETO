# API de Livros

## Descrição

Esta é uma API REST desenvolvida em Node.js utilizando o framework Express.
A aplicação permite o cadastro e a listagem de livros, com validações básicas nos dados de entrada.

---

## Tecnologias utilizadas

-Node.js 
-Express 
-Postman 

---

## Endpoints

### GET /livros

**Descrição:**
Retorna a lista de todos os livros cadastrados.

URL:
http://localhost:3000/livros

Método: 
GET

Body: 
Não possui

exemplo:

```json
[
  {
    "id": 1,
    "titulo": "Harry Potter",
    "autor": "J.K Rowling",
    "ano": 1997
  },
  {
    "id": 2,
    "titulo": "1984",
    "autor": "George Orwell",
    "ano": 1949
  }
]
```

---

### POST /livros

Descrição: 
Cria um novo livro na aplicação.

URL: 
http://localhost:3000/livros

Método: 
POST

Body:

```json
{
  "titulo": "Nome do livro",
  "autor": "Nome do autor",
  "ano": 2020
}
```

Exemplo: 

```json
{
  "id": 1,
  "titulo": "Nome do livro",
  "autor": "Nome do autor",
  "ano": 2020
}
```

---

## Validações implementadas

A API realiza validações básicas nos dados enviados no endpoint POST:

* O campo **titulo** é obrigatório
* O campo **autor** é obrigatório
* O campo **ano** deve ser do tipo numérico

Caso alguma dessas validações falhe, a API retorna um erro com status 400.

--PRINTS--

- Exemplo de erro (ausência de ano).
- Exemplo de requisição feita com sucesso.
## Capturas de tela

### Requisição POST - Sucesso

Exemplo de criação de um livro com dados válidos:

![POST Sucesso](./images/requisicao_correta.png)

---

### Requisição POST - Erro de validação

Exemplo de erro ao enviar dados inválidos (validação):

![POST Erro](./images/erro_validacao.png)


## Testes no Postman

Foram realizados testes utilizando o Postman para validação do funcionamento da API:

* Criação de livros (POST)
* Listagem de livros (GET)
* Testes de validação com dados inválidos


## Collection do Postman

A collection contendo todas as requisições utilizadas nos testes foi exportada e incluída na entrega do trabalho.

---

## Execução do projeto

Para executar a API localmente:

```bash
npm install
npm run dev
```

A aplicação estará disponível em:

http://localhost:3000


## Considerações finais

Este projeto tem como objetivo demonstrar a criação de uma API REST simples, incluindo definição de endpoints, validações de dados e testes utilizando ferramentas apropriadas.
