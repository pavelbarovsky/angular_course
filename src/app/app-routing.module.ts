import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ItemComponent } from './item/item.component';
import { DetailsComponent } from './item/details/details.component';
import { ListComponent } from './item/list/list.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent
  },
  { 
    path: 'contact',
    component: ContactComponent 
  },
  { 
    path: 'about',
    component: AboutComponent 
  },
  {
    path: 'item/:id', 
    component: ItemComponent, 
    children: [
      { 
        path: 'details/:id', 
        component: DetailsComponent 
      },
      { 
        path: 'list', 
        component: ListComponent 
      },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }