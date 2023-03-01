import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  noche:boolean = false ;

  hora:Date = new Date()
  constructor() {
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
