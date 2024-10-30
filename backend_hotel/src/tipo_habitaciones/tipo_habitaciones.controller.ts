import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoHabitacionesService } from './tipo_habitaciones.service';
import { CreateTipoHabitacionDto } from './dto/create-tipo_habitacion.dto';
import { UpdateTipoHabitacionDto } from './dto/update-tipo_habitacion.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tipo-habitaciones')
@Controller('tipo-habitaciones')
export class TipoHabitacionesController {
  constructor(private readonly tipoHabitacionesService: TipoHabitacionesService) {}

  @Post()
  create(@Body() createTipoHabitacioneDto: CreateTipoHabitacionDto) {
    return this.tipoHabitacionesService.create(createTipoHabitacioneDto);
  }

  @Get()
  findAll() {
    return this.tipoHabitacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoHabitacionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoHabitacioneDto: UpdateTipoHabitacionDto) {
    return this.tipoHabitacionesService.update(+id, updateTipoHabitacioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoHabitacionesService.remove(+id);
  }
}
