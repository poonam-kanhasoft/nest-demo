# NestJS Example Project

A demonstration project built with NestJS framework showcasing various features and best practices.

## Features

- Built with NestJS framework
- PostgreSQL database integration using TypeORM
- Complete CRUD operations implementation
- Custom middleware implementation
- Database migrations support
- Modular architecture
- Task scheduling with cron jobs
- Queue management with Bull

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

### Task Scheduling

```bash
# Example cron job that runs every 10 minutes
@Cron(CronExpression.EVERY_10_MINUTES)
handleEvery10Minutes() {
  console.log('Task executed every 10 minutes');
}
```

Available cron expressions:

- EVERY_10_MINUTES
- EVERY_HOUR
- EVERY_DAY_AT_MIDNIGHT
- EVERY_WEEK
- EVERY_MONTH
- And more...

## Queue Configuration (Bull)

The project uses Bull for queue management. Here's how to set it up:

1. Install required packages:

```bash
npm install @nestjs/bull bull
```

2. Configure Redis connection in `app.module.ts`:

3. Register queues in feature modules (e.g., `example.module.ts`):

4. Use queues in services:

```typescript
@InjectQueue('example-queue')
private readonly exampleQueue: Queue

// Add jobs to queue
await this.exampleQueue.add('weekly-task', {
  data: 'your-data'
});
```

5. Process jobs in processors:

```typescript
@Processor('example-queue')
export class ExampleProcessor {
  @Process('weekly-task')
  async handleTask(job: Job) {
    // Process job data
    return { status: 'completed' };
  }
}
```
