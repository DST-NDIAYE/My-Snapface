import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from './../models/face-snap.model';
import { FaceSnapsService } from './../services/face-snaps.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap ;
  buttonTextIcone!: string;

  constructor( private faceSnapsService : FaceSnapsService , private route :  ActivatedRoute ) { }

  ngOnInit(): void {

    this.buttonTextIcone = "bi bi-hand-thumbs-up" ;
    const snapId = +this.route.snapshot.params['id'];
   this.faceSnap =  this.faceSnapsService.getFaceSnapById(snapId) ;

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

}
