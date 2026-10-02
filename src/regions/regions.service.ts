import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto.js';
import { UpdateRegionDto } from './dto/update-region.dto.js';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import { Region } from './entities/region.entity.js';

@Injectable()
export class RegionsService {
    constructor (
        @InjectRepository(Region)
        private regionRepository: Repository<Region>
    ){}
  create(createRegionDto: CreateRegionDto) {
    return this.regionRepository.save(createRegionDto);
  }

  findAll() {
    return this.regionRepository.find();
  }

  async findOne(id: number) {
    const region = await this.regionRepository.findOneBy({
        regionId: id,
    })
      if (!region) throw new NotFoundException("No region found.");
    return region;
  }

  async update(id: number, updateRegionDto: UpdateRegionDto) {
        const regionToUpdate = await this.regionRepository.preload({
            regionId: id,
            ...updateRegionDto,
        });
        if (!regionToUpdate) throw new NotFoundException("No region found.");
        return this.regionRepository.save(regionToUpdate);
  }

  remove(id: number) {
    return this.regionRepository.delete({
      regionId: id,
    });
  }
}
