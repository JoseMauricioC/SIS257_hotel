import { Test, TestingModule } from '@nestjs/testing';
import { TipoHabitacionesController } from './tipo_habitaciones.controller';
import { TipoHabitacionesService } from './tipo_habitaciones.service';

describe('TipoHabitacionesController', () => {
  let controller: TipoHabitacionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoHabitacionesController],
      providers: [TipoHabitacionesService],
    }).compile();

    controller = module.get<TipoHabitacionesController>(TipoHabitacionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
