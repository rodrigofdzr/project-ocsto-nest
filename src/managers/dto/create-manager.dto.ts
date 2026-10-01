import {Manager} from "src/managers/entities/manager.entity.js";
import {IsEmail, IsNumber, IsString, MaxLength} from "class-validator";

export class CreateManagerDto extends Manager {
    @IsString()
    managerFullName: string;
    @IsString()
    @IsEmail()
    managerEmail: string;
    @IsNumber()
    managerSalary: number;
    @IsString()
    @MaxLength(16)
    managerPhoneNumber: string;
}
