import {ArrayNotEmpty, IsArray, IsObject, IsOptional, IsString, MaxLength} from "class-validator";
import { Location } from '../entities/location.entity.js';
import { Region } from '../../regions/entities/region.entity.js';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateLocationDto extends Location {
    @IsString()
    @MaxLength(35)
    locationName: string;
    @IsString()
    @MaxLength(160)
    locationAddress: string;
    @IsArray()
    @ArrayNotEmpty()
    locationLatLong: number[];
    @ApiPropertyOptional({
        default: { regionId: 1 }
    })
    @IsObject()
    @IsOptional()
    region: Region;
}
