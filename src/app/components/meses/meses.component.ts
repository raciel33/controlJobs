import { Component, Input, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ControlJobsServiceService } from '../../services/control-jobs-service.service';
import { Observable } from 'rxjs';
import { observeOn } from 'rxjs/operators';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-meses',
  templateUrl: './meses.component.html',
  styleUrls: ['./meses.component.css']
})
export class MesesComponent implements OnInit {
  noche:boolean = false ;
  hora:Date = new Date();

 @Input() id :string;

  todosSabados:any[]  ;
  todosDomingos:any[]  ;
  todosDoblajes:any[]  ;
  todosFestivos:any[]  ;

  precioSabado = 60;
  precioDomingo = 100;
  precioDoblaje = 50;
  precioFestivo = 100;

  sabado: number = 0;
  domingo: number = 0;
  doblaje: number = 0;
  festivo: number = 0;

  fechasBD:any;
  miVar:any[] =[];

totalSabado:number;
totalDomingo:number;
totalDoblaje:number;
totalFestivo:number;
totalMes:number = 0;


  constructor(
    private _activatedRoute:ActivatedRoute,
    private router:Router,
    private _controlService: ControlJobsServiceService,
  ) {



        //con esto captamos los parametros de la url:
        this._activatedRoute.params.subscribe( param=>{
          this.id = param ['id'];

       })


   }



