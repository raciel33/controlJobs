import { MatDialogModule, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { ControlJobsServiceService } from '../../services/control-jobs-service.service';
import { HorasExtras } from '../../interface/horas-extras';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-modal-calendar',
  templateUrl: './modal-calendar.component.html',
  styleUrls: ['./modal-calendar.component.css']
})


export class ModalCalendarComponent implements OnInit{


  selected: any;

  valor:string []= [];

  dia:string = "" ;

  id! : string ;

  prueba!:any;

  fechaPrueba: Date = new Date()

  parametro!:string;

  array = [];

//LAS SIGUIENTES VARIABLES ES PARA EL GRAFICO!!!
  //variable que recogeran los sabados por mes
  enero = 0;
  febrero = 0;
  marzo = 0;
  abril= 0;
  mayo = 0 ;
  junio = 0;
  julio = 0;
  agosto = 0;
  septiembre = 0;
  octubre = 0;
  noviembre = 0;
  diciembre = 0;

    //variable que recogeran los sabados por mes
    eneroDinero = 0;
    febreroDinero = 0;
    marzoDinero = 0;
    abrilDinero= 0;
    mayoDinero = 0 ;
    junioDinero = 0;
    julioDinero = 0;
    agostoDinero = 0;
    septiembreDinero = 0;
    octubreDinero = 0;
    noviembreDinero = 0;
    diciembreDinero = 0

//variables que recogeran los domingos por mes
eneroDomingo = 0;
febreroDomingo = 0;
marzoDomingo = 0;
abrilDomingo= 0;
mayoDomingo= 0 ;
junioDomingo = 0;
julioDomingo = 0;
agostoDomingo = 0;
septiembreDomingo = 0;
octubreDomingo = 0;
noviembreDomingo = 0;
diciembreDomingo = 0;

//variable que recogeran los doblajes por mes
eneroDoblaje = 0;
febreroDoblaje = 0;
marzoDoblaje = 0;
abrilDoblaje= 0;
mayoDoblaje = 0 ;
junioDoblaje = 0;
julioDoblaje = 0;
agostoDoblaje = 0;
septiembreDoblaje = 0;
octubreDoblaje = 0;
noviembreDoblaje = 0;
diciembreDoblaje = 0;

//variable que recogeran los festivos por mes
eneroFestivo = 0;
febreroFestivo = 0;
marzoFestivo = 0;
abrilFestivo= 0;
mayoFestivo = 0 ;
junioFestivo = 0;
julioFestivo = 0;
agostoFestivo = 0;
septiembreFestivo = 0;
octubreFestivo = 0;
noviembreFestivo = 0;
diciembreFestivo = 0;


fechasBD :any;

 sabados:any[]  ;
 todosDomingos:any[]  ;
 todosDoblajes:any[]  ;
 todosFestivos:any[]  ;

 precioSabado = 60;
 precioDomingo = 100;
 precioDoblaje = 50;
 precioFestivo = 100;


