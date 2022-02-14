import { Module } from '@nestjs/common';
import { StudentProcessesService } from './student-processes.service';
import { StudentProcessesResolver } from './student-processes.resolver';

@Module({
  providers: [StudentProcessesResolver, StudentProcessesService]
})
export class StudentProcessesModule {}
