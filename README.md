README

Título: Cookenu

Descrição: API desenvolvida em Node e Typescript para criação de website de receitas culinárias.

Endpoints: Cadastro, login, listagem e busca de usuários. Cadastro e listagem de receitas criadas.		
           
Rotas:

//-------------------------------------------------------------------------------------------------------------------------------

Criar novo usuário 

Método: Post

URL: http://localhost:3003/signup 

Body:

{
    "name": "Mathews",
    "email": "mat@email.com.br",
    "password": "1234567"
}

//-------------------------------------------------------------------------------------------------------------------------------

Login de usuário

Método: Post

URL: http://localhost:3003/login

Body:

{
    "email": "mat@email.com.br",
    "password": "1234567"
}

//------------------------------------------------------------------------------------------------------------------------------------

Buscar usuário

Método: GET

URL: http://localhost:3003/user/profile 

Headers: Authorization: token

//-------------------------------------------------------------------------------------------------------------------------------

Buscar usuário por id

Método: GET

URL: http://localhost:3003/user/:id 

Headers: Authorization: token

Path Params: id

//-------------------------------------------------------------------------------------------------------------------------------

Criar receitas 

Método: POST

URL: http://localhost:3003/recipes 

Headers: Authorization: token

Body: 

{
    "title": "Pão com ovo",
    "description": "Corte o pão, frite o ovo e coloque dentro do pão",
    "date": "2021-01-10"
}

//-------------------------------------------------------------------------------------------------------------------------------

Buscar receitas

Método: GET

URL: http://localhost:3003/user/:id 

Headers: Authorization: token

Path Params: id

Ferramentas, dependências e libs instaladas: Node, Typescript, Express, My SQL, Bcryptjs e UUID.

Para rodar o projeto localmente: Faça o clone do repositório, navegue até a pasta destino, utilize o comando npm install, rode o servidor com o comando npm run start e faça as requisições via Postman ou app de preferência.
