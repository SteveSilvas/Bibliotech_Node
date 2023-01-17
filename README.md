# Bibliotech Api
Api backend utilizando typescript, node, express, sequelize, mysql2, dotenv e HttpStatusCodes.


Sequência de comandos para testes:

npm i (instala as dependências necessárias para o projeto);

npm run test (script de teste apenas para imprimir mensagem no console);

npm run build (compila os arquivos typescript do projeto para a pasta ./dist);

npm run start (inicia o projeto a partir do ./dist/index.js);

npm run dev (compila os arquivos e inicia o servidor express no projeto a partir do index.js - desta forma as mudanças nos arquivos ts salvas geram as duas etapas anteriores facilitando o desenvolvimento).

A conexão com a base de dados aceita qualquer banco com mysql sendo que os dados de conexão devem ser passados ao arquivo .env.example. É necessário portanto, renomear este arquivo para ".env" (retirando o ".example") e adicionar às variáveis de ambiente os respectivos valores de um banco válido. Após criado o banco, a api cria as tabelas na arquitetura CodeFirst.


Após iniciar a aplicação, é necessário testar as rotas fazendo as chamadas com alguma aplicação como Postman ou Thunder Client (extensão do vscode).