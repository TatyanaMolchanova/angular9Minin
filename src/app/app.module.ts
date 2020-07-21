import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {StyleDirective} from './directives/style.directive';
import { Style2Directive } from './style2.directive';

@NgModule({
  declarations: [
      AppComponent,
      StyleDirective,
      Style2Directive
  ],
  imports: [
      BrowserModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


// Code before Directives starts just below
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
//
// import { AppComponent } from './app.component';
// import {FormsModule} from '@angular/forms';
// import { PostComponent } from './post/post.component';
// import { PostFormComponent } from './post-form/post-form.component';
//
//
// @NgModule({
//   declarations: [
//     AppComponent,
//     PostComponent,
//     PostFormComponent,
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

