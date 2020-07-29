import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise Resolved');
    }, 4000);
  });
  date$: Observable<Date> = new Observable(obs => {
   setInterval( () => {
     obs.next(new Date());
   }, 1000);
  });
  date: Date;
  ngOnInit(): void {
    this.date$.subscribe(date => {
      this.date = date;
    });
  }
}

// with async pipe
// export class AppComponent {
//   p: Promise<string> = new Promise<string>(resolve => {
//     setTimeout(() => {
//       resolve('Promise Resolved');
//     }, 4000);
//   });
//   date: Observable<Date> = new Observable(obs => {
//     setInterval( () => {
//       obs.next(new Date());
//     }, 1000);
//   });
// }


// pipe ||
// import {Component} from '@angular/core';
//
// export interface Post {
//   title: string;
//   text: string;
// }
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   search = '';
//   searchField = 'title';
//   posts: Post[] = [
//     {title: 'Beer', text: 'The best beer in the world'},
//     {title: 'Bread', text: 'The best bread in the world'},
//     {title: 'Javascript', text: 'The best language in the world'},
//   ];
//
//   addPost() {
//     this.posts.unshift({
//       title: 'Angular 8',
//       text: 'Vladilen teacher'
//     });
//   }
// }


// Pipes
// import {Component} from '@angular/core';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   e: number = Math.E;
//   str = 'hello world';
//   date: Date = new Date();
//   float = 0.42;
//   obj = {
//     a: 1,
//     b: {
//       c: 2,
//       d: {
//         e: 3,
//         f: 4
//       }
//     }
//   };
// }



// Code for Directives
// import {Component} from '@angular/core';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   isVisible = true;
// }



// Code before Directives starts just below
// import {Component, OnInit} from '@angular/core';
//
// export interface Post {
//   title: string;
//   text: string;
//   id?: number;
// }
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent implements OnInit {
//   posts: Post[] = [
//     {title: 'Хочу выучить Angular', text: 'Я смогу выучить JS', id: 1},
//     {title: 'Я постараюсь научиться писать код на Angular', text: 'И других фреймворках', id: 2}
//   ];
//
//   ngOnInit(): void {
//     setTimeout( () => {
//       console.log('Timeout');
//       // this.posts[0].title = 'Changed!';
//       this.posts[0] = {
//         title: 'changed',
//         text: 'changed2',
//         id: 33
//       };
//     }, 5000);
//   }
//
//   updatePosts(post: Post) {
//     this.posts.unshift(post);
//   }
//   removePost(id: number) {
//     console.log('Id to remove', id);
//     this.posts = this.posts.filter(p => p.id !== id);
//   }
//   // 8  =====================
//   // now: Date = new Date();
//   // 7  =====================
//   // arr = [1, 1, 2, 3, 5, 8, 13];
//   // objs = [
//   //   {title: 'Post 1', author: 'Vladilen', comments: [
//   //       {name: 'Max', text: 'lorem 1'},
//   //       {name: 'Max', text: 'lorem 2'},
//   //       {name: 'Max', text: 'lorem 3'},
//   //     ]},
//   //   {title: 'Post 2', author: 'Vladilen 2', comments: [
//   //       {name: 'Max 2', text: 'lorem 1'},
//   //       {name: 'Max 2', text: 'lorem 2'},
//   //       {name: 'Max 2', text: 'lorem 3'},
//   //     ]}
//   // ];
//   // 6  =====================
//   // toggle: any = false;
//   // 5  =====================
//   // toggle = false;
//   // 3, 4  =====================
//   // backgroundToggle = false;
//   // 2 =====================
//   // title = 'Initial';
//   // onInput(event: any) {
//   //   this.title = event.target.value;
//   // }
//   // =====================
//   // title = 'Dynamic title';
//   // number = 42;
//   // arr = [1, 2, 3];
//   // obj = { a: 1, b: {c: 2} };
//   // // example 1
//   // // example 1
//   // // img = 'https://ensocore.com/media/61/reactjs-logo-sticker%20%281%29.jpg';
//   // inputValue = '';
//   // constructor() {
//   //   // example 1
//   //   // setTimeout(() => {
//   //   //   console.log('Timeout is over');
//   // //   this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png';
//   //   // }, 5000);
//   // }
//   // // onInput(event?: any) {
//   // onInput(event: KeyboardEvent) {
//   //   console.log('Event', event)
//   //   // this.inputValue = event.target.value;
//   //   this.inputValue = (<HTMLInputElement>event.target).value;
//   // }
//   // onBlur(str: string){
//   //   this.inputValue = str;
//   // }
//   // onClick() {
//   //   console.log('Click!');
//   // }
//   // =====================
// }
