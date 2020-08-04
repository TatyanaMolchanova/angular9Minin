import {Injectable} from '@angular/core';

// global scope
@Injectable({
    providedIn: 'root'
})
// @Injectable()
export class AppCounterService {
    // constructor(private newService) {}
    counter = 0;
    increase() {
        this.counter++;
    }
    decrease() {
        this.counter--;
    }
}
