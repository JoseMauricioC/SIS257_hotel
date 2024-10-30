import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateTipoHabitacionDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo tipo es obligatorio' })
    @IsString({ message: 'El campo tipo debe ser de tipo cadena' })
    @MaxLength(30, {
      message: 'El campo tipo no debe ser mayor a 30 caracteres',
    })
    readonly tipo: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo precio es obligatorio' })
    //@IsString({ message: 'El campo precio debe ser de tipo cadena' })
    // @MaxLength(50, {
    //   message: 'El campo nombre no debe ser mayor a 50 caracteres',
    // })
    readonly precio: number;
}
