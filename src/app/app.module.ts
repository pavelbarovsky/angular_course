import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PurpleBtnComponent } from './components/purple-btn/purple-btn.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AppState } from './store/app.state';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { UsersComponent } from './components/users/users.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ErrorPageComponent,
    NavbarComponent,
    PurpleBtnComponent,
    RegisterComponent,
    AuthorizationComponent,
    AdminPanelComponent,
    CatalogComponent,
    CreateRecipeComponent,
    UsersComponent,
    RecipesComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    MatIconModule,
    NgxsModule.forRoot([AppState]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
