import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ExampleService } from './example.service';
import { ExampleDto } from './create-example.dto';
import { Example } from './example.entity';

@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Get()
  findAll() {
    return this.exampleService.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id') id:number) {
      return this.exampleService.findOne(id);
  }

  @Post()
  create(@Body() createDto: ExampleDto): Promise<Example> {
    return this.exampleService.create(createDto);
  }
  
  @Put(':id')
  update(
    @Param('id') id:number,
    @Body() updateDto: ExampleDto): Promise<Example|null> 
    {
      return this.exampleService.update(id, updateDto);
    }

    @Delete(':id')
    delete(
      @Param('id') id:number)
      {
        return this.exampleService.delete(id);
      }
}