  ngOnInit(): void {

//si el parametro es enero
if ( this.id == 'enero'){

  this._controlService.getSabados().subscribe( data =>{
    this.todosSabados = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
    const memberArray = Object.values(this.todosSabados);
    //recorremos el Array ( vienen en el las fechas en un string)
      for (let index = 0; index < memberArray.length; index++) {

            this.fechasBD = memberArray[index];
            let mes = this.fechasBD.substr(5,2);//almacenamos el mes

            if (mes == '01') {
               this.sabado ++
            }
}
//el totalSabados seran la cantidad de sabados por el precio establecido
this.totalSabado = this.sabado * this.precioSabado

//incrementamos el total del mes
this.totalMes += this.totalSabado

})
this._controlService.getDomingos().subscribe( data =>{
this.todosDomingos = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosDomingos);
//recorremos el Array ( vienen en el las fechas en un string)
 for (let index = 0; index < memberArray.length; index++) {

       this.fechasBD = memberArray[index];
       let mes = this.fechasBD.substr(5,2);//almacenamos el mes

       if (mes == '01') {
          this.domingo ++
       }
}
this.totalDomingo = this.domingo * this.precioDomingo

this.totalMes += this.totalDomingo  //incrementamos el total del mes

})
this._controlService.getDoblajes().subscribe( data =>{
this.todosDoblajes = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosDoblajes);
//recorremos el Array ( vienen en el las fechas en un string)
for (let index = 0; index < memberArray.length; index++) {

 this.fechasBD = memberArray[index];
 let mes = this.fechasBD.substr(5,2);//almacenamos el mes

 if (mes == '01') {
    this.doblaje ++
 }
}
this.totalDoblaje = this.doblaje * this.precioDoblaje
this.totalMes += this.totalDoblaje  //incrementamos el total del mes

})
this._controlService.getFestivos().subscribe( data =>{
this.todosFestivos = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosFestivos);
//recorremos el Array ( vienen en el las fechas en un string)
for (let index = 0; index < memberArray.length; index++) {

 this.fechasBD = memberArray[index];
 let mes = this.fechasBD.substr(5,2);//almacenamos el mes

 if (mes == '01') {
    this.festivo ++
 }
}
this.totalFestivo = this.festivo * this.precioFestivo

this.totalMes += this.totalFestivo  //incrementamos el total del mes




})

}
//si el parametro es febrero
else if ( this.id == 'febrero'){

  this._controlService.getSabados().subscribe( data =>{

    this.todosSabados = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
    const memberArray = Object.values(this.todosSabados);
    //recorremos el Array ( vienen en el las fechas en un string)
      for (let index = 0; index < memberArray.length; index++) {

            this.fechasBD = memberArray[index];
            let mes = this.fechasBD.substr(5,2);//almacenamos el mes

            if (mes == '02') {
               this.sabado ++
            }
}
//el totalSabados seran la cantidad de sabados por el precio establecido
this.totalSabado = this.sabado * this.precioSabado

//incrementamos el total del mes
this.totalMes += this.totalSabado
})
this._controlService.getDomingos().subscribe( data =>{
this.todosDomingos = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosDomingos);
//recorremos el Array ( vienen en el las fechas en un string)
 for (let index = 0; index < memberArray.length; index++) {

       this.fechasBD = memberArray[index];
       let mes = this.fechasBD.substr(5,2);//almacenamos el mes

       if (mes == '02') {
          this.domingo ++
       }
}
this.totalDomingo = this.domingo * this.precioDomingo

this.totalMes += this.totalDomingo  //incrementamos el total del mes

})
this._controlService.getDoblajes().subscribe( data =>{
this.todosDoblajes = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosDoblajes);
//recorremos el Array ( vienen en el las fechas en un string)
for (let index = 0; index < memberArray.length; index++) {

 this.fechasBD = memberArray[index];
 let mes = this.fechasBD.substr(5,2);//almacenamos el mes

 if (mes == '02') {
    this.doblaje ++
 }
}
this.totalDoblaje = this.doblaje * this.precioDoblaje
this.totalMes += this.totalDoblaje  //incrementamos el total del mes

})
this._controlService.getFestivos().subscribe( data =>{
this.todosFestivos = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosFestivos);
//recorremos el Array ( vienen en el las fechas en un string)
for (let index = 0; index < memberArray.length; index++) {

 this.fechasBD = memberArray[index];
 let mes = this.fechasBD.substr(5,2);//almacenamos el mes

 if (mes == '02') {
    this.festivo ++
 }
}
this.totalFestivo = this.festivo * this.precioFestivo

this.totalMes += this.totalFestivo  //incrementamos el total del mes




})


}
//si el parametro es marzo
else if ( this.id == 'marzo'){

  this._controlService.getSabados().subscribe( data =>{
    this.todosSabados = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
    const memberArray = Object.values(this.todosSabados);
    //recorremos el Array ( vienen en el las fechas en un string)
      for (let index = 0; index < memberArray.length; index++) {

            this.fechasBD = memberArray[index];
            let mes = this.fechasBD.substr(5,2);//almacenamos el mes

            if (mes == '03') {
               this.sabado ++
            }
}
//el totalSabados seran la cantidad de sabados por el precio establecido
this.totalSabado = this.sabado * this.precioSabado

//incrementamos el total del mes
this.totalMes += this.totalSabado

})
this._controlService.getDomingos().subscribe( data =>{
this.todosDomingos = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosDomingos);
//recorremos el Array ( vienen en el las fechas en un string)
 for (let index = 0; index < memberArray.length; index++) {

       this.fechasBD = memberArray[index];
       let mes = this.fechasBD.substr(5,2);//almacenamos el mes

       if (mes == '03') {
          this.domingo ++
       }
}
this.totalDomingo = this.domingo * this.precioDomingo

this.totalMes += this.totalDomingo  //incrementamos el total del mes

})
this._controlService.getDoblajes().subscribe( data =>{
this.todosDoblajes = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosDoblajes);
//recorremos el Array ( vienen en el las fechas en un string)
for (let index = 0; index < memberArray.length; index++) {

 this.fechasBD = memberArray[index];
 let mes = this.fechasBD.substr(5,2);//almacenamos el mes

 if (mes == '03') {
    this.doblaje ++
 }
}
this.totalDoblaje = this.doblaje * this.precioDoblaje
this.totalMes += this.totalDoblaje  //incrementamos el total del mes

})
this._controlService.getFestivos().subscribe( data =>{
this.todosFestivos = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosFestivos);
//recorremos el Array ( vienen en el las fechas en un string)
for (let index = 0; index < memberArray.length; index++) {

 this.fechasBD = memberArray[index];
 let mes = this.fechasBD.substr(5,2);//almacenamos el mes

 if (mes == '03') {
    this.festivo ++
 }
}
this.totalFestivo = this.festivo * this.precioFestivo

this.totalMes += this.totalFestivo  //incrementamos el total del mes




})


