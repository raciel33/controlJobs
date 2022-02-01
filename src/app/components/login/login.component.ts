import { Component, OnInit } from '@angular/core';
import { ControlJobsServiceService } from '../../services/control-jobs-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _controlJobsService:ControlJobsServiceService) { }

  ngOnInit(): void {
  }

  ingresar(proveedor:string){
    console.log(proveedor);
    this._controlJobsService.login( proveedor)



  }
}
