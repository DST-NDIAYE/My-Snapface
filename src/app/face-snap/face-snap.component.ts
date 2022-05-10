import { FaceSnap } from './../models/face-snap.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap ;
  buttonTextIcone!: string;

  constructor() { }

  ngOnInit(): void {

    this.buttonTextIcone = "bi bi-hand-thumbs-up" ;

    }


  onSnap() {
    if (this.buttonTextIcone === "bi bi-hand-thumbs-up") {
      this.faceSnap.snaps++;
      this.buttonTextIcone = "bi bi-hand-thumbs-down" ;
    } else {
      this.faceSnap.snaps--;
      this.buttonTextIcone = "bi bi-hand-thumbs-up";
    }
  }

}
