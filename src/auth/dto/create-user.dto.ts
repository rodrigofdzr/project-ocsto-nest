import {
  IsEmail,
  IsIn,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import {User} from "../entities/user.entity.js";

export class CreateUserDto extends User {
    @IsEmail()
    userEmail: string;
    @IsString()
    @MaxLength(8)
    userPassword: string;
    @IsOptional()
    @IsIn(["Admin", "Manager", "Employee"])
    userRoles: string[];


}