//this.totalMes = this.totalDoblaje + this.totalDomingo + this.totalFestivo + this.totalSabado



}
//si el parametro es abril
else if ( this.id == 'abril'){

this._controlService.getSabados().subscribe( data =>{
 this.todosSabados = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
 const memberArray = Object.values(this.todosSabados);
 //recorremos el Array ( vienen en el las fechas en un string)
   for (let index = 0; index < memberArray.length; index++) {

         this.fechasBD = memberArray[index];
         let mes = this.fechasBD.substr(5,2);//almacenamos el mes

         if (mes == '04') {
            this.sabado ++
         }
}
//el totalSabados seran la cantidad de sabados por el precio establecido
this.totalSabado = this.sabado * this.precioSabado

//incrementamos el total del mes
this.totalMes += this.totalSabado

})
this._controlService.getDomingos().subscribe( data =>{
this.todosDomingos = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosDomingos);
//recorremos el Array ( vienen en el las fechas en un string)
for (let index = 0; index < memberArray.length; index++) {

    this.fechasBD = memberArray[index];
    let mes = this.fechasBD.substr(5,2);//almacenamos el mes

    if (mes == '04') {
       this.domingo ++
    }
}
this.totalDomingo = this.domingo * this.precioDomingo

this.totalMes += this.totalDomingo  //incrementamos el total del mes

})
this._controlService.getDoblajes().subscribe( data =>{
this.todosDoblajes = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosDoblajes);
//recorremos el Array ( vienen en el las fechas en un string)
for (let index = 0; index < memberArray.length; index++) {

this.fechasBD = memberArray[index];
let mes = this.fechasBD.substr(5,2);//almacenamos el mes

if (mes == '04') {
 this.doblaje ++
}
}
this.totalDoblaje = this.doblaje * this.precioDoblaje
this.totalMes += this.totalDoblaje  //incrementamos el total del mes

})
this._controlService.getFestivos().subscribe( data =>{
this.todosFestivos = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosFestivos);
//recorremos el Array ( vienen en el las fechas en un string)
for (let index = 0; index < memberArray.length; index++) {

this.fechasBD = memberArray[index];
let mes = this.fechasBD.substr(5,2);//almacenamos el mes

if (mes == '04') {
 this.festivo ++
}
}
this.totalFestivo = this.festivo * this.precioFestivo

this.totalMes += this.totalFestivo  //incrementamos el total del mes




})


