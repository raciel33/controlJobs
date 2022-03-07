import { MatDialogModule, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import {  Component,ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { ControlJobsServiceService } from '../../services/control-jobs-service.service';
import { HorasExtras } from '../../interface/horas-extras';



@Component({
  selector: 'app-modal-calendar',
  templateUrl: './modal-calendar.component.html',
  styleUrls: ['./modal-calendar.component.css']
})


export class ModalCalendarComponent  {

  //calendar

  selected: any;

  valor:any []= [];

  dia:string = "" ;

  id:string = "";

  fechaPrueba: Date = new Date()



  constructor(

    private _activatedRoute:ActivatedRoute,
    private router:Router,
    private _controlService: ControlJobsServiceService) {

       //con esto captamos los parametros de la url:
      this._activatedRoute.params.subscribe( param=>{
        console.log(param);
         this.id = param ['id'];

      })
  { }

}

//funcion para captar el dia seleccionado
seleccionDia(){
  let diaSelect;
  switch (this.selected?.getDay()) {
    case 0:
      diaSelect = "Sunday";
        console.log("It is a Sunday.");
        break;
    case 1:
        this.dia =  "Monday";
        console.log("It is a Monday.");
        break;
    case 2:
        this.dia = "Tuesday";
        console.log("It is a Tuesday.");
        break;
    case 3:
         this.dia = "Wednesday";
        console.log("It is a Wednesday.");
        break;
    case 4:
      this.dia = "Thursday";
        console.log("It is a Thursday.");
        break;
    case 5:
       this.dia ="Friday";
        console.log("It is a Friday.");
        break;
    case 6:
       this.dia = "Saturday";
        console.log("It is a Saturday.");
        break;
    default:
        console.log("No such day exists!");
        break;
}
//diaSelect = this.dia;
return diaSelect;
}




anadir(){
  console.log( this.seleccionDia())
//en caso de que el parametro sea:
  switch( this.id){
    case 'sabado':
      this.anadirSabado();
      break;
    case 'domingo':
      this.anadirDomingo();
      break;
    case 'festivo':
        this.anadirFestivo();
        break;
    case 'doblaje':
        this.anadirDoblaje();
        break;
  }

}

//para añadir un sabado
anadirSabado(){
  if (this.selected?.getDay() == 6) {
    this.valor.push( this.selected )
  } else {
    alert ( "No ha seleccionado un Sabado ")
  }
}
//añadir domingo
anadirDomingo(){
   if (this.selected?.getDay() == 0) {
     this.valor.push( this.selected )
   } else {
     alert ( "No ha seleccionado un Domingo ")
   }
 }

 //añadir festivo
anadirFestivo(){
    this.valor.push( this.selected )
}
 //añadir doblaje
anadirDoblaje(){
  this.valor.push( this.selected )

}

guardar(){
  console.log ( this.valor )

  this._controlService.insertar( this.valor ).subscribe( (data:any)=>{

    console.log( " insertando")

  })

}
eliminar( ){

}
ngOnInit(): void {

}

}




