import {ArrayNotEmpty, IsArray, IsString, MaxLength} from "class-validator";

imports Location from '../entities/location.entity.js';

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
}
