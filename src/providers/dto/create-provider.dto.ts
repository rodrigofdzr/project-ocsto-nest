import { IsEmail, IsOptional, IsString, MaxLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProviderDto {

  @ApiProperty({
    default: 'Coca-Cola FEMSA'
  })
  @IsString()
  @MaxLength(100)
  providerName: string;

  @ApiProperty({
    default: 'ventas@proveedor.com'
  })
  @IsEmail()
  @IsString()
  providerEmail: string;

  @ApiPropertyOptional({
    default: '4429876543'
  })
  @IsString()
  @IsOptional()
  @MaxLength(15)
  providerPhone: string;
}