//this.totalMes = this.totalDoblaje + this.totalDomingo + this.totalFestivo + this.totalSabado



}
//si el parametro es mayo
else if ( this.id == 'mayo'){

this._controlService.getSabados().subscribe( data =>{
 this.todosSabados = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
 const memberArray = Object.values(this.todosSabados);
 //recorremos el Array ( vienen en el las fechas en un string)
   for (let index = 0; index < memberArray.length; index++) {

         this.fechasBD = memberArray[index];
         let mes = this.fechasBD.substr(5,2);//almacenamos el mes

         if (mes == '05') {
            this.sabado ++
         }
}
//el totalSabados seran la cantidad de sabados por el precio establecido
this.totalSabado = this.sabado * this.precioSabado

//incrementamos el total del mes
this.totalMes += this.totalSabado

})
this._controlService.getDomingos().subscribe( data =>{
this.todosDomingos = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosDomingos);
//recorremos el Array ( vienen en el las fechas en un string)
for (let index = 0; index < memberArray.length; index++) {

    this.fechasBD = memberArray[index];
    let mes = this.fechasBD.substr(5,2);//almacenamos el mes

    if (mes == '05') {
       this.domingo ++
    }
}
this.totalDomingo = this.domingo * this.precioDomingo

this.totalMes += this.totalDomingo  //incrementamos el total del mes

})
this._controlService.getDoblajes().subscribe( data =>{
this.todosDoblajes = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosDoblajes);
//recorremos el Array ( vienen en el las fechas en un string)
for (let index = 0; index < memberArray.length; index++) {

this.fechasBD = memberArray[index];
let mes = this.fechasBD.substr(5,2);//almacenamos el mes

if (mes == '05') {
 this.doblaje ++
}
}
this.totalDoblaje = this.doblaje * this.precioDoblaje
this.totalMes += this.totalDoblaje  //incrementamos el total del mes

})
this._controlService.getFestivos().subscribe( data =>{
this.todosFestivos = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosFestivos);
//recorremos el Array ( vienen en el las fechas en un string)
for (let index = 0; index < memberArray.length; index++) {

this.fechasBD = memberArray[index];
let mes = this.fechasBD.substr(5,2);//almacenamos el mes

if (mes == '05') {
 this.festivo ++
}
}
this.totalFestivo = this.festivo * this.precioFestivo

this.totalMes += this.totalFestivo  //incrementamos el total del mes




})





}
//si el parametro es junio
else if ( this.id == 'junio'){

this._controlService.getSabados().subscribe( data =>{
this.todosSabados = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosSabados);
//recorremos el Array ( vienen en el las fechas en un string)
 for (let index = 0; index < memberArray.length; index++) {

       this.fechasBD = memberArray[index];
       let mes = this.fechasBD.substr(5,2);//almacenamos el mes

       if (mes == '06') {
          this.sabado ++
       }
}
//el totalSabados seran la cantidad de sabados por el precio establecido
this.totalSabado = this.sabado * this.precioSabado

//incrementamos el total del mes
this.totalMes += this.totalSabado

})
this._controlService.getDomingos().subscribe( data =>{
this.todosDomingos = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosDomingos);
//recorremos el Array ( vienen en el las fechas en un string)
for (let index = 0; index < memberArray.length; index++) {

  this.fechasBD = memberArray[index];
  let mes = this.fechasBD.substr(5,2);//almacenamos el mes

  if (mes == '06') {
     this.domingo ++
  }
}
this.totalDomingo = this.domingo * this.precioDomingo

this.totalMes += this.totalDomingo  //incrementamos el total del mes

})
this._controlService.getDoblajes().subscribe( data =>{
this.todosDoblajes = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosDoblajes);
//recorremos el Array ( vienen en el las fechas en un string)
for (let index = 0; index < memberArray.length; index++) {

this.fechasBD = memberArray[index];
let mes = this.fechasBD.substr(5,2);//almacenamos el mes

if (mes == '06') {
this.doblaje ++
}
}
this.totalDoblaje = this.doblaje * this.precioDoblaje
this.totalMes += this.totalDoblaje  //incrementamos el total del mes

})
this._controlService.getFestivos().subscribe( data =>{
this.todosFestivos = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosFestivos);
//recorremos el Array ( vienen en el las fechas en un string)
for (let index = 0; index < memberArray.length; index++) {

this.fechasBD = memberArray[index];
let mes = this.fechasBD.substr(5,2);//almacenamos el mes

if (mes == '06') {
this.festivo ++
}
}
this.totalFestivo = this.festivo * this.precioFestivo

this.totalMes += this.totalFestivo  //incrementamos el total del mes




})


//this.totalMes = this.totalDoblaje + this.totalDomingo + this.totalFestivo + this.totalSabado



}
//si el parametro es julio
else if ( this.id == 'julio'){

this._controlService.getSabados().subscribe( data =>{
this.todosSabados = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosSabados);
//recorremos el Array ( vienen en el las fechas en un string)
 for (let index = 0; index < memberArray.length; index++) {

       this.fechasBD = memberArray[index];
       let mes = this.fechasBD.substr(5,2);//almacenamos el mes

       if (mes == '07') {
          this.sabado ++
       }
}
//el totalSabados seran la cantidad de sabados por el precio establecido
this.totalSabado = this.sabado * this.precioSabado

//incrementamos el total del mes
this.totalMes += this.totalSabado

})
this._controlService.getDomingos().subscribe( data =>{
this.todosDomingos = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosDomingos);
//recorremos el Array ( vienen en el las fechas en un string)
for (let index = 0; index < memberArray.length; index++) {

  this.fechasBD = memberArray[index];
  let mes = this.fechasBD.substr(5,2);//almacenamos el mes

  if (mes == '07') {
     this.domingo ++
  }
}
this.totalDomingo = this.domingo * this.precioDomingo

this.totalMes += this.totalDomingo  //incrementamos el total del mes

})
this._controlService.getDoblajes().subscribe( data =>{
this.todosDoblajes = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosDoblajes);
//recorremos el Array ( vienen en el las fechas en un string)
for (let index = 0; index < memberArray.length; index++) {

this.fechasBD = memberArray[index];
let mes = this.fechasBD.substr(5,2);//almacenamos el mes

if (mes == '07') {
this.doblaje ++
}
}
this.totalDoblaje = this.doblaje * this.precioDoblaje
this.totalMes += this.totalDoblaje  //incrementamos el total del mes

})
this._controlService.getFestivos().subscribe( data =>{
this.todosFestivos = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosFestivos);
//recorremos el Array ( vienen en el las fechas en un string)
for (let index = 0; index < memberArray.length; index++) {

this.fechasBD = memberArray[index];
let mes = this.fechasBD.substr(5,2);//almacenamos el mes

if (mes == '07') {
this.festivo ++
}
}
this.totalFestivo = this.festivo * this.precioFestivo

this.totalMes += this.totalFestivo  //incrementamos el total del mes




})


