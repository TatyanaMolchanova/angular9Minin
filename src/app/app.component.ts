import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic title';
  number = 42;
  arr = [1, 2, 3];
  obj = { a: 1, b: {c: 2} };
  // example 1
  // img = 'https://ensocore.com/media/61/reactjs-logo-sticker%20%281%29.jpg';
  inputValue = '';
  constructor() {
    // example 1
    // setTimeout(() => {
    //   console.log('Timeout is over');
    //   this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png';
    // }, 5000);
  }
  // onInput(event?: any) {
  onInput(event: KeyboardEvent) {
    console.log('Event', event)
    // this.inputValue = event.target.value;
    this.inputValue = (<HTMLInputElement>event.target).value;
  }
  onBlur(str: string){
    this.inputValue = str;
  }
  onClick() {
    console.log('Click!');
  }
}
