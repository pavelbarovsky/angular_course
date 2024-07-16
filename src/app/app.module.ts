import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibappComponent } from './libapp/libapp.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    LibappComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