//this.totalMes = this.totalDoblaje + this.totalDomingo + this.totalFestivo + this.totalSabado



}
//si el parametro es agosto
else if ( this.id == 'agosto'){

this._controlService.getSabados().subscribe( data =>{
this.todosSabados = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosSabados);
//recorremos el Array ( vienen en el las fechas en un string)
 for (let index = 0; index < memberArray.length; index++) {

       this.fechasBD = memberArray[index];
       let mes = this.fechasBD.substr(5,2);//almacenamos el mes

       if (mes == '08') {
          this.sabado ++
       }
}
//el totalSabados seran la cantidad de sabados por el precio establecido
this.totalSabado = this.sabado * this.precioSabado

//incrementamos el total del mes
this.totalMes += this.totalSabado

})
this._controlService.getDomingos().subscribe( data =>{
this.todosDomingos = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosDomingos);
//recorremos el Array ( vienen en el las fechas en un string)
for (let index = 0; index < memberArray.length; index++) {

  this.fechasBD = memberArray[index];
  let mes = this.fechasBD.substr(5,2);//almacenamos el mes

  if (mes == '08') {
     this.domingo ++
  }
}
this.totalDomingo = this.domingo * this.precioDomingo

this.totalMes += this.totalDomingo  //incrementamos el total del mes

})
this._controlService.getDoblajes().subscribe( data =>{
this.todosDoblajes = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosDoblajes);
//recorremos el Array ( vienen en el las fechas en un string)
for (let index = 0; index < memberArray.length; index++) {

this.fechasBD = memberArray[index];
let mes = this.fechasBD.substr(5,2);//almacenamos el mes

if (mes == '08') {
this.doblaje ++
}
}
this.totalDoblaje = this.doblaje * this.precioDoblaje
this.totalMes += this.totalDoblaje  //incrementamos el total del mes

})
this._controlService.getFestivos().subscribe( data =>{
this.todosFestivos = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosFestivos);
//recorremos el Array ( vienen en el las fechas en un string)
for (let index = 0; index < memberArray.length; index++) {

this.fechasBD = memberArray[index];
let mes = this.fechasBD.substr(5,2);//almacenamos el mes

if (mes == '08') {
this.festivo ++
}
}
this.totalFestivo = this.festivo * this.precioFestivo

this.totalMes += this.totalFestivo  //incrementamos el total del mes




})


