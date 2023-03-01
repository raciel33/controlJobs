import { Component, OnInit } from '@angular/core';
import { ControlJobsServiceService } from '../../services/control-jobs-service.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {


  meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']

  constructor( private _controlService:ControlJobsServiceService
    ) {

    }

  ngOnInit(): void {
  }

}
