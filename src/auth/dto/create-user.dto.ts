import {
  IsEmail,
  IsIn,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import {User} from "../entities/user.entity.js";
import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto extends User {
    @ApiProperty({
        default: "user@gmail.com"
    })
    @IsEmail()
    userEmail: string;

    @ApiProperty({
        default: "password123"
    })
    @IsString()
    @MaxLength(8)
    userPassword: string;

    @ApiProperty({
        default: "Employee"
    })
    @IsOptional()
    @IsIn(["Admin", "Manager", "Employee"])
    userRoles: string[];


}
