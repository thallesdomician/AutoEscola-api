import { Test, TestingModule } from '@nestjs/testing';
import { StudentProcessesService } from './student-processes.service';

describe('StudentProcessesService', () => {
  let service: StudentProcessesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentProcessesService],
    }).compile();

    service = module.get<StudentProcessesService>(StudentProcessesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