//this.totalMes = this.totalDoblaje + this.totalDomingo + this.totalFestivo + this.totalSabado



}
//si el parametro es septiembre
else if ( this.id == 'septiembre'){

this._controlService.getSabados().subscribe( data =>{
this.todosSabados = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosSabados);
//recorremos el Array ( vienen en el las fechas en un string)
 for (let index = 0; index < memberArray.length; index++) {

       this.fechasBD = memberArray[index];
       let mes = this.fechasBD.substr(5,2);//almacenamos el mes

       if (mes == '09') {
          this.sabado ++
       }
}
//el totalSabados seran la cantidad de sabados por el precio establecido
this.totalSabado = this.sabado * this.precioSabado

//incrementamos el total del mes
this.totalMes += this.totalSabado

})
this._controlService.getDomingos().subscribe( data =>{
this.todosDomingos = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosDomingos);
//recorremos el Array ( vienen en el las fechas en un string)
for (let index = 0; index < memberArray.length; index++) {

  this.fechasBD = memberArray[index];
  let mes = this.fechasBD.substr(5,2);//almacenamos el mes

  if (mes == '09') {
     this.domingo ++
  }
}
this.totalDomingo = this.domingo * this.precioDomingo

this.totalMes += this.totalDomingo  //incrementamos el total del mes

})
this._controlService.getDoblajes().subscribe( data =>{
this.todosDoblajes = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosDoblajes);
//recorremos el Array ( vienen en el las fechas en un string)
for (let index = 0; index < memberArray.length; index++) {

this.fechasBD = memberArray[index];
let mes = this.fechasBD.substr(5,2);//almacenamos el mes

if (mes == '09') {
this.doblaje ++
}
}
this.totalDoblaje = this.doblaje * this.precioDoblaje
this.totalMes += this.totalDoblaje  //incrementamos el total del mes

})
this._controlService.getFestivos().subscribe( data =>{
this.todosFestivos = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosFestivos);
//recorremos el Array ( vienen en el las fechas en un string)
for (let index = 0; index < memberArray.length; index++) {

this.fechasBD = memberArray[index];
let mes = this.fechasBD.substr(5,2);//almacenamos el mes

if (mes == '09') {
this.festivo ++
}
}
this.totalFestivo = this.festivo * this.precioFestivo

this.totalMes += this.totalFestivo  //incrementamos el total del mes




})


//this.totalMes = this.totalDoblaje + this.totalDomingo + this.totalFestivo + this.totalSabado



}
//si el parametro es octubre
else if ( this.id == 'octubre'){

this._controlService.getSabados().subscribe( data =>{
this.todosSabados = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosSabados);
//recorremos el Array ( vienen en el las fechas en un string)
 for (let index = 0; index < memberArray.length; index++) {

       this.fechasBD = memberArray[index];
       let mes = this.fechasBD.substr(5,2);//almacenamos el mes

       if (mes == '10') {
          this.sabado ++
       }
}
//el totalSabados seran la cantidad de sabados por el precio establecido
this.totalSabado = this.sabado * this.precioSabado

//incrementamos el total del mes
this.totalMes += this.totalSabado

})
this._controlService.getDomingos().subscribe( data =>{
this.todosDomingos = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosDomingos);
//recorremos el Array ( vienen en el las fechas en un string)
for (let index = 0; index < memberArray.length; index++) {

  this.fechasBD = memberArray[index];
  let mes = this.fechasBD.substr(5,2);//almacenamos el mes

  if (mes == '10') {
     this.domingo ++
  }
}
this.totalDomingo = this.domingo * this.precioDomingo

this.totalMes += this.totalDomingo  //incrementamos el total del mes

})
this._controlService.getDoblajes().subscribe( data =>{
this.todosDoblajes = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosDoblajes);
//recorremos el Array ( vienen en el las fechas en un string)
for (let index = 0; index < memberArray.length; index++) {

this.fechasBD = memberArray[index];
let mes = this.fechasBD.substr(5,2);//almacenamos el mes

if (mes == '10') {
this.doblaje ++
}
}
this.totalDoblaje = this.doblaje * this.precioDoblaje
this.totalMes += this.totalDoblaje  //incrementamos el total del mes

})
this._controlService.getFestivos().subscribe( data =>{
this.todosFestivos = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosFestivos);
//recorremos el Array ( vienen en el las fechas en un string)
for (let index = 0; index < memberArray.length; index++) {

this.fechasBD = memberArray[index];
let mes = this.fechasBD.substr(5,2);//almacenamos el mes

if (mes == '10') {
this.festivo ++
}
}
this.totalFestivo = this.festivo * this.precioFestivo

this.totalMes += this.totalFestivo  //incrementamos el total del mes




})


