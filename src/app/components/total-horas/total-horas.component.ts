import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import {  Component,ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild,AfterViewInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { ControlJobsServiceService } from '../../services/control-jobs-service.service';
import { HorasExtras } from '../../interface/horas-extras';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-total-horas',
  templateUrl: './total-horas.component.html',
  styleUrls: ['./total-horas.component.css']
})
export class TotalHorasComponent {

  valor:any []= [];

  sabados = [];
  domingos = [];
  doblaje = [];
  festivo = [];
  id:any ;

  fecha:any;
  diaPrueba:any;



  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private _activatedRoute:ActivatedRoute,
    private router:Router,
    private _controlService: ControlJobsServiceService) {
       //con esto captamos los parametros de la url:
      this._activatedRoute.params.subscribe( param=>{
         this.id = param ['id'];
         console.log('parametro'+this.id);

         this ._controlService.getSabado(this.id).subscribe(data=>this.sabados = data);
         this._controlService.getDomingo(this.id).subscribe(data=>this.domingos = data);

        })

  {

   }

 //cargamos todos los sabados
   this._controlService.getSabados().subscribe(data=>{
    this.sabados = data
    console.log( this.sabados )
  })
  this._controlService.getDomingos().subscribe(data=>{
    this.domingos = data
  })
  this._controlService.getDoblajes().subscribe(data=>{
    this.doblaje = data
  })
  this._controlService.getFestivos().subscribe(data=>{
    this.festivo= data
  })
}


/*en el primer parametro viene el elemento que se va eliminar al confirmar el dialog y en el segundo parametro
viene la fecha que se va a mostrar en el dialogo*/
openDialog( key$:any, key2$:any ): void {
  const dialogRef = this.dialog.open(ConfirmationComponent, {

    width: '350px',
    data: {
      dia : key2$,
    }
  });

//antes de cerrar el dialogo
  dialogRef.afterClosed().subscribe(result => {
  //si viene algo en el result
    if( result ){
    //si el parametro de la url es sabado
      if( this.id =='sabado'){

        this._controlService.borraSabado(key$).subscribe(data=>{

          //nota: en la eliminacion si se hace correctamente la data = null
          //si viene algo en la data, es decir data != null:
          if( data ){
            console.error(data)
          }else{
            //todo bien
            delete this.sabados[key$]
                      //ponemos un retraso al recagar el componente para actualizar graficos
                      setTimeout(()=>
                      {
                        this.router.navigateByUrl('/RefrshComponent', {skipLocationChange: true}).then(()=> this.router.navigate(['modal', this.id ] ));
                      },2000);
            this.snackBar.open('Sabado eliminado', 'Cerrar' ,{ duration: 3000});//mensaje al eliminar( de angular material)
          }
        })
       }
    //si el parametro de la url es sabado

       else if( this.id == 'domingo' ){
        this._controlService.borraDomingo(key$).subscribe(data=>{

          //nota: en la eliminacion si se hace correctamente la data = null
          //si viene algo en la data, es decir data != null:
          if( data ){
            console.error(data  + 'algo falla')
          }else{
            //todo bien
            delete this.domingos[key$];
            //ponemos un retraso al recagar el componente para actualizar graficos
            setTimeout(()=>
            {
              this.router.navigateByUrl('/RefrshComponent', {skipLocationChange: true}).then(()=> this.router.navigate(['modal', this.id ] ));
            },2000);
            this.snackBar.open('Domingo eliminado', 'Cerrar' ,{ duration: 3000});//mensaje al eliminar( de angular material)

          }
        })
      }
    //si el parametro de la url es sabado
    else if( this.id == 'doblaje' ){
        this._controlService.borraDoblaje(key$).subscribe(data=>{
          //nota: en la eliminacion si se hace correctamente la data = null
          //si viene algo en la data, es decir data != null:
          if( data ){
            console.error(data  + 'algo falla')
          }else{
            //todo bien
            delete this.doblaje[key$]
                      //ponemos un retraso al recagar el componente para actualizar graficos
                      setTimeout(()=>
                      {
                        this.router.navigateByUrl('/RefrshComponent', {skipLocationChange: true}).then(()=> this.router.navigate(['modal', this.id ] ));
                      },2000);
            this.snackBar.open('Doblaje eliminado', 'Cerrar' ,{ duration: 3000});//mensaje al eliminar( de angular material)

          }
        })
      }
    //si el parametro de la url es sabado
    else if( this.id == 'festivo' ){
          this._controlService.borraFestivo(key$).subscribe(data=>{
            //nota: en la eliminacion si se hace correctamente la data = null
            //si viene algo en la data, es decir data != null:
            if( data ){
              console.error(data  + 'algo falla')
            }else{
              //todo bien
              delete this.festivo[key$]
                        //ponemos un retraso al recagar el componente para actualizar graficos
            setTimeout(()=>
            {
              this.router.navigateByUrl('/RefrshComponent', {skipLocationChange: true}).then(()=> this.router.navigate(['modal', this.id ] ));
            },2000);
              this.snackBar.open('Festivo eliminado', 'Cerrar' ,{ duration: 3000});//mensaje al eliminar( de angular material)

            }
          })
        }


    }


    })

}

eliminar ( idx:any) {
  this.valor.splice(idx, 1);

}


}
