import { TypeOrmModule } from '@nestjs/typeorm';
import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';
import { Example } from './example.entity';
import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { ExampleProcessor } from './example.processor';

@Module({
  imports: [
    TypeOrmModule.forFeature([Example]),
    BullModule.registerQueue({
      name: 'example-queue',
    }),
  ],
  controllers: [ExampleController],
  providers: [ExampleService, ExampleProcessor],
})
export class ExampleModule {}
