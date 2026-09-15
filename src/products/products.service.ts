import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { v4 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const product = this.productRepository.create(createProductDto);
    const savedProduct = this.productRepository.save(product);
    return savedProduct;
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: string) {
    const product = this.productRepository.findOne({
      where: { productId: id },
    });
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }

  findByProvider(providerId: string) {}

  async update(id: string, updateProductDto: UpdateProductDto) {
    const productToUpdate = await this.productRepository.preload({
      productId: id,
      ...updateProductDto,
    });
    if (!productToUpdate) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return this.productRepository.save(productToUpdate);
  }
  remove(id: string) {
    const product = this.findOne(id);
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    this.productRepository.delete({ productId: id });

    return {
      message: `Product with id ${id} has been deleted`,
    };
  }
}
