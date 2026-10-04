import {IsEmail, IsString, MinLength} from "class-validator";

export class LoginUserDto {
    @IsString()
    @IsEmail()
    userEmail: string;
    @IsString()
    @MinLength(7)
    userPassword: string;

}