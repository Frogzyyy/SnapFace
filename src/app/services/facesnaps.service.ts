import { Injectable } from "@angular/core";
import { Facesnap } from "../models/facesnap";
import { SnapType } from "../models/snap-type.type";

@Injectable({
  providedIn : 'root'
})

export class FaceSnapService{
  private faceSnaps : Facesnap[] = [
    new Facesnap(
      'Archibald',
      'My best friend since forever !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      10
    ),
    new Facesnap(
      'Three Rock Mountain',
      'A wonderful place for hiking.',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      new Date(),
      6
    ).withLocation('Countryside'),
    new Facesnap(
      'A healthy meal !',
      'It\'s sooooo good !',
      'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      new Date(),
      156
    )
  ];

  getFaceSnaps(): Facesnap[]{
    return [...this.faceSnaps];
  }

  getFaceSnapById(faceSnapId:string):Facesnap{
    const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);

    if(!foundFaceSnap){
      throw new Error('FaceSnap not found !');
    }
    return foundFaceSnap;
  }

  snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);

    faceSnap.snap(snapType);
  }
}
