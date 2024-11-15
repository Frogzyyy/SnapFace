import { Component, OnInit } from '@angular/core';
import { Facesnap } from '../models/facesnap';
import { FacesnapComponent } from '../facesnap/facesnap.component';
import { FaceSnapService } from '../services/facesnaps.service';

@Component({
  selector: 'app-facesnap-list',
  standalone: true,
  imports: [
    FacesnapComponent
  ],
  templateUrl: './facesnap-list.component.html',
  styleUrl: './facesnap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps !: Facesnap[];

  constructor(private faceSnapsService : FaceSnapService){}

  ngOnInit(): void {
   this.faceSnaps = this.faceSnapsService.getFaceSnaps();
  }
}
