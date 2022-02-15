import { Module } from '@nestjs/common';
import { StudentProcedureProcessesService } from './student-procedure-processes.service';
import { StudentProcedureProcessesResolver } from './student-procedure-processes.resolver';

@Module({
  providers: [StudentProcedureProcessesResolver, StudentProcedureProcessesService]
})
export class StudentProcedureProcessesModule {}
