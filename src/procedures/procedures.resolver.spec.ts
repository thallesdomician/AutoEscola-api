import { Test, TestingModule } from '@nestjs/testing';
import { ProceduresResolver } from './procedures.resolver';
import { ProceduresService } from './procedures.service';

describe('ProceduresResolver', () => {
  let resolver: ProceduresResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProceduresResolver, ProceduresService],
    }).compile();

    resolver = module.get<ProceduresResolver>(ProceduresResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
