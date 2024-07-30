import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-purple-btn',
  templateUrl: './purple-btn.component.html',
  styleUrls: ['./purple-btn.component.css']
})
export class PurpleBtnComponent {
  @Input() btnText!: string;
}
