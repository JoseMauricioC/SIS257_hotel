import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTipoHabitacionDto } from './dto/create-tipo_habitacion.dto';
import { UpdateTipoHabitacionDto } from './dto/update-tipo_habitacion.dto';
import { TipoHabitacion } from './entities/tipo_habitacion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TipoHabitacionesService {
  constructor(
    @InjectRepository(TipoHabitacion)
    private tipoHabitacionesRepository: Repository<TipoHabitacion>,
  ) {}
  // create(createTipoHabitacioneDto: CreateTipoHabitacionDto) {
  //   return 'This action adds a new tipoHabitacione';
  // }
  async create(createTipoHabitacioneDto: CreateTipoHabitacionDto): Promise<TipoHabitacion> {
    const existe = await this.tipoHabitacionesRepository.findOneBy({
      tipo: createTipoHabitacioneDto.tipo.trim(),
      precio: createTipoHabitacioneDto.precio,
    });

    if (existe) throw new ConflictException('El tipo de habitacion ya existe');

    const tipoHabitacion = new TipoHabitacion();
    tipoHabitacion.tipo = createTipoHabitacioneDto.tipo.trim();
    tipoHabitacion.precio = createTipoHabitacioneDto.precio;
    return this.tipoHabitacionesRepository.save(tipoHabitacion);
  }

  // findAll() {
  //   return `This action returns all tipoHabitaciones`;
  // }
  async findAll(): Promise<TipoHabitacion[]> {
    return this.tipoHabitacionesRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} tipoHabitacione`;
  // }
  async findOne(id: number): Promise<TipoHabitacion> {
    const tipoHabitacion = await this.tipoHabitacionesRepository.findOneBy({ id });
    if (!tipoHabitacion) throw new NotFoundException('El tipo de habitacion no existe');
    return tipoHabitacion;
  }

  // update(id: number, updateTipoHabitacioneDto: UpdateTipoHabitacionDto) {
  //   return `This action updates a #${id} tipoHabitacione`;
  // }
  async update(
    id: number,
    updateTipoHabitacioneDto: UpdateTipoHabitacionDto,
  ): Promise<TipoHabitacion> {
    const tipoHabitacion = await this.findOne(id);
    const tipoHabitacionUpdate = Object.assign(tipoHabitacion, updateTipoHabitacioneDto);
    return this.tipoHabitacionesRepository.save(tipoHabitacionUpdate);
  }

  // remove(id: number) {
  //   return `This action removes a #${id} tipoHabitacione`;
  // }
  async remove(id: number) {
    const tipoHabitacion = await this.findOne(id);
    return this.tipoHabitacionesRepository.softRemove(tipoHabitacion);
  }
}
