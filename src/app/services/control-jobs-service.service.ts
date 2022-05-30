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

  urlBD:string = "https://controljobs-71468-default-rtdb.europe-west1.firebasedatabase.app/horasExtras";

  //url de la totalidad de los dias especificados
  urlSabado:string = " https://controljobs-71468-default-rtdb.europe-west1.firebasedatabase.app/horasExtras/sabados.json";
  urlDomingo:string = " https://controljobs-71468-default-rtdb.europe-west1.firebasedatabase.app/horasExtras/domingos.json";
  urlDoblaje:string = "https://controljobs-71468-default-rtdb.europe-west1.firebasedatabase.app/horasExtras/doblaje.json";
  urlFestivo:string = "https://controljobs-71468-default-rtdb.europe-west1.firebasedatabase.app/horasExtras/festivos.json";

  //url de dias solos
  urlSabadoSolo:string = " https://controljobs-71468-default-rtdb.europe-west1.firebasedatabase.app/horasExtras/sabados";
  urlDomingoSolo:string = " https://controljobs-71468-default-rtdb.europe-west1.firebasedatabase.app/horasExtras/domingos";

  parametro!:any;

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
//insertarmos sabado
insertarSabado( horasExtras:any){
  let body = JSON.stringify ( horasExtras);

  let headers = new HttpHeaders({
    'Content_Type': 'application/json'
  })
  return this.http.post(this.urlSabado,body,{headers}).pipe(map((res:any)=>{
    console.log(res)
    return res
}))
}
//insertarmos domingo
insertarDomingo( horasExtras:any){
  let body = JSON.stringify ( horasExtras);

  let headers = new HttpHeaders({
    'Content_Type': 'application/json'
  })
  return this.http.post(this.urlDomingo,body,{headers}).pipe(map((res:any)=>{
    console.log(res)
    return res
}))
}
//insertarmos doblaje
insertarDoblaje( horasExtras:any){
  let body = JSON.stringify ( horasExtras);

  let headers = new HttpHeaders({
    'Content_Type': 'application/json'
  })
  return this.http.post(this.urlDoblaje,body,{headers}).pipe(map((res:any)=>{
    console.log(res)
    return res
}))
}
//insertarmos festivo
insertarFestivo( horasExtras:any){
  let body = JSON.stringify ( horasExtras);

  let headers = new HttpHeaders({
    'Content_Type': 'application/json'
  })
  return this.http.post(this.urlFestivo,body,{headers}).pipe(map((res:any)=>{
    console.log(res)
    return res
}))
}

//---Se obtienen la totalidad de los dias
//obtenemos los sabados de la base de datos
getSabados(){
  let url = `${this.urlSabado}`
  return this.http.get(url).pipe(map((res:any)=>res))
}
///obtenemos los domingos de la base de datos
getDomingos(){
  let url = `${this.urlDomingo}`
  return this.http.get(url).pipe(map((res:any)=>res))
}
//obtenemos los doblajes de la base de datos
getDoblajes(){
  let url = `${this.urlDoblaje}`
  return this.http.get(url).pipe(map((res:any)=>res))
}
//obtenemos los festivos de la base de datos
getFestivos(){
  let url = `${this.urlFestivo}`
  return this.http.get(url).pipe(map((res:any)=>res))
}

//--Se obtienen el dia especifico
//obtenemos el sabado especificado
getSabado( key$:string){
  let url = `${this.urlSabadoSolo}/${key$}.json`
  return this.http.get(url).pipe(map((res:any)=>res))
}
//obtenemos el domingo especificado
getDomingo( key$:string ){
  let url = `${this.urlDomingoSolo}/${key$}.json`
  return this.http.get(url).pipe(map((res:any)=>res))
}


//eliminar Sabado
borraSabado( key$:string ){
  let  url=` https://controljobs-71468-default-rtdb.europe-west1.firebasedatabase.app/horasExtras/sabados/${key$}.json`;
  return this.http.delete(url).pipe(map((res:any)=>res))
 }
//eliminar Domingo
borraDomingo( key$:string ){
  let  url=` https://controljobs-71468-default-rtdb.europe-west1.firebasedatabase.app/horasExtras/domingos/${key$}.json`;
  return this.http.delete(url).pipe(map((res:any)=>res))
 }
//eliminar doblaje
borraDoblaje( key$:string ){
  let  url=` https://controljobs-71468-default-rtdb.europe-west1.firebasedatabase.app/horasExtras/doblaje/${key$}.json`;
  return this.http.delete(url).pipe(map((res:any)=>res))
 }
 //eliminar doblaje
borraFestivo( key$:string ){
  let  url=` https://controljobs-71468-default-rtdb.europe-west1.firebasedatabase.app/horasExtras/festivos/${key$}.json`;
  return this.http.delete(url).pipe(map((res:any)=>res))
 }
}

