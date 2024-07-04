import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { DirectPipeComponent } from './direct-pipe/direct-pipe.component';
import { PipeSum5Pipe } from './pipe-sum-5.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    DirectPipeComponent,
    PipeSum5Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
