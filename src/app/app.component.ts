import { FaceSnap } from './core/models/face-snap.model';
import { Component, OnInit } from '@angular/core';
import { interval, Observable, map, filter, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // interval$!: Observable<string>;

  ngOnInit(): void {
    // this.interval$ = interval(1000).pipe(
    //   filter((val) => val % 3 == 0),
    //   map((valeur) => {
    //     if (valeur % 2 == 0) {
    //       return `Je suis ${valeur} et je suis pair`;
    //     } else {
    //       return '';
    //     }
    //   }) ,
    //   tap( texte => this.AfficherCOnsol(texte)  )
    // );

  }

  AfficherCOnsol(text: string): void {
    console.log(` la valeur retouner est  : ${text}`);
}

}
