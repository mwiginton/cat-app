import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CatPictureModule } from './pages/cat-picture/cat-picture.module';
import { AppRoutingModule } from './app-routing.module';
import {NoCacheHeadersInterceptor} from './httpinterceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CatPictureModule,
    HttpClientModule,
    MatButtonModule
  ],
  // providers: [{
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: NoCacheHeadersInterceptor,
  //   multi: true
  //   },
  // ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