//this.totalMes = this.totalDoblaje + this.totalDomingo + this.totalFestivo + this.totalSabado



}
//si el parametro es noviembre
else if ( this.id == 'noviembre'){

this._controlService.getSabados().subscribe( data =>{
this.todosSabados = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosSabados);
//recorremos el Array ( vienen en el las fechas en un string)
 for (let index = 0; index < memberArray.length; index++) {

       this.fechasBD = memberArray[index];
       let mes = this.fechasBD.substr(5,2);//almacenamos el mes

       if (mes == '11') {
          this.sabado ++
       }
}
//el totalSabados seran la cantidad de sabados por el precio establecido
this.totalSabado = this.sabado * this.precioSabado

//incrementamos el total del mes
this.totalMes += this.totalSabado

})
this._controlService.getDomingos().subscribe( data =>{
this.todosDomingos = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosDomingos);
//recorremos el Array ( vienen en el las fechas en un string)
for (let index = 0; index < memberArray.length; index++) {

  this.fechasBD = memberArray[index];
  let mes = this.fechasBD.substr(5,2);//almacenamos el mes

  if (mes == '11') {
     this.domingo ++
  }
}
this.totalDomingo = this.domingo * this.precioDomingo

this.totalMes += this.totalDomingo  //incrementamos el total del mes

})
this._controlService.getDoblajes().subscribe( data =>{
this.todosDoblajes = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosDoblajes);
//recorremos el Array ( vienen en el las fechas en un string)
for (let index = 0; index < memberArray.length; index++) {

this.fechasBD = memberArray[index];
let mes = this.fechasBD.substr(5,2);//almacenamos el mes

if (mes == '11') {
this.doblaje ++
}
}
this.totalDoblaje = this.doblaje * this.precioDoblaje
this.totalMes += this.totalDoblaje  //incrementamos el total del mes

})
this._controlService.getFestivos().subscribe( data =>{
this.todosFestivos = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosFestivos);
//recorremos el Array ( vienen en el las fechas en un string)
for (let index = 0; index < memberArray.length; index++) {

this.fechasBD = memberArray[index];
let mes = this.fechasBD.substr(5,2);//almacenamos el mes

if (mes == '11') {
this.festivo ++
}
}
this.totalFestivo = this.festivo * this.precioFestivo

this.totalMes += this.totalFestivo  //incrementamos el total del mes

})

}
//si el parametro es diciembre
else if ( this.id == 'diciembre'){

this._controlService.getSabados().subscribe( data =>{
this.todosSabados = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosSabados);
//recorremos el Array ( vienen en el las fechas en un string)
 for (let index = 0; index < memberArray.length; index++) {

       this.fechasBD = memberArray[index];
       let mes = this.fechasBD.substr(5,2);//almacenamos el mes

       if (mes == '12') {
          this.sabado ++
       }
}
//el totalSabados seran la cantidad de sabados por el precio establecido
this.totalSabado = this.sabado * this.precioSabado

//incrementamos el total del mes
this.totalMes += this.totalSabado

})
this._controlService.getDomingos().subscribe( data =>{
this.todosDomingos = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosDomingos);
//recorremos el Array ( vienen en el las fechas en un string)
for (let index = 0; index < memberArray.length; index++) {

  this.fechasBD = memberArray[index];
  let mes = this.fechasBD.substr(5,2);//almacenamos el mes

  if (mes == '12') {
     this.domingo ++
  }
}
this.totalDomingo = this.domingo * this.precioDomingo

this.totalMes += this.totalDomingo  //incrementamos el total del mes

})
this._controlService.getDoblajes().subscribe( data =>{
this.todosDoblajes = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosDoblajes);
//recorremos el Array ( vienen en el las fechas en un string)
for (let index = 0; index < memberArray.length; index++) {

this.fechasBD = memberArray[index];
let mes = this.fechasBD.substr(5,2);//almacenamos el mes

if (mes == '12') {
this.doblaje ++
}
}
this.totalDoblaje = this.doblaje * this.precioDoblaje
this.totalMes += this.totalDoblaje  //incrementamos el total del mes

})
this._controlService.getFestivos().subscribe( data =>{
this.todosFestivos = data
//con esto convertimos los valores del objeto que nos devuelve en un array
//NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);
const memberArray = Object.values(this.todosFestivos);
//recorremos el Array ( vienen en el las fechas en un string)
for (let index = 0; index < memberArray.length; index++) {

this.fechasBD = memberArray[index];
let mes = this.fechasBD.substr(5,2);//almacenamos el mes

if (mes == '12') {
this.festivo ++
}
}
this.totalFestivo = this.festivo * this.precioFestivo

this.totalMes += this.totalFestivo  //incrementamos el total del mes




})





}

  }





}
