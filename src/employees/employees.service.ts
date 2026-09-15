import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto.js';
import { UpdateEmployeeDto } from './dto/update-employee.dto.js';
import { v4 as uuid } from 'uuid';

@Injectable()
export class EmployeesService {
  private employees: CreateEmployeeDto[] = [
    {
      id: uuid(),
      name: 'Alberto',
      lastName: 'Cositas',
      phoneNumber: '4421234567',
    },
    {
      id: uuid(),
      name: 'Jose',
      lastName: 'Perez',
      phoneNumber: '4421249087',
    },
  ];
  create(createEmployeeDto: CreateEmployeeDto) {
    createEmployeeDto.id = uuid();
    this.employees.push(createEmployeeDto);
    return createEmployeeDto;
  }

  findAll() {
    return this.employees;
  }

  findOne(id: string) {
    const employee = this.employees.find((employee) => employee.id === id);
    if (!employee) {
      throw new NotFoundException(`Employee with id ${id} not found`);
    }
    return employee;
  }

  update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    const employeeToUpdate: CreateEmployeeDto = {
      ...this.findOne(id),
      ...updateEmployeeDto,
    };

    this.employees = this.employees.map((employee) => {
      if (employee.id === id) {
        return employeeToUpdate;
      }
      return employee;
    });
    return employeeToUpdate;
  }

  remove(id: string) {
    this.findOne(id);
    this.employees = this.employees.filter((employee) => employee.id !== id);
    return this.employees;
  }
}
