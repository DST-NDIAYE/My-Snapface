import { Router } from '@angular/router';
import { FaceSnapsService } from './../services/face-snaps.service';
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

  constructor( private faceSnapsService : FaceSnapsService , private router: Router ) { }

  ngOnInit(): void {

    this.buttonTextIcone = "bi bi-hand-thumbs-up" ;

    }

    onSnap() {
    if (this.buttonTextIcone === "bi bi-hand-thumbs-up") {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id , "snap") ;
      this.buttonTextIcone = "bi bi-hand-thumbs-down" ;
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonTextIcone = "bi bi-hand-thumbs-up";
    }
  }


  AfficherUnFaceSnape(): void {

    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);

  }


}
