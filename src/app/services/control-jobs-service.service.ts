import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ControlJobsServiceService {

  public usuario:any={};

  constructor(
              public auth: AngularFireAuth
  ) {
    this.auth.authState.subscribe(user=>{
      console.log('estado del usuario:',user);
      if(!user){
        return;
      }
      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid
    })
  }

  //fucion predefinida para login
login(proveedor:string) {
  console.log( proveedor )
  this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
}
//funcion predefinida para logout
logout() {
  this.usuario={};
  this.auth.signOut();
}
}

