import { Injectable } from '@nestjs/common';
import { Example } from './example.entity';
import { DeepPartial, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ExampleDto } from './create-example.dto';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class ExampleService {
  constructor(
    @InjectRepository(Example)
    private readonly exampleRepository: Repository<Example>,
    @InjectQueue('example-queue')
    private readonly exampleQueue: Queue,
  ) {}

    findAll(): Promise<Example[]> {
      const examples = this.exampleRepository.find();     
      return examples;
    }
    
    findOne(id: number): Promise<Example | null> {
      const example = this.exampleRepository.findOne({
        where : {id}
      });
      return example;
    }

    create(createDto: ExampleDto): Promise<Example>{
      const newExample = this.exampleRepository.create(createDto);
      return this.exampleRepository.save(newExample);
    }

    async update(id:number, updateDto: ExampleDto): Promise<Example|null>{
      await this.exampleRepository.update(id, updateDto)
      const updatedExample = await this.exampleRepository.findOne({
        where : {id}
      });
      return updatedExample;
    }

    delete(id:number):boolean{
      this.exampleRepository.delete(
        {id}
      )
      return true;
    }

  @Cron(CronExpression.EVERY_WEEK)
  async handleWeeklyTask() {
    await this.exampleQueue.add('weekly-task', {
      timestamp: new Date().toISOString(),
      // Add any additional data you want to pass to the processor
    });
  }
}
