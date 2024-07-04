import { Component } from '@angular/core';

@Component({
  selector: 'app-direct-pipe',
  templateUrl: './direct-pipe.component.html',
  styleUrls: ['./direct-pipe.component.css']
})
export class DirectPipeComponent {
  public arr_users = [
    {name: 'Pavel'},
    {name: 'Vladik'},
    {name: 'Evgeniy'},
    {name: 'Alexander'},
    {name: 'Tupac'},
  ];

  public my_date = new Date();

  public num = 15;
}