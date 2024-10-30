import { Test, TestingModule } from '@nestjs/testing';
import { TipoHabitacionesService } from './tipo_habitaciones.service';

describe('TipoHabitacionesService', () => {
  let service: TipoHabitacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoHabitacionesService],
    }).compile();

    service = module.get<TipoHabitacionesService>(TipoHabitacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
