import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsDefined, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateEmpleadoDto {    
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo nombre es obligatorio' })
    @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
    @MaxLength(50, {
      message: 'El campo nombre no debe ser mayor a 50 caracteres',
    })
    readonly nombre: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo apellido es obligatorio' })
    @IsString({ message: 'El campo apellido debe ser de tipo cadena' })
    @MaxLength(50, {
      message: 'El campo apellido no debe ser mayor a 50 caracteres',
    })
    readonly apellido: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo apellido es obligatorio' })
    @IsString({ message: 'El campo apellido debe ser de tipo cadena' })
    @MaxLength(50, {
      message: 'El campo apellido no debe ser mayor a 50 caracteres',
    })
    readonly cargo: string;

    @ApiProperty()
    @IsDefined({ message: 'El campo fechaContratacion debe estar definido' })
    @IsDateString(
      {},
      { message: 'El campo fechaContratacion debe ser de tipo fecha' },
    )
    readonly fechaContratacion: Date;
}
