import { ModalCalendarComponent } from './../modal-calendar/modal-calendar.component';
import { Component, OnInit ,ViewChild,Input,Output,EventEmitter,ElementRef,Inject,AfterViewInit} from '@angular/core';
import { ControlJobsServiceService } from '../../services/control-jobs-service.service';
import { Router,ActivatedRoute} from '@angular/router';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TotalHorasComponent } from '../total-horas/total-horas.component';


@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {

//DIRECTIVAS UTILIZADAS EN MODAL

  @Input() public message = '¿Quieres eliminar el: ';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {dia:any},
    public dialogRef: MatDialogRef<TotalHorasComponent>,
    ) {
    }
onNoClick(): void {
  this.dialogRef.close();
}









}
