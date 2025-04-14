# Nest js demo
Setup project using Nest CLI
Connected DB with TypeORM (PostgreSQL)
Implemented basic CRUD (module, controller, service)
Added and ran TypeORM migrations
Created and applied custom middleware

# Commands
npx @nestjs/cli new nest-example
npm run statrt:dev
nest g controller example
nest g service example
nest g middleware auth
npm install --save @nestjs/typeorm typeorm mysql2
nest g module example 

"typeorm": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js"
"migration:generate": "npm run typeorm migration:generate -- -d ./data-source.ts src/migrations/Init",
"migration:run": "npm run typeorm migration:run -- -d ./data-source.ts"

npm run typeorm migration:generate -- -d ./data-source.ts src/migrations/createExampleTable
npm run typeorm migration:run -- -d ./data-source.ts

