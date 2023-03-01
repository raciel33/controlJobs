import { Component, Inject } from '@angular/core';
import { ControlJobsServiceService } from './services/control-jobs-service.service';
import { ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'controlJobs';

  noche:boolean = false ;
  hora:Date = new Date()
  mostrar = true;
   id:string;

  constructor( public _controlJobsService: ControlJobsServiceService,
   private _activatedRoute:ActivatedRoute,@Inject(DOCUMENT) document: any) {


    //controlamos el aspecto que tendra la pantalla blanco o negro
     if( this.hora.getHours() > 20){
      this.noche = true;
     }else{
      this.noche = false;
     }

  }

  cambioNocheDia(){
     this.noche = !this.noche;
  }

}
