import { Test, TestingModule } from '@nestjs/testing';
import { ProcessesResolver } from './processes.resolver';
import { ProcessesService } from './processes.service';

describe('ProcessesResolver', () => {
  let resolver: ProcessesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProcessesResolver, ProcessesService],
    }).compile();

    resolver = module.get<ProcessesResolver>(ProcessesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
