import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../../modules/layout/pages/students/models';

@Pipe({
  name: 'fullName',
  standalone: false,
})
export class FullNamePipe implements PipeTransform {
  transform(value: Student): string {
    return `Nombre y Apellido: ${value.name }, ${value.lastName} `;
  }
}
