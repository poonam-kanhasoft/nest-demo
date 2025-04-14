import { Injectable } from '@nestjs/common';
import { Example } from './example.entity';
import { DeepPartial, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ExampleDto } from './create-example.dto';

@Injectable()
export class ExampleService {
  constructor(
    @InjectRepository(Example)
    private readonly exampleRepository: Repository<Example>) {}

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
  }
















