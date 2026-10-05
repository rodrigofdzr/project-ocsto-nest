import {
  IsNumber,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  IsObject,
} from 'class-validator';
import { Provider } from '../../providers/entities/provider.entity.js';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiPropertyOptional({
    default: '6f1c2a3b-4d5e-4f60-8a7b-9c0d1e2f3a4b'
  })
  @IsString()
  @IsUUID('4')
  @IsOptional()
  productId: string;
  @ApiProperty({
    default: 'Coca-Cola 600ml'
  })
  @IsString()
  @MaxLength(40)
  productName: string;
  @ApiProperty({
    default: 18.5
  })
  @IsNumber()
  price: number;
  @ApiProperty({
    default: 24
  })
  @IsInt()
  countSeal: number;
  @ApiProperty({
    default: { providerId: '393c6caa-de1b-46c7-81fa-403525918e91' }
  })
  @IsObject()
  provider: Provider;
}
