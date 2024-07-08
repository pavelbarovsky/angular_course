import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  constructor(private activeRouter: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.activeRouter.snapshot.params);
    console.log(this.activeRouter.snapshot.queryParams);
  }
}
