import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { ItemComponent } from './item/item.component';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    PageComponent,
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    MatTabsModule,
  ]
})
export class PageModule { }
