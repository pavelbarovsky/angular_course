import { Component, OnInit } from '@angular/core';
import { BooksService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  constructor(public BookServ: BooksService) {}
}
