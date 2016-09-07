# Angular2 and Swagger Example

## Before you start
Please install [swagger-codegen](https://github.com/swagger-api/swagger-codegen) in your environment. If you are using OSX you can install via brew.
```bash
brew install swagger-codegen
```

## How to start
- Generate typescript-angular2 client and mock server
```bash
bash generate.sh
```

- Start mock server
```bash
cd ${PROJECT_DIR}/mock
npm start
```

- Start angular2 with webpack
```bash
cd ${PROJECT_DIR}/front
npm start
```

## Swagger Spec
This repository is using yaml file for code generation as follows:

```yaml
swagger: '2.0'
info:
  title: Book Store
  description: API for Book Store
  version: 1.0.0
host: localhost:3000
basePath: /api/v1
schemes:
  - http
consumes:
  - application/json
produces:
  - application/json

paths:
  /books:
    get:
      tags: [Books]
      operationId: getBooksList
      responses:
        200:
          description: success
          schema:
            title: books
            type: array
            items:
              $ref: '#/definitions/Book'
            example: ['#/definitions/Book', '#/definitions/Book']

  /books/{id}:
    parameters:
      - name: id
        in: path
        description: book id
        required: true
        type: integer
        format: int64
    get:
      tags: [Books]
      operationId: getBookById
      responses:
        200:
          description: success
          schema:
            title: book
            $ref: '#/definitions/Book'

definitions:
  Book:
    type: object
    properties:
      id:
        type: integer
        example: 1
      title:
        type: string
        example: Hello, Angular2
      author:
        type: string
        example: john doe
```

## License 
MIT