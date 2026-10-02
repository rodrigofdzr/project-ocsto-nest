import {IsEmail, IsString, MaxLength} from "class-validator";
import {User} from "../entities/user.entity.js";

export class CreateUserDto extends User {
    @IsEmail()
    userEmail: string;
    @IsString()
    @MaxLength(8)
    userPassword: string;


}
