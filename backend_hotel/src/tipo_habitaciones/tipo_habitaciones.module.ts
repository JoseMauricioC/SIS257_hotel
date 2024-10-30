import { Module } from '@nestjs/common';
import { TipoHabitacionesService } from './tipo_habitaciones.service';
import { TipoHabitacionesController } from './tipo_habitaciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoHabitacion } from './entities/tipo_habitacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoHabitacion])],
  controllers: [TipoHabitacionesController],
  providers: [TipoHabitacionesService],
})
export class TipoHabitacionesModule {}
