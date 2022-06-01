import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NotPurePipeModule } from 'src/app/pipes/not-pure.pipe';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotPurePipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