  constructor(

    private _activatedRoute:ActivatedRoute,
    private router:Router,
    private _controlService: ControlJobsServiceService,
    private snackBar: MatSnackBar) {


       //con esto captamos los parametros de la url:
      this._activatedRoute.params.subscribe( param=>{
         this.id = param ['id'];
         this.parametro = this.id;

      })

      //en dependencia del id se cargara el grafico adecuado
     if ( this.id == 'sabado'){

     /* recuperamos todos y los cargamos en la grafica Line */
      this._controlService.getSabados().subscribe(data=>{
        this.sabados = data

      //con esto convertimos los valores del objeto que nos devuelve en un array
        //NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);

        const memberArray = Object.values(this.sabados);

      //recorremos el Array ( vienen en el las fechas en un string)
        for (let index = 0; index < memberArray.length; index++) {

              this.fechasBD = memberArray[index];
              let mes = this.fechasBD.substr(5,2);//almacenamos el mes

              if (mes == '01') {
                this.enero ++ ;//incrementamos

                //instroducimos en la data de la grafica el valor correspondiente
                this.lineChartData = [
                 { data: [this.enero, this.febrero, this.marzo, this.abril,this.mayo, this.junio,
                  this.julio,this.agosto,this.septiembre,this.octubre,this.noviembre,this.diciembre], label: 'Sabados' },

                ]

             }
             else if (mes == '02') {
              this.febrero ++ ;//incrementamos

              //instroducimos en la data de la grafica el valor correspondiente
              this.lineChartData = [
               { data: [this.enero, this.febrero, this.marzo, this.abril,this.mayo, this.junio,
                this.julio,this.agosto,this.septiembre,this.octubre,this.noviembre,this.diciembre], label: 'Sabados' },

              ]

           }
           else if (mes == '03') {
            this.marzo ++ ;//incrementamos

            //instroducimos en la data de la grafica el valor correspondiente
            this.lineChartData = [
             { data: [this.enero, this.febrero, this.marzo, this.abril,this.mayo, this.junio,
              this.julio,this.agosto,this.septiembre,this.octubre,this.noviembre,this.diciembre], label: 'Sabados' },

            ]

         }
         else if (mes == '04') {
          this.abril ++ ;//incrementamos

          //instroducimos en la data de la grafica el valor correspondiente
          this.lineChartData = [
           { data: [this.enero, this.febrero, this.marzo, this.abril,this.mayo, this.junio,
            this.julio,this.agosto,this.septiembre,this.octubre,this.noviembre,this.diciembre], label: 'Sabados' },

          ]

       }

              else if (mes == '05') {
                 this.mayo ++ ;//incrementamos

                 //instroducimos en la data de la grafica el valor correspondiente
                 this.lineChartData = [
                  { data: [this.enero, this.febrero, this.marzo, this.abril,this.mayo, this.junio,
                   this.julio,this.agosto,this.septiembre,this.octubre,this.noviembre,this.diciembre], label: 'Sabados' },

                 ]

              }
              else if (mes == '06') {
                this.junio ++ ;//incrementamos

                //instroducimos en la data de la grafica el valor correspondiente
                this.lineChartData = [
                  { data: [this.enero, this.febrero, this.marzo, this.abril,this.mayo, this.junio,
                   this.julio,this.agosto,this.septiembre,this.octubre,this.noviembre,this.diciembre], label: 'Sabados' },

                 ]

             }
             else if (mes == '07') {
              this.julio ++ ;//incrementamos

              //instroducimos en la data de la grafica el valor correspondiente
              this.lineChartData = [
               { data: [this.enero, this.febrero, this.marzo, this.abril,this.mayo, this.junio,
                this.julio,this.agosto,this.septiembre,this.octubre,this.noviembre,this.diciembre], label: 'Sabados' },

              ]

           }
           else if (mes == '08') {
            this.agosto ++ ;//incrementamos

            //instroducimos en la data de la grafica el valor correspondiente
            this.lineChartData = [
             { data: [this.enero, this.febrero, this.marzo, this.abril,this.mayo, this.junio,
              this.julio,this.agosto,this.septiembre,this.octubre,this.noviembre,this.diciembre], label: 'Sabados' },

            ]

         }
         else if (mes == '09') {
          this.septiembre ++ ;//incrementamos

          //instroducimos en la data de la grafica el valor correspondiente
          this.lineChartData = [
           { data: [this.enero, this.febrero, this.marzo, this.abril,this.mayo, this.junio,
            this.julio,this.agosto,this.septiembre,this.octubre,this.noviembre,this.diciembre], label: 'Sabados' },

          ]

       }
       else if (mes == '10') {
        this.octubre++ ;//incrementamos

        //instroducimos en la data de la grafica el valor correspondiente
        this.lineChartData = [
         { data: [this.enero, this.febrero, this.marzo, this.abril,this.mayo, this.junio,
          this.julio,this.agosto,this.septiembre,this.octubre,this.noviembre,this.diciembre], label: 'Sabados' },

        ]

     }
     else if (mes == '11') {
      this.noviembre ++ ;//incrementamos

      //instroducimos en la data de la grafica el valor correspondiente
      this.lineChartData = [
       { data: [this.enero, this.febrero, this.marzo, this.abril,this.mayo, this.junio,
        this.julio,this.agosto,this.septiembre,this.octubre,this.noviembre,this.diciembre], label: 'Sabados' },

      ]

    }
    else if (mes == '12') {
      this.diciembre ++ ;//incrementamos

      //instroducimos en la data de la grafica el valor correspondiente
      this.lineChartData = [
       { data: [this.enero, this.febrero, this.marzo, this.abril,this.mayo, this.junio,
        this.julio,this.agosto,this.septiembre,this.octubre,this.noviembre,this.diciembre], label: 'Sabados' },

      ]

    }

             //console.log(memberArray[index]);

        }

      })

     /* recuperamos todos y los cargamos en la grafica PolarChart del dinero ganado */

      this._controlService.getSabados().subscribe(data=>{
        this.sabados = data

      //con esto convertimos los valores del objeto que nos devuelve en un array
        //NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);

        const memberArray = Object.values(this.sabados);

      //recorremos el Array ( vienen en el las fechas en un string)
        for (let index = 0; index < memberArray.length; index++) {

              this.fechasBD = memberArray[index];
              let mes = this.fechasBD.substr(5,2);//almacenamos el mes

              if (mes == '01') {
                this.eneroDinero  = this.eneroDinero + this.precioSabado ;//incrementamos

                //instroducimos en la data de la grafica el valor correspondiente
                this.PolarChartData2 = [
                 { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
                  this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

                ]

             }
             else if (mes == '02') {
              this.febreroDinero = this.febreroDinero  + this.precioSabado;//incrementamos

              //instroducimos en la data de la grafica el valor correspondiente
              this.PolarChartData2 = [
               { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
                this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

              ]

           }
           else if (mes == '03') {
            this.marzoDinero += this.precioSabado ;//incrementamos

            //instroducimos en la data de la grafica el valor correspondiente
            this.PolarChartData2 = [
             { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
              this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

            ]

         }
         else if (mes == '04') {
          this.abrilDinero += this.precioSabado ;//incrementamos

          //instroducimos en la data de la grafica el valor correspondiente
          this.PolarChartData2 = [
           { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
            this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

          ]

       }

              else if (mes == '05') {
                 this.mayoDinero += this.precioSabado ;//incrementamos

                 //instroducimos en la data de la grafica el valor correspondiente
                 this.PolarChartData2 = [
                  { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
                    this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

                  ]

              }
              else if (mes == '06') {
                this.junioDinero += this.precioSabado ;//incrementamos

                //instroducimos en la data de la grafica el valor correspondiente
                this.PolarChartData2 = [
                  { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
                    this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

                  ]

             }
             else if (mes == '07') {
              this.julioDinero += this.precioSabado;//incrementamos

              //instroducimos en la data de la grafica el valor correspondiente
              this.PolarChartData2 = [
               { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
                this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

              ]

           }
           else if (mes == '08') {
            this.agostoDinero += this.precioSabado ;//incrementamos

            //instroducimos en la data de la grafica el valor correspondiente
            this.PolarChartData2= [
             { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
              this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

            ]

         }
         else if (mes == '09') {
          this.septiembreDinero += this.precioSabado ;//incrementamos

          //instroducimos en la data de la grafica el valor correspondiente
          this.PolarChartData2 = [
           { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
            this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

          ]

       }
       else if (mes == '10') {
        this.octubreDinero+= this.precioSabado ;//incrementamos

        //instroducimos en la data de la grafica el valor correspondiente
        this.PolarChartData2 = [
         { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
          this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

        ]

     }
     else if (mes == '11') {
      this.noviembreDinero += this.precioSabado ;//incrementamos

      //instroducimos en la data de la grafica el valor correspondiente
      this.PolarChartData2 = [
       { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
        this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

      ]

    }
    else if (mes == '12') {
      this.diciembreDinero += this.precioSabado ;//incrementamos

      //instroducimos en la data de la grafica el valor correspondiente
      this.PolarChartData2 = [
       { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
        this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

      ]

    }

             //console.log(memberArray[index]);

        }

      })

     }
     else if(this.id == 'domingo'){

      /* recuperamos todos y los cargamos en la grafica Line */

      this._controlService.getDomingos().subscribe(data=>{
        this.todosDomingos = data
      //con esto convertimos los valores del objeto que nos devuelve en un array
        //NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);

        const memberArray = Object.values(this.todosDomingos);

      //recorremos el Array ( vienen en el las fechas en un string)
        for (let index = 0; index < memberArray.length; index++) {

              this.fechasBD = memberArray[index];
              let mes = this.fechasBD.substr(5,2);//almacenamos el mes

              console.log ( this.fechasBD )

              if (mes == '01') {

                this.eneroDomingo ++ ;//incrementamos

             }
             else if(mes == '02'){

              this.febreroDomingo ++;
             }
             else if(mes == '03'){

              this.marzoDomingo ++;
             }
             else if(mes == '04'){


              this.abrilDomingo ++;
             }
             else if(mes == '05'){

              this.mayoDomingo ++;
             }
             else if(mes == '06'){

              this.junioDomingo ++;
             }
             else if(mes == '07'){

              this.julioDomingo ++;
             }
             else if(mes == '08'){

              this.agostoDomingo ++;
             }
             else if(mes == '09'){

              this.septiembreDomingo ++;
             }
             else if(mes == '10'){

              this.octubreDomingo ++;
             }
             else if(mes == '11'){

              this.noviembreDomingo ++;
             }
             else if(mes == '12'){

              this.diciembreDomingo ++;
             }

        }
        //instroducimos en la data de la grafica el valor correspondiente

        this.lineChartData.push(
          { data: [this.eneroDomingo, this.febreroDomingo, this.marzoDomingo, this.abrilDomingo,this.mayoDomingo, this.junioDomingo,
           this.julioDomingo,this.agostoDomingo,this.septiembreDomingo,this.octubreDomingo,this.noviembreDomingo,this.diciembreDomingo], label: 'Domingos',
          backgroundColor:  "#198BB6" },



        )

      })

       /* recuperamos todos y los cargamos en la grafica PolarChart del dinero ganado */

       this._controlService.getDomingos().subscribe(data=>{
        this.todosDomingos = data

      //con esto convertimos los valores del objeto que nos devuelve en un array
        //NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);

        const memberArray = Object.values(this.todosDomingos);

      //recorremos el Array ( vienen en el las fechas en un string)
        for (let index = 0; index < memberArray.length; index++) {

              this.fechasBD = memberArray[index];
              let mes = this.fechasBD.substr(5,2);//almacenamos el mes

              if (mes == '01') {
                this.eneroDinero  = this.eneroDinero + this.precioDomingo ;//incrementamos

                //instroducimos en la data de la grafica el valor correspondiente
                this.PolarChartData2 = [
                 { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
                  this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

                ]

             }
             else if (mes == '02') {
              this.febreroDinero = this.febreroDinero  + this.precioDomingo;//incrementamos

              //instroducimos en la data de la grafica el valor correspondiente
              this.PolarChartData2 = [
               { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
                this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

              ]

           }
           else if (mes == '03') {
            this.marzoDinero += this.precioDomingo ;//incrementamos

            //instroducimos en la data de la grafica el valor correspondiente
            this.PolarChartData2 = [
             { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
              this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

            ]

         }
         else if (mes == '04') {
          this.abrilDinero += this.precioDomingo ;//incrementamos

          //instroducimos en la data de la grafica el valor correspondiente
          this.PolarChartData2 = [
           { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
            this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

          ]

       }

              else if (mes == '05') {
                 this.mayoDinero += this.precioDomingo ;//incrementamos

                 //instroducimos en la data de la grafica el valor correspondiente
                 this.PolarChartData2 = [
                  { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
                    this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

                  ]

              }
              else if (mes == '06') {
                this.junioDinero += this.precioDomingo ;//incrementamos

                //instroducimos en la data de la grafica el valor correspondiente
                this.PolarChartData2 = [
                  { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
                    this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

                  ]

             }
             else if (mes == '07') {
              this.julioDinero += this.precioDomingo;//incrementamos

              //instroducimos en la data de la grafica el valor correspondiente
              this.PolarChartData2 = [
               { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
                this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

              ]

           }
           else if (mes == '08') {
            this.agostoDinero += this.precioDomingo ;//incrementamos

            //instroducimos en la data de la grafica el valor correspondiente
            this.PolarChartData2= [
             { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
              this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

            ]

         }
         else if (mes == '09') {
          this.septiembreDinero += this.precioDomingo ;//incrementamos

          //instroducimos en la data de la grafica el valor correspondiente
          this.PolarChartData2 = [
           { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
            this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

          ]

       }
       else if (mes == '10') {
        this.octubreDinero+= this.precioDomingo ;//incrementamos

        //instroducimos en la data de la grafica el valor correspondiente
        this.PolarChartData2 = [
         { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
          this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

        ]

     }
     else if (mes == '11') {
      this.noviembreDinero += this.precioDomingo ;//incrementamos

      //instroducimos en la data de la grafica el valor correspondiente
      this.PolarChartData2 = [
       { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
        this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

      ]

    }
    else if (mes == '12') {
      this.diciembreDinero += this.precioDomingo ;//incrementamos

      //instroducimos en la data de la grafica el valor correspondiente
      this.PolarChartData2 = [
       { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
        this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

      ]

    }

             //console.log(memberArray[index]);

        }

      })
     }
     else if ( this.id == 'doblaje'){

   /* recuperamos todos y los cargamos en la grafica Line */

      this._controlService.getDoblajes().subscribe(data=>{
        this.todosDoblajes = data
      //con esto convertimos los valores del objeto que nos devuelve en un array
        //NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);

        const memberArray = Object.values(this.todosDoblajes);

      //recorremos el Array ( vienen en el las fechas en un string)
        for (let index = 0; index < memberArray.length; index++) {

              this.fechasBD = memberArray[index];
              let mes = this.fechasBD.substr(5,2);//almacenamos el mes

              console.log ( this.fechasBD )

              if (mes == '01') {

                this.eneroDoblaje ++ ;//incrementamos

             }
             else if(mes == '02'){

              this.febreroDoblaje ++;
             }
             else if(mes == '03'){

              this.marzoDoblaje ++;
             }
             else if(mes == '04'){


              this.abrilDoblaje ++;
             }
             else if(mes == '05'){

              this.mayoDoblaje ++;
             }
             else if(mes == '06'){

              this.junioDoblaje ++;
             }
             else if(mes == '07'){

              this.julioDoblaje ++;
             }
             else if(mes == '08'){

              this.agostoDoblaje ++;
             }
             else if(mes == '09'){

              this.septiembreDoblaje ++;
             }
             else if(mes == '10'){

              this.octubreDoblaje ++;
             }
             else if(mes == '11'){

              this.noviembreDoblaje ++;
             }
             else if(mes == '12'){

              this.diciembreDoblaje ++;
             }

        }
        //instroducimos en la data de la grafica el valor correspondiente

        this.lineChartData.push(
          { data: [this.eneroDoblaje, this.febreroDoblaje, this.marzoDoblaje, this.abrilDoblaje,this.mayoDoblaje, this.junioDoblaje,
           this.julioDoblaje,this.agostoDoblaje,this.septiembreDoblaje,this.octubreDoblaje,this.noviembreDoblaje,this.diciembreDoblaje], label: 'Doblajes' ,
           backgroundColor:  "#D0F515"},



        )

      })

     /* recuperamos todos y los cargamos en la grafica PolarChart del dinero ganado */

      this._controlService.getDoblajes().subscribe(data=>{
        this.todosDoblajes = data

      //con esto convertimos los valores del objeto que nos devuelve en un array
        //NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);

        const memberArray = Object.values(this.todosDoblajes);

      //recorremos el Array ( vienen en el las fechas en un string)
        for (let index = 0; index < memberArray.length; index++) {

              this.fechasBD = memberArray[index];
              let mes = this.fechasBD.substr(5,2);//almacenamos el mes

              if (mes == '01') {
                this.eneroDinero  = this.eneroDinero + this.precioDoblaje ;//incrementamos

                //instroducimos en la data de la grafica el valor correspondiente
                this.PolarChartData2 = [
                 { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
                  this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

                ]

             }
             else if (mes == '02') {
              this.febreroDinero = this.febreroDinero  + this.precioDoblaje;//incrementamos

              //instroducimos en la data de la grafica el valor correspondiente
              this.PolarChartData2 = [
               { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
                this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

              ]

           }
           else if (mes == '03') {
            this.marzoDinero += this.precioDoblaje ;//incrementamos

            //instroducimos en la data de la grafica el valor correspondiente
            this.PolarChartData2 = [
             { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
              this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

            ]

         }
         else if (mes == '04') {
          this.abrilDinero += this.precioDoblaje ;//incrementamos

          //instroducimos en la data de la grafica el valor correspondiente
          this.PolarChartData2 = [
           { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
            this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

          ]

       }

              else if (mes == '05') {
                 this.mayoDinero += this.precioDoblaje ;//incrementamos

                 //instroducimos en la data de la grafica el valor correspondiente
                 this.PolarChartData2 = [
                  { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
                    this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

                  ]

              }
              else if (mes == '06') {
                this.junioDinero += this.precioDoblaje ;//incrementamos

                //instroducimos en la data de la grafica el valor correspondiente
                this.PolarChartData2 = [
                  { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
                    this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

                  ]

             }
             else if (mes == '07') {
              this.julioDinero += this.precioDoblaje;//incrementamos

              //instroducimos en la data de la grafica el valor correspondiente
              this.PolarChartData2 = [
               { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
                this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

              ]

           }
           else if (mes == '08') {
            this.agostoDinero += this.precioDoblaje ;//incrementamos

            //instroducimos en la data de la grafica el valor correspondiente
            this.PolarChartData2= [
             { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
              this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

            ]

         }
         else if (mes == '09') {
          this.septiembreDinero += this.precioDoblaje ;//incrementamos

          //instroducimos en la data de la grafica el valor correspondiente
          this.PolarChartData2 = [
           { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
            this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

          ]

       }
       else if (mes == '10') {
        this.octubreDinero+= this.precioDoblaje ;//incrementamos

        //instroducimos en la data de la grafica el valor correspondiente
        this.PolarChartData2 = [
         { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
          this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

        ]

     }
     else if (mes == '11') {
      this.noviembreDinero += this.precioDoblaje ;//incrementamos

      //instroducimos en la data de la grafica el valor correspondiente
      this.PolarChartData2 = [
       { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
        this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

      ]

    }
    else if (mes == '12') {
      this.diciembreDinero += this.precioDoblaje ;//incrementamos

      //instroducimos en la data de la grafica el valor correspondiente
      this.PolarChartData2 = [
       { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
        this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

      ]

    }

             //console.log(memberArray[index]);

        }

      })
     }
     else if ( this.id == 'festivo') {
      this._controlService.getFestivos().subscribe(data=>{
        this.todosFestivos = data
      //con esto convertimos los valores del objeto que nos devuelve en un array
        //NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);

        const memberArray = Object.values(this.todosFestivos);

      //recorremos el Array ( vienen en el las fechas en un string)
        for (let index = 0; index < memberArray.length; index++) {

              this.fechasBD = memberArray[index];
              let mes = this.fechasBD.substr(5,2);//almacenamos el mes

              console.log ( this.fechasBD )

              if (mes == '01') {

                this.eneroFestivo ++ ;//incrementamos

             }
             else if(mes == '02'){

              this.febreroFestivo ++;
             }
             else if(mes == '03'){

              this.marzoFestivo ++;
             }
             else if(mes == '04'){


              this.abrilFestivo ++;
             }
             else if(mes == '05'){

              this.mayoFestivo ++;
             }
             else if(mes == '06'){

              this.junioFestivo ++;
             }
             else if(mes == '07'){

              this.julioFestivo ++;
             }
             else if(mes == '08'){

              this.agostoFestivo ++;
             }
             else if(mes == '09'){

              this.septiembreFestivo ++;
             }
             else if(mes == '10'){

              this.octubreFestivo ++;
             }
             else if(mes == '11'){

              this.noviembreFestivo ++;
             }
             else if(mes == '12'){

              this.diciembreFestivo ++;
             }

        }
        //instroducimos en la data de la grafica el valor correspondiente

        this.lineChartData.push(
          { data: [this.eneroFestivo, this.febreroFestivo, this.marzoFestivo, this.abrilFestivo,this.mayoFestivo, this.junioFestivo,
           this.julioFestivo,this.agostoFestivo,this.septiembreFestivo,this.octubreFestivo,this.noviembreFestivo,this.diciembreFestivo], label: 'Festivos',
          backgroundColor: "#F31E35" },



        )

      })
       /* recuperamos todos y los cargamos en la grafica PolarChart del dinero ganado */

       this._controlService.getFestivos().subscribe(data=>{
        this.todosFestivos = data

      //con esto convertimos los valores del objeto que nos devuelve en un array
        //NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);

        const memberArray = Object.values(this.todosFestivos);

      //recorremos el Array ( vienen en el las fechas en un string)
        for (let index = 0; index < memberArray.length; index++) {

              this.fechasBD = memberArray[index];
              let mes = this.fechasBD.substr(5,2);//almacenamos el mes

              if (mes == '01') {
                this.eneroDinero  = this.eneroDinero + this.precioFestivo ;//incrementamos

                //instroducimos en la data de la grafica el valor correspondiente
                this.PolarChartData2 = [
                 { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
                  this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

                ]

             }
             else if (mes == '02') {
              this.febreroDinero = this.febreroDinero  + this.precioFestivo;//incrementamos

              //instroducimos en la data de la grafica el valor correspondiente
              this.PolarChartData2 = [
               { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
                this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

              ]

           }
           else if (mes == '03') {
            this.marzoDinero += this.precioFestivo ;//incrementamos

            //instroducimos en la data de la grafica el valor correspondiente
            this.PolarChartData2 = [
             { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
              this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

            ]

         }
         else if (mes == '04') {
          this.abrilDinero += this.precioFestivo ;//incrementamos

          //instroducimos en la data de la grafica el valor correspondiente
          this.PolarChartData2 = [
           { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
            this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

          ]

       }

              else if (mes == '05') {
                 this.mayoDinero += this.precioFestivo ;//incrementamos

                 //instroducimos en la data de la grafica el valor correspondiente
                 this.PolarChartData2 = [
                  { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
                    this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

                  ]

              }
              else if (mes == '06') {
                this.junioDinero += this.precioFestivo ;//incrementamos

                //instroducimos en la data de la grafica el valor correspondiente
                this.PolarChartData2 = [
                  { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
                    this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

                  ]

             }
             else if (mes == '07') {
              this.julioDinero += this.precioFestivo;//incrementamos

              //instroducimos en la data de la grafica el valor correspondiente
              this.PolarChartData2 = [
               { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
                this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

              ]

           }
           else if (mes == '08') {
            this.agostoDinero += this.precioFestivo ;//incrementamos

            //instroducimos en la data de la grafica el valor correspondiente
            this.PolarChartData2= [
             { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
              this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

            ]

         }
         else if (mes == '09') {
          this.septiembreDinero += this.precioFestivo ;//incrementamos

          //instroducimos en la data de la grafica el valor correspondiente
          this.PolarChartData2 = [
           { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
            this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

          ]

       }
       else if (mes == '10') {
        this.octubreDinero+= this.precioFestivo ;//incrementamos

        //instroducimos en la data de la grafica el valor correspondiente
        this.PolarChartData2 = [
         { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
          this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

        ]

     }
     else if (mes == '11') {
      this.noviembreDinero += this.precioFestivo ;//incrementamos

      //instroducimos en la data de la grafica el valor correspondiente
      this.PolarChartData2 = [
       { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
        this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

      ]

    }
    else if (mes == '12') {
      this.diciembreDinero += this.precioFestivo ;//incrementamos

      //instroducimos en la data de la grafica el valor correspondiente
      this.PolarChartData2 = [
       { data: [this.eneroDinero, this.febreroDinero, this.marzoDinero, this.abrilDinero,this.mayoDinero, this.junioDinero,
        this.julioDinero,this.agostoDinero,this.septiembreDinero,this.octubreDinero,this.noviembreDinero,this.diciembreDinero], label: 'Sabados' },

      ]

    }

             //console.log(memberArray[index]);

        }

      })
     }
  { }



}

//funciones predefinidas para el grafico tipo Line de días trabajados por mes
public lineChartOptions: ChartOptions = {
  responsive: true,
};
public lineChartLabels: Label[] = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
   'Julio','Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
public lineChartType: ChartType = 'line';
public lineChartLegend = false;
public lineChartPlugins = [];


public lineChartData: ChartDataSets[] = [


];
//funciones predefinidas para el grafico tipo PolarChart de días trabajados por mes

public PolarChartOptions2: ChartOptions = {
  responsive: true,
};
public PolarChartLabels2: Label[] = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
   'Julio','Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
public PolarChartType2: ChartType = 'polarArea';
public PolarChartLegend2 = false;
public PolarChartPlugins2 = [];


public PolarChartData2: ChartDataSets[] = [


];

//funcion para captar el dia seleccionado
seleccionDia(){

  switch (this.selected?.getDay()) {
    case 0:
      this.dia = "Sunday";
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
return this.dia;
}




anadir(){
  console.log( 'Selected: '+ this.selected )
  console.log( this.seleccionDia())
//en caso de que el parametro sea:
  switch( this.id ){
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
          this.valor.push(this.selected )
        }
   else {
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
//se eliminan los elementos seleccionados
eliminar ( idx:any) {
  this.valor.splice(idx, 1);

}

//insertamos en la BD
/*Nota: Tomamos como referencia el parametro y en dependencia de su valor
insertamos en la BD */
guardar(idx:number){
  if( this.id === 'sabado' ){

    this._controlService.insertarSabado( this.valor[idx] ).subscribe( (data:any)=>{
         console.log( "esta data inserta "+ this.valor[idx])
    })
      //ponemos un retraso al recagar el componente
      setTimeout(()=>
      {
        this.router.navigateByUrl('/RefrshComponent', {skipLocationChange: true}).then(()=> this.router.navigate(['modal', this.id ] ));
      },2000);

   this.snackBar.open('Sabado agregado', 'Cerrar' ,{ duration: 3000});//mensaje al añadir( de angular material)

  } else if(  this.id === 'domingo'){
    this._controlService.insertarDomingo( this.valor[idx] ).subscribe( (data:any)=>{
    })
    //ponemos un retraso al recagar el componente
    setTimeout(()=>
{
  this.router.navigateByUrl('/RefrshComponent', {skipLocationChange: true}).then(()=> this.router.navigate(['modal', this.id ] ));
},2000);
// mensaje al añadir( de angular material)
    this.snackBar.open('Domingo agregado', 'Cerrar' ,{ duration: 3000});

  }else if(  this.id === 'doblaje'){
    console.log ( this.valor[idx])
    this._controlService.insertarDoblaje( this.valor[idx] ).subscribe( (data:any)=>{
    });
    //ponemos un retraso al recagar el componente
    setTimeout(()=>
{
  this.router.navigateByUrl('/RefrshComponent', {skipLocationChange: true}).then(()=> this.router.navigate(['modal', this.id ] ));
},2000);
    this.snackBar.open('Doblaje agregado', 'Cerrar' ,{ duration: 3000});// mensaje al añadir( de angular material)

  }else if(  this.id === 'festivo'){
    this._controlService.insertarFestivo( this.valor[idx] ).subscribe( (data:any)=>{
    });
    //ponemos un retraso al recagar el componente
    setTimeout(()=>
{
  this.router.navigateByUrl('/RefrshComponent', {skipLocationChange: true}).then(()=> this.router.navigate(['modal', this.id ] ));
},2000);
    this.snackBar.open('Festivo agregado', 'Cerrar' ,{ duration: 3000});// mensaje al añadir( de angular material)

}


//para que se refresque el componente donde aparecen los dias y ver lo que se va guardando

//para recargar la página entera
//window.location.reload();




}





ngOnInit(): void {

}



}




