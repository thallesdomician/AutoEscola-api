import { Test, TestingModule } from '@nestjs/testing';
import { StudentProcedureProcessesService } from './student-procedure-processes.service';

describe('StudentProcedureProcessesService', () => {
  let service: StudentProcedureProcessesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentProcedureProcessesService],
    }).compile();

    service = module.get<StudentProcedureProcessesService>(StudentProcedureProcessesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
