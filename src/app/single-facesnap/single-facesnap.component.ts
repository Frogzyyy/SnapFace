import { Component, OnInit } from '@angular/core';
import { Facesnap } from '../models/facesnap';
import { FaceSnapService } from '../services/facesnaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgClass, NgStyle, UpperCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-single-facesnap',
  standalone: true,
  imports: [
    NgClass,
    NgStyle,
    UpperCasePipe,
    DatePipe,
    RouterLink
  ],
  templateUrl: './single-facesnap.component.html',
  styleUrl: './single-facesnap.component.scss'
})

export class SingleFacesnapComponent implements OnInit{

  faceSnap !: Facesnap;
  snapButtonText !: string;
  userHasSnapped !: boolean;

  constructor(
    private faceSnapService: FaceSnapService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
  }

  private prepareInterface(){
    this.snapButtonText = 'Oh Snap !';
    this.userHasSnapped = false;
  }

  private getFaceSnap(){
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

  unSnap() {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id,'unsnap');
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  snap() {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
  }
}
