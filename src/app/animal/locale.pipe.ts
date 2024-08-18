import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statuslocale',
})
export class LocalePipe implements PipeTransform {
  transform(status: string): string {
    switch (status.toLowerCase()) {
      case 'endangered':
        return 'ko on roi';
      case 'vulnerable':
        return 'oh no';
      case 'near threatened':
        return 'co nguy co';
      case 'least concern':
        return 'song tot';
      default:
        return 'chill';
    }
  }
}
