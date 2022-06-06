import { Observable } from 'rxjs';
import { FaceSnapsService } from '../core/services/face-snaps.service';
import { FaceSnap } from '../core/models/face-snap.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

 // faceSnaps!: FaceSnap [] ;
  faceSnaps$!: Observable<FaceSnap[]>;



  constructor( private faceSnapsService: FaceSnapsService ) { }

  ngOnInit(): void {

    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps() ;


  }

}
