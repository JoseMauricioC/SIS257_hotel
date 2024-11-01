import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { Empleado } from './entities/empleado.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EmpleadosService {
  constructor(
    @InjectRepository(Empleado)
    private empleadosRepository: Repository<Empleado>,
  ) {}
  // create(createEmpleadoDto: CreateEmpleadoDto) {
  //   return 'This action adds a new empleado';
  // }
  async create(createEmpleadoDto: CreateEmpleadoDto): Promise<Empleado> {
    const existe = await this.empleadosRepository.findOneBy({
      nombre: createEmpleadoDto.nombre.trim(),
      apellido: createEmpleadoDto.apellido.trim(),
      cargo: createEmpleadoDto.cargo.trim(),
      fechaContratacion: createEmpleadoDto.fechaContratacion,

    });

    if (existe) throw new ConflictException('El empleado ya existe');

    const empleado = new Empleado();
    empleado.nombre = createEmpleadoDto.nombre.trim();
    empleado.apellido = createEmpleadoDto.apellido.trim();
    empleado.cargo = createEmpleadoDto.cargo.trim();
    empleado.fechaContratacion = createEmpleadoDto.fechaContratacion;
    return this.empleadosRepository.save(empleado);
  }

  // findAll() {
  //   return `This action returns all empleados`;
  // }
  async findAll(): Promise<Empleado[]> {
    return this.empleadosRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} empleado`;
  // }
  async findOne(id: number): Promise<Empleado> {
    const empleado = await this.empleadosRepository.findOneBy({ id });
    if (!empleado) throw new NotFoundException('El empleado no existe');
    return empleado;
  }

  // update(id: number, updateEmpleadoDto: UpdateEmpleadoDto) {
  //   return `This action updates a #${id} empleado`;
  // }
  async update(
    id: number,
    updateEmpleadoDto: UpdateEmpleadoDto,
  ): Promise<Empleado> {
    const empleado = await this.findOne(id);
    const empleadoUpdate = Object.assign(empleado, updateEmpleadoDto);
    return this.empleadosRepository.save(empleadoUpdate);
  }

  // remove(id: number) {
  //   return `This action removes a #${id} empleado`;
  // }
  async remove(id: number) {
    const empleado = await this.findOne(id);
    return this.empleadosRepository.softRemove(empleado);
  }
}
