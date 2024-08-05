import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  private months = [
    'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня',
    'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
  ];

  transform(value: string): string {
    if (!value) return '';

    const date = new Date(value);
    const day = date.getDate();
    const month = this.months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  }

}