import { Test, TestingModule } from '@nestjs/testing';
import { StudentProcessesResolver } from './student-processes.resolver';
import { StudentProcessesService } from './student-processes.service';

describe('StudentProcessesResolver', () => {
  let resolver: StudentProcessesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentProcessesResolver, StudentProcessesService],
    }).compile();

    resolver = module.get<StudentProcessesResolver>(StudentProcessesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
