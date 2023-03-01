import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ControlJobsServiceService } from '../../services/control-jobs-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hidden = false;

  noche:boolean = false ;
  hora:Date = new Date()



   constructor(private _controlServices:ControlJobsServiceService) {
 //controlamos el aspecto que tendra la pantalla blanco o negro
 if( this.hora.getHours() > 20){
  this.noche = true;
 }else{
  this.noche = false;
 }


  }


ngOnInit(): void {


}




}
