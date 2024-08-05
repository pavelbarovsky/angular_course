import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AppState } from './store/app.state';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { CatalogComponent } from './components/catalog/catalog.component';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { UsersComponent } from './components/admin-panel/users/users.component';
import { RecipesComponent } from './components/admin-panel/recipes/recipes.component';
import { MainComponent } from './components/main/main.component';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { NotificationComponent } from './components/notification/notification.component';
import { SliderComponent } from './components/main/slider/slider.component';
import { TryitComponent } from './components/main/tryit/tryit.component';
import { BestComponent } from './components/main/best/best.component';

import { AuthService } from './services/auth.service';
import { NotifyService } from './services/notify.service';
import { AdminDataService } from './services/admin-data.service';

import { DateFormatPipe } from './pipe/date-format.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ErrorPageComponent,
    NavbarComponent,
    RegisterComponent,
    AuthorizationComponent,
    AdminPanelComponent,
    CatalogComponent,
    CreateRecipeComponent,
    UsersComponent,
    RecipesComponent,
    MainComponent,
    EditRecipeComponent,
    UserProfileComponent,
    ModalWindowComponent,
    NotificationComponent,
    DateFormatPipe,
    SliderComponent,
    TryitComponent,
    BestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,
    MatIconModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([AppState]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [
    AuthService,
    NotifyService,
    AdminDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
