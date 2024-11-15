import { Facesnap } from './../models/facesnap';
import { Component, Input, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { FaceSnapService } from '../services/facesnaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facesnap',
  standalone: true,
  imports: [
    UpperCasePipe
  ],
  templateUrl: './facesnap.component.html',
  styleUrl: './facesnap.component.scss'
})
export class FacesnapComponent implements OnInit{

  @Input() faceSnap !: Facesnap;

  snapButtonText : string = 'Oh Snap !';
  userHasSnapped = false;

  constructor(
    private faceSnapsService : FaceSnapService,
    private router:Router
  ){}

  ngOnInit(): void {

  }

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
