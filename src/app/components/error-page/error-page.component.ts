import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorCode: string = '';
  errorTitle: string = '';
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.errorCode = data['errorCode'];
      this.errorTitle = data['errorTitle'];
      this.errorMessage = data['errorMessage'];
    });
  }

  goBack() {
    this.location.back();
  }
}