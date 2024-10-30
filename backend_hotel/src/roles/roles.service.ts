import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rol } from './entities/rol.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Rol)
    private rolesRepository: Repository<Rol>,
  ) {}
  // create(createRoleDto: CreateRolDto) {
  //   return 'This action adds a new role';
  // }
  async create(createRoleDto: CreateRolDto): Promise<Rol> {
    const existe = await this.rolesRepository.findOneBy({
      nombre_rol: createRoleDto.nombre_rol.trim(),
    });

    if (existe) throw new ConflictException('El rol ya existe');

    const rol = new Rol();
    rol.nombre_rol = createRoleDto.nombre_rol.trim();
    return this.rolesRepository.save(rol);
  }

  // findAll() {
  //   return `This action returns all roles`;
  // }
  async findAll(): Promise<Rol[]> {
    return this.rolesRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} role`;
  // }
  async findOne(id: number): Promise<Rol> {
    const rol = await this.rolesRepository.findOneBy({ id });
    if (!rol) throw new NotFoundException('El rol no existe');
    return rol;
  }

  // update(id: number, updateRoleDto: UpdateRolDto) {
  //   return `This action updates a #${id} role`;
  // }
  async update(
    id: number,
    updateRoleDto: UpdateRolDto,
  ): Promise<Rol> {
    const rol = await this.findOne(id);
    const rolUpdate = Object.assign(rol, updateRoleDto);
    return this.rolesRepository.save(rolUpdate);
  }

  // remove(id: number) {
  //   return `This action removes a #${id} role`;
  // }
  async remove(id: number) {
    const rol = await this.findOne(id);
    return this.rolesRepository.softRemove(rol);
  }
}
