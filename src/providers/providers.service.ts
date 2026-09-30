import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProviderDto } from './dto/create-provider.dto.js';
import { UpdateProviderDto } from './dto/update-provider.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Provider } from './entities/provider.entity.js';

@Injectable()
export class ProvidersService {

  constructor(
    @InjectRepository(Provider)
    private providersRepository: Repository<Provider>,
  ){}

  create(createProviderDto: CreateProviderDto) {
    return this.providersRepository.save(createProviderDto);
  }

  findAll() {
    return this.providersRepository.find();
  }

  async findOne(id: string) {
    const provider = await this.providersRepository.findOneBy({ providerId: id });
    if (!provider) {
      throw new NotFoundException(`Provider with id ${id} not found`);
    }
    return provider;
  }

  async update(id: string, updateProviderDto: UpdateProviderDto) {
    const provider = await this.providersRepository.preload({
      providerId: id,
      ...updateProviderDto,
    });
    if (!provider) {
      throw new NotFoundException(`Provider with id ${id} not found`);
    }
    return this.providersRepository.save(provider);
  }

  async remove(id: string) {
    await this.providersRepository.delete({ providerId: id });
    return { message: `Provider with id ${id} has been deleted` };
  }

  async findOneByName(name: string) {
    const provider = await this.providersRepository.findBy({
        providerName: Like(`%${name}%`) });

    if (!provider) {
      throw new NotFoundException(`Provider with name ${name} not found`);
    }
    return provider;
  }
}
