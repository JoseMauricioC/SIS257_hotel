import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('clientes')
export class Cliente {
    @PrimaryGeneratedColumn('identity')
    id: number;
  
    @Column('varchar', { length: 50 })
    nombre: string;

    @Column('varchar', { length: 50 })
    apellido: string;

    @Column('varchar', { length: 50 })
    direccion: string;

    @Column('varchar', { length: 20 })
    telefono: string;

    @Column('varchar', { length: 50 })
    correo: string;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;
  
    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;
  
    @DeleteDateColumn({ name: 'fecha_eliminacion', select: false })
    fechaEliminacion: Date;
}
