import { Component } from '@angular/core';
import { ControlJobsServiceService } from './services/control-jobs-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'controlJobs';

  noche:boolean = false ;
  hora:Date = new Date()

  constructor( public _controlJobsService: ControlJobsServiceService) {
     console.log(  this.hora.getHours())
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
