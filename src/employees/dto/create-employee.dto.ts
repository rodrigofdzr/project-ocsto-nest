import {
  IsEmail,
  IsObject,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import {Employee} from "../entities/employee.entity.js";
import { Location } from "../../location/entities/location.entity.js";
import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";

export class CreateEmployeeDto extends Employee {
    @ApiProperty()
  @IsString()
  @MaxLength(30)
  employeeName: string;

    @ApiProperty()
  @IsString()
  @MaxLength(70)
  employeelastName: string;

    @ApiProperty()
  @IsString()
  @MaxLength(10)
  employeePhoneNumber: string;

    @ApiProperty()
  @IsString()
  @IsEmail()
  employeeEmail: string;

    @ApiPropertyOptional({
        default: { locationId: 1 }
    })
  @IsOptional()
  @IsObject()
  location: Location;
}
