import {IsArray, IsString, MaxLength} from "class-validator";

export class CreateRegionDto extends Region{
    @IsString()
    @MaxLength(100)
    regionName: string;
    @IsArray()
    regionStates: string[];
}
