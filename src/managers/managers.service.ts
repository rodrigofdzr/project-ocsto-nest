import { Injectable } from '@nestjs/common';
import { CreateManagerDto } from './dto/create-manager.dto.js';
import { UpdateManagerDto } from './dto/update-manager.dto.js';
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class ManagersService {
    constructor(
        @InjectRepository(Manager)
        private managerRepository: Repository<Manager>
    ) {}

  create(createManagerDto: CreateManagerDto) {
    return this.managerRepository.save(createManagerDto);
  }

  findAll() {
    return this.managerRepository.find();
  }

  findOne(id: number) {
    const manager = this.managerRepository.findOneBy({
        managerId: id,
    });
    if (!manager) {
        throw new Error(`Manager with ID ${id} not found`);
    }
  }

  update(id: number, updateManagerDto: UpdateManagerDto) {
    const managerToUpdate = this.managerRepository.preload({
        managerId: id,
        ...updateManagerDto,
    }
    );
    if (!managerToUpdate) {
        throw new Error(`Manager with ID ${id} not found`);
    }
    return this.managerRepository.save(managerToUpdate);
  }

  remove(id: number) {
    return this.managerRepository.delete({
        managerId: id,
    });
  }
}
