import {Injectable} from '@angular/core';
import {LogService} from './log.service';

// global scope
@Injectable({
    providedIn: 'root'
})
// @Injectable()
export class AppCounterService {
    // constructor(private newService) {}
    counter = 0;

    constructor(private logService: LogService) {
    }

    increase() {
        this.logService.log('increase counter...')
        this.counter++;
    }
    decrease() {
        this.logService.log('decrese counter...')
        this.counter--;
    }
}
