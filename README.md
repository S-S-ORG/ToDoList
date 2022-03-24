# ToDoList
This is a simple PWA project based on React JS and Node JS

# Prerequisites:

* You have to have Node installed on your computer. [Download Node](https://nodejs.org/en/download/)

* You have to have MongoDB installed on your computer. [Download MongoDB](https://www.mongodb.com/try/download/community)

* RECOMMENDED: VS Code, to run our code. [Download VS Code](https://code.visualstudio.com/download)

* RECOMMENDED: Postman, to test our APIs. [Download Postman](https://www.postman.com/downloads/)

# Starting instructions
Install the node packages:
* npm i
* cd ./server && npm i

Start the react code
* npm run start

Start the server
* cd ./server && npm run start

# Api Informations
* Swagger-ui:

You can now use Swagger Ui for documentation and testing the endpoints of the api:
Just simply start the server and go to this link : http://localhost:8000/swagger-ui

* Current endpoints:

    - GET http://localhost:8000/api/todos : gets all saved todos in local mongodb
    - GET http://localhost:8000/api/todo/{todo-id}: gets info for an individual todo
    - POST http://localhost:8000/api/todo/create: create a todo item (Note: must send JSON)
    - PUT http://localhost:8000/api/todo/{todo-id}/update: Updates info for an individual todo
    - DELETE http://localhost:8000/api/todo/{todo-id}/delete: Deletes an individual todo from the local mongodb

