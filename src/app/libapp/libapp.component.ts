import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-libapp',
  templateUrl: './libapp.component.html',
  styleUrls: ['./libapp.component.css']
})
export class LibappComponent implements OnInit {
  items: number[] = [];
  sorted: number[] = [];

  constructor() {
    this.items = [1, 15, 5, -15, 55, -155, -5, 10, 11, 115];
  }

  ngOnInit(): void {
    this.sorted = _.sortBy(this.items);
  }

  reverseArray(): void {
    this.sorted = _.reverse([...this.sorted]); // Используйте копию массива для реверса
  }
}
