import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription!: Subscription;

  ngOnInit(): void {
    // this.firstObsSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    const customIntervalObservable = new Observable<number>((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);

        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater than 3!'));
        }

        count++;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable.subscribe({
      next: (t) => console.log(t),
      error: (e: Error) => {
        console.log(e);
        alert(e.message);
      },
      complete: () => console.log('Completed!'),
    });
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }
}
