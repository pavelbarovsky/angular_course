import { Component, OnInit } from '@angular/core';
import { GetdataService } from './getdata.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private getDadaServ: GetdataService) {};

  data: object[] = [];

  ngOnInit(): void {
    this.getDadaServ.getTodo().subscribe({
      next: (resp: any) => {
        console.log(resp);
        this.data = resp;
      },
      error: (err: HttpErrorResponse) => {
        console.error('Error:', err.status);
      },
    });
  }
}
