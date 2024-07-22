import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetdataService } from './getdata.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ChangeDataInterceptor } from './change-data.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    GetdataService, {
      provide: HTTP_INTERCEPTORS,
      useClass: ChangeDataInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
