import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers: number[] = [];
  randomNumbers: string[] = [];
  numbersSubscription$: Subscription | null = null; // здесь так чтобы можно было возобновить поток
  randomNumbersSubscription$: Subscription | null = null; // здесь так чтобы можно было возобновить поток

  constructor() {
    this.enableNumbersStream();
    this.enableRandomNumbersStream();
  }

  enableNumbersStream() {
    if (!this.numbersSubscription$) {
      const numbersObservable$ = interval(2000);
      this.numbersSubscription$ = numbersObservable$
        .subscribe(num => {this.numbers = [...this.numbers, num];
      });
    }
  }

  enableRandomNumbersStream() {
    if (!this.randomNumbersSubscription$) {
      const randomNumbersObservable$ = interval(2000).pipe(
        map(() => `Random Value: ${Math.floor(Math.random() * 501)}`)
      );
      this.randomNumbersSubscription$ = randomNumbersObservable$
        .subscribe(num => {this.randomNumbers = [...this.randomNumbers, num];
      });
    }
  }

  disableNumbersStream() {
    if (this.numbersSubscription$) {
      this.numbersSubscription$.unsubscribe();
      this.numbersSubscription$ = null;
    }
  }

  disableRandomNumbersStream() {
    if (this.randomNumbersSubscription$) {
      this.randomNumbersSubscription$.unsubscribe();
      this.randomNumbersSubscription$ = null;
    }
  }
}
