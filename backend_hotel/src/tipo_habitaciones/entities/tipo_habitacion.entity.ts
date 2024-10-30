import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('tipo_habitacion')
export class TipoHabitacion {

@PrimaryGeneratedColumn('identity')
id: number;

@Column('varchar', { length: 30 })
tipo: string;

//@Column({ type: 'decimal', precision: 10, scale: 2 })
@Column('decimal', { precision: 10, scale: 2 })
precio: number;

@CreateDateColumn({ name: 'fecha_creacion' })
fechaCreacion: Date;

@UpdateDateColumn({ name: 'fecha_modificacion' })
fechaModificacion: Date;

@DeleteDateColumn({ name: 'fecha_eliminacion', select: false })
fechaEliminacion: Date;

}
