import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PrefetchResolver } from './prefetch.resolver';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  {
    path: 'second',
    component: SecondComponent,
    resolve: [PrefetchResolver],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
