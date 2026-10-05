import { Manager } from '../entities/manager.entity.js';
import { Location } from '../../location/entities/location.entity.js';
import {
  IsEmail,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateManagerDto extends Manager {
    @ApiProperty({
        default: "Juan Pérez"
    })
    @IsString()
    managerFullName: string;
    @ApiProperty({
        default: "manager@ocso.com"
    })
    @IsString()
    @IsEmail()
    managerEmail: string;
    @ApiProperty({
        default: 25000
    })
    @IsNumber()
    managerSalary: number;
    @ApiProperty({
        default: "4421234567"
    })
    @IsString()
    @MaxLength(16)
    managerPhoneNumber: string;
    @ApiPropertyOptional({
        default: { locationId: 1 }
    })
    @IsObject()
    @IsOptional()
    location: Location;
}
