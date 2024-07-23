import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { AuthService } from './auth.service';
import { AccesGuard } from './acces.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivateChild: [AccesGuard],
    children: [
      {
        path: ':id',
        component: ProfileComponent,
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
