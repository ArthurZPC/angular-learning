import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, map, Observable, Subscription } from 'rxjs';

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
      const id = setInterval(() => {
        observer.next(count);

        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater than 3!'));
        }

        count++;
      }, 1000);

      return () => {
        clearInterval(id);
        console.log('Interval cleared!');
      };
    });

    const roundObservable = customIntervalObservable.pipe(
      filter((x) => x > 0),
      map((x) => `Round: ${x + 1}`)
    );

    this.firstObsSubscription = roundObservable.subscribe({
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
