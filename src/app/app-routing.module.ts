import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ItemComponent } from './page/item/item.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
  },
  { 
    path: 'page', 
    loadChildren: () => import('./page/page.module').then(m => m.PageModule), 
    component: PageComponent,
  },
  {
    path: 'item',
    component: ItemComponent,
    loadChildren: () => import('./page/item/item.module').then(m => m.ItemModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
