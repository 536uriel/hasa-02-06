import { Injectable } from '@angular/core';
import {AngularFirestoreCollection, AngularFirestore,} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class DataBaseService {


 

 addImg(img:any){
   this.afs.upload("images/" + localStorage.getItem('user'),img);
 }

  constructor(public afs:AngularFireStorage) {
    
   }
}
