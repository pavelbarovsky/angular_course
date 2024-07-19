import { Component, VERSION } from '@angular/core';

interface Books {
  number: number | null;
  name: string | null;
  author: string | null;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  books: Books[] = [
    {
      number: 1,
      name: 'Лес',
      author: 'Мураками',
    },
    {
      number: 2,
      name: 'Дом',
      author: 'Содзи',
    },
  ];

  create_book = {
    number: null,
    name: null,
    author: null,
  };

  createBook() {
    this.books.push({
      number: this.create_book.number,
      name: this.create_book.name,
      author: this.create_book.author,
    });
  }
}
