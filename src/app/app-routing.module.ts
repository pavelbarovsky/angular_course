import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { RecipesComponent } from './components/admin-panel/recipes/recipes.component';
import { UsersComponent } from './components/admin-panel/users/users.component';
import { AppComponent } from './app.component';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { RoleGuard } from './guard_role/role.guard';
import { CatalogComponent } from './components/catalog/catalog.component';
import { MainComponent } from './components/main/main.component';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'create-recipe',
    component: CreateRecipeComponent,
    canActivate: [RoleGuard],
    data: { expectedRole: ['admin', 'user'] }
  },
  {
    path: 'recipes',
    component: CatalogComponent,
  },
  {
    path: 'authorization',
    component: AuthorizationComponent
  },
  {
    path: 'registration',
    component: RegisterComponent
  },
  {
    path: 'admin',
    component: AdminPanelComponent,
    canActivate: [RoleGuard],
    data: { expectedRole: 'admin'},
    children: [
      {
        path: 'users',
        component: UsersComponent, 
      },
      {
        path: 'recipes',
        component: RecipesComponent, 
      },
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: 'access-denied',
    component: ErrorPageComponent,
    data: { 
      errorCode: '401', 
      errorTitle: 'Доступ запрещен', 
      errorMessage: 'У вас нет прав на просмотр этого раздела' 
    },
  },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { 
      errorCode: '404', 
      errorTitle: 'Страница не найдена', 
      errorMessage: 'К сожалению, мы не смогли найти страницу, которую вы ищете' 
    }
  },
  {
    path: '**',
    redirectTo: '/not-found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
