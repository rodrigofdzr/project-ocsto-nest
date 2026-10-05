import {IsArray, IsString, MaxLength} from "class-validator";
import {Region} from "../entities/region.entity.js";
import {ApiProperty} from "@nestjs/swagger";

export class CreateRegionDto extends Region{
    @ApiProperty({
        default: "Bajío"
    })
    @IsString()
    @MaxLength(100)
    regionName: string;
    @ApiProperty({
        default: ["Querétaro", "Guanajuato"]
    })
    @IsArray()
    regionStates: string[];
}
