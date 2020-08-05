import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// Services
// import {BrowserModule} from '@angular/platform-browser';
// import {NgModule} from '@angular/core';
//
// import {AppComponent} from './app.component';
// import {FormsModule} from '@angular/forms';
// import {AppCounterService} from './services/app-counter.service';
// import { CounterComponent } from './counter/counter.component';
//
// @NgModule({
//     declarations: [
//         AppComponent,
//         CounterComponent
//     ],
//     imports: [
//         BrowserModule,
//         FormsModule
//     ],
//     providers: [
//         // AppCounterService
//     ],
//     bootstrap: [AppComponent]
// })
// export class AppModule {
// }

// end pipe
// import {BrowserModule} from '@angular/platform-browser';
// import {NgModule} from '@angular/core';
//
// import {AppComponent} from './app.component';
// import {FormsModule} from '@angular/forms';
// import { FilterPipe } from './pipes/filter.pipe';
//
// @NgModule({
//     declarations: [
//         AppComponent,
//         FilterPipe
//     ],
//     imports: [
//         BrowserModule,
//         FormsModule
//     ],
//     providers: [],
//     bootstrap: [AppComponent]
// })
// export class AppModule {
// }

// Code for pipes
// import {BrowserModule} from '@angular/platform-browser';
// import {NgModule} from '@angular/core';
//
// import {AppComponent} from './app.component';
// import {FormsModule} from '@angular/forms';
// import {MultByPipe} from './pipes/mult-by.pipe';
// import { ExMarksPipe } from './pipes/ex-marks.pipe';
// import { FilterPipe } from './pipes/filter.pipe';
//
// @NgModule({
//     declarations: [
//         AppComponent,
//         MultByPipe,
//         ExMarksPipe,
//         FilterPipe
//     ],
//     imports: [
//         BrowserModule,
//         FormsModule
//     ],
//     providers: [],
//     bootstrap: [AppComponent]
// })
// export class AppModule {
// }


// Code for Directives
//
// import {BrowserModule} from '@angular/platform-browser';
// import {NgModule} from '@angular/core';
//
// import {AppComponent} from './app.component';
// import {FormsModule} from '@angular/forms';
// import {StyleDirective} from './directives/style.directive';
// import { IfnotDirective } from './directives/ifnot.directive';
//
// @NgModule({
//     declarations: [
//         AppComponent,
//         StyleDirective,
//         IfnotDirective
//     ],
//     imports: [
//         BrowserModule,
//         FormsModule
//     ],
//     providers: [],
//     bootstrap: [AppComponent]
// })
// export class AppModule {
// }


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

