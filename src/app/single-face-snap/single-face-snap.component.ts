import { Observable, tap } from 'rxjs';
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
  facesnap$!: Observable<FaceSnap>;

  constructor( private faceSnapsService : FaceSnapsService , private route :  ActivatedRoute ) { }

  ngOnInit(): void {

    this.buttonTextIcone = "bi bi-hand-thumbs-up" ;
    const snapId = +this.route.snapshot.params['id'];
   this.facesnap$ =  this.faceSnapsService.getFaceSnapById(snapId) ;

    }



  onSnap(faceSnapId: number) {
    if (this.buttonTextIcone === "bi bi-hand-thumbs-up") {
        this.facesnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
            tap(() => this.buttonTextIcone = "bi bi-hand-thumbs-down")
        );
    } else {
        this.facesnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
            tap(() => this.buttonTextIcone = "bi bi-hand-thumbs-up")
        );
    }
}






}
