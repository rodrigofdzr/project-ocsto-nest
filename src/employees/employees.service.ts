import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto.js';
import { UpdateEmployeeDto } from './dto/update-employee.dto.js';

@Injectable()
export class EmployeesService {
  private employees: CreateEmployeeDto[] = [
    {
      id: 1,
      name: 'Alberto',
      lastName: 'Cositas',
      phoneNumber: '4421234567',
    },
    {
      id: 2,
      name: 'Jose',
      lastName: 'Perez',
      phoneNumber: '4421249087',
    },
  ];
  create(createEmployeeDto: CreateEmployeeDto) {
    createEmployeeDto.id = this.employees.length + 1;
    this.employees.push(createEmployeeDto);
    return createEmployeeDto;
  }

  findAll() {
    return this.employees;
  }

  findOne(id: number) {
    const employee = this.employees.find((employee) => employee.id === id);
    if (!employee) {
      throw new NotFoundException(`Employee with id ${id} not found`);
    }
    return employee;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
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

  remove(id: number) {
    this.employees = this.employees.filter((employee) => employee.id !== id);
    return this.employees;
  }
}
