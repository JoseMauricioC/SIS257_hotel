import { Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn } from "typeorm";

@Entity('roles')
export class Rol {
    @PrimaryGeneratedColumn('identity')
    id: number;
  
    @Column('varchar', { length: 50 })
    nombre_rol: string;
  
    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;
  
    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;
  
    @DeleteDateColumn({ name: 'fecha_eliminacion', select: false })
    fechaEliminacion: Date;
}
