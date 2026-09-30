import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto.js';
import { UpdateLocationDto } from './dto/update-location.dto.js';
import {Repository} from "typeorm";

@Injectable()
export class LocationService {
    constructor(
        private locationRepository: Repository<Location>,
    ) {}
  create(createLocationDto: CreateLocationDto) {
    return this.locationRepository.save(createLocationDto);
  }

  findAll() {
    return this.locationRepository.find();
  }

  findOne(id: number) {
    const location = this.locationRepository.findOneBy({
        locationId: id,
    });
    if (!location) {
        throw new Error(`Location with ID ${id} not found`);
    }
  }

  update(id: number, updateLocationDto: UpdateLocationDto) {
    const location = this.locationRepository.preload({
        locationId: id,
        ...updateLocationDto,
    });
    if (!location) {
        throw new Error(`Location with ID ${id} not found`);
    }
    return this.locationRepository.save(location);
  }

  remove(id: number) {
    return this.locationRepository.delete(
        { locationId: id }
    );
  }
}
