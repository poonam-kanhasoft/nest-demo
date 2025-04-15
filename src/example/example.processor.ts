import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
@Processor('example-queue')
export class ExampleProcessor {
  @Process('weekly-task')
  async handleWeeklyTask(job: Job) {
    console.log('Processing weekly task:', job.data);
    // Add your task logic here
    return { status: 'completed' };
  }
}
