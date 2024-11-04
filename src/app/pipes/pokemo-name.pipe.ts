import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemoName',
  standalone: true
})
export class PokemoNamePipe implements PipeTransform {
  transform(value: string | undefined): string | null {
    if (!value) return null; // Maneja caso de valores indefinidos

    // Convertir a mayúsculas y reemplazar 'a' o 'A' por 'x'
    return value.toUpperCase().replace(/A/g, 'x').replace(/a/g, 'x');
  }
}
