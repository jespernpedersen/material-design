import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'swear'})

export class SwearPipe implements PipeTransform {
    transform(value: string): string{
        return value.replace("fuck", "***")
    }  
}