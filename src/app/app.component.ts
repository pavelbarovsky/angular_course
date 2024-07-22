import {
  Component,
  ComponentRef,
  TemplateRef,
  VERSION,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DynamicComponent } from './dynamic/dynamic.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('dynamicComp', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<DynamicComponent>;

  addComponent() {
    this.viewRef.clear();
    this.componentRef = this.viewRef.createComponent(DynamicComponent);
  }
  deleteComponent() {
    this.viewRef.clear();
  }
}
