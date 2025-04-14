# NestJS Example Project

A demonstration project built with NestJS framework showcasing various features and best practices.

## Features

- Built with NestJS framework
- PostgreSQL database integration using TypeORM
- Complete CRUD operations implementation
- Custom middleware implementation
- Database migrations support
- Modular architecture

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- PostgreSQL database

## Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd nest-example
```

2. Install dependencies:

```bash
npm install
```

3. Configure your database connection in `data-source.ts`

4. Run database migrations:

```bash
npm run migration:run
```

5. Start the development server:

```bash
npm run start:dev
```

## Available Commands

### Development

```bash
# Start development server with hot-reload
npm run start:dev

# Start production server
npm run start:prod
```

### Generate Resources

```bash
# Generate a new controller
nest g controller example

# Generate a new service
nest g service example

# Generate a new module
nest g module example

# Generate a new middleware
nest g middleware auth
```

### Database Migrations

```bash
# Generate a new migration
npm run migration:generate -- -d ./data-source.ts src/migrations/<migration-name>

# Run migrations
npm run migration:run

```
