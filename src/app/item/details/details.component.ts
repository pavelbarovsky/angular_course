import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activeRouter.snapshot.params['id'];
    console.log('Current parameter:', id);
  }
}