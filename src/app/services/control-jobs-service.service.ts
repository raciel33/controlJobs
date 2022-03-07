import{map} from 'rxjs/operators'
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { HorasExtras } from '../interface/horas-extras';
import { HttpHeaders,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ControlJobsServiceService {

  public usuario:any={};

  urlBD:string = "https://controljobs-71468-default-rtdb.europe-west1.firebasedatabase.app/horasExtras.json";

  constructor(
              public auth: AngularFireAuth,
              private http:HttpClient
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

//prueba de database
insertar( horasExtras:any){
    let body = JSON.stringify ( horasExtras);

    let headers = new HttpHeaders({
      'Content_Type': 'application/json'
    })
    return this.http.post(this.urlBD,body,{headers}).pipe(map((res:any)=>{
      console.log(res)
      return res
  }))
}

}

