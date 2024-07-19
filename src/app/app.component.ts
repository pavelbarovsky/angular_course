import { Component } from '@angular/core';
import { ResponseService } from './response.service';
import { Obj } from './interfaces/obj';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstEvoApp';
  
  objects: Obj[] = [];

  constructor(private respServ: ResponseService) {};

  ngOnInit(): void {
    this.objects = this.respServ.getObjects();
  }
}
