import { Test, TestingModule } from '@nestjs/testing';
import { StudentProcedureProcessesResolver } from './student-procedure-processes.resolver';
import { StudentProcedureProcessesService } from './student-procedure-processes.service';

describe('StudentProcedureProcessesResolver', () => {
  let resolver: StudentProcedureProcessesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentProcedureProcessesResolver, StudentProcedureProcessesService],
    }).compile();

    resolver = module.get<StudentProcedureProcessesResolver>(StudentProcedureProcessesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
