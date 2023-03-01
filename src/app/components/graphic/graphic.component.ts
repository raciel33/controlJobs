import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Observable } from 'rxjs';
import { ControlJobsServiceService } from '../../services/control-jobs-service.service';
@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {


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

//variable que recogeran los festios por mes
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

 todosSabados:any[]  ;
 todosDomingos:any[]  ;
 todosDoblajes:any[]  ;
 todosFestivos:any[]  ;




  constructor(private _controlService:ControlJobsServiceService) {



   //cargamos todos los sabados
   this._controlService.getSabados().subscribe(data=>{
    this.todosSabados = data

  //con esto convertimos los valores del objeto que nos devuelve en un array
    //NOTA: Si quisieramos obtener las keys en vez de los valores seria :const memberArray = Object.keys(this.sabados);

    const memberArray = Object.values(this.todosSabados);

  //recorremos el Array ( vienen en el las fechas en un string)
    for (let index = 0; index < memberArray.length; index++) {

          this.fechasBD = memberArray[index];
          let mes = this.fechasBD.substr(5,2);//almacenamos el mes

          if (mes == '01') {
            this.enero ++ ;//incrementamos

            //instroducimos en la data de la grafica el valor correspondiente
            this.barChartData = [
             { data: [this.enero, this.febrero, this.marzo, this.abril,this.mayo, this.junio,
              this.julio,this.agosto,this.septiembre,this.octubre,this.noviembre,this.diciembre], label: 'Sabados' },

            ]

         }
         else if (mes == '02') {
          this.febrero ++ ;//incrementamos

          //instroducimos en la data de la grafica el valor correspondiente
          this.barChartData = [
           { data: [this.enero, this.febrero, this.marzo, this.abril,this.mayo, this.junio,
            this.julio,this.agosto,this.septiembre,this.octubre,this.noviembre,this.diciembre], label: 'Sabados' },

          ]

       }
       else if (mes == '03') {
        this.marzo ++ ;//incrementamos

        //instroducimos en la data de la grafica el valor correspondiente
        this.barChartData = [
         { data: [this.enero, this.febrero, this.marzo, this.abril,this.mayo, this.junio,
          this.julio,this.agosto,this.septiembre,this.octubre,this.noviembre,this.diciembre], label: 'Sabados' },

        ]

     }
     else if (mes == '04') {
      this.abril ++ ;//incrementamos

      //instroducimos en la data de la grafica el valor correspondiente
      this.barChartData = [
       { data: [this.enero, this.febrero, this.marzo, this.abril,this.mayo, this.junio,
        this.julio,this.agosto,this.septiembre,this.octubre,this.noviembre,this.diciembre], label: 'Sabados' },

      ]

   }

          else if (mes == '05') {
             this.mayo ++ ;//incrementamos

             //instroducimos en la data de la grafica el valor correspondiente
             this.barChartData = [
              { data: [this.enero, this.febrero, this.marzo, this.abril,this.mayo, this.junio,
               this.julio,this.agosto,this.septiembre,this.octubre,this.noviembre,this.diciembre], label: 'Sabados' },

             ]

          }
          else if (mes == '06') {
            this.junio ++ ;//incrementamos

            //instroducimos en la data de la grafica el valor correspondiente
            this.barChartData = [
              { data: [this.enero, this.febrero, this.marzo, this.abril,this.mayo, this.junio,
               this.julio,this.agosto,this.septiembre,this.octubre,this.noviembre,this.diciembre], label: 'Sabados' },

             ]

         }
         else if (mes == '07') {
          this.julio ++ ;//incrementamos

          //instroducimos en la data de la grafica el valor correspondiente
          this.barChartData = [
           { data: [this.enero, this.febrero, this.marzo, this.abril,this.mayo, this.junio,
            this.julio,this.agosto,this.septiembre,this.octubre,this.noviembre,this.diciembre], label: 'Sabados' },

          ]

       }
       else if (mes == '08') {
        this.agosto ++ ;//incrementamos

        //instroducimos en la data de la grafica el valor correspondiente
        this.barChartData = [
         { data: [this.enero, this.febrero, this.marzo, this.abril,this.mayo, this.junio,
          this.julio,this.agosto,this.septiembre,this.octubre,this.noviembre,this.diciembre], label: 'Sabados' },

        ]

     }
     else if (mes == '09') {
      this.septiembre ++ ;//incrementamos

      //instroducimos en la data de la grafica el valor correspondiente
      this.barChartData = [
       { data: [this.enero, this.febrero, this.marzo, this.abril,this.mayo, this.junio,
        this.julio,this.agosto,this.septiembre,this.octubre,this.noviembre,this.diciembre], label: 'Sabados' },

      ]

   }
   else if (mes == '10') {
    this.octubre++ ;//incrementamos

    //instroducimos en la data de la grafica el valor correspondiente
    this.barChartData = [
     { data: [this.enero, this.febrero, this.marzo, this.abril,this.mayo, this.junio,
      this.julio,this.agosto,this.septiembre,this.octubre,this.noviembre,this.diciembre], label: 'Sabados' },

    ]

 }
 else if (mes == '11') {
  this.noviembre ++ ;//incrementamos

  //instroducimos en la data de la grafica el valor correspondiente
  this.barChartData = [
   { data: [this.enero, this.febrero, this.marzo, this.abril,this.mayo, this.junio,
    this.julio,this.agosto,this.septiembre,this.octubre,this.noviembre,this.diciembre], label: 'Sabados' },

  ]

}
else if (mes == '12') {
  this.diciembre ++ ;//incrementamos

  //instroducimos en la data de la grafica el valor correspondiente
  this.barChartData = [
   { data: [this.enero, this.febrero, this.marzo, this.abril,this.mayo, this.junio,
    this.julio,this.agosto,this.septiembre,this.octubre,this.noviembre,this.diciembre], label: 'Sabados' },

  ]

}

         //console.log(memberArray[index]);

    }

  })

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

    this.barChartData.push(
      { data: [this.eneroDomingo, this.febreroDomingo, this.marzoDomingo, this.abrilDomingo,this.mayoDomingo, this.junioDomingo,
       this.julioDomingo,this.agostoDomingo,this.septiembreDomingo,this.octubreDomingo,this.noviembreDomingo,this.diciembreDomingo], label: 'Domingos',
      backgroundColor:  "#198BB6" },



    )

  })
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

    this.barChartData.push(
      { data: [this.eneroDoblaje, this.febreroDoblaje, this.marzoDoblaje, this.abrilDoblaje,this.mayoDoblaje, this.junioDoblaje,
       this.julioDoblaje,this.agostoDoblaje,this.septiembreDoblaje,this.octubreDoblaje,this.noviembreDoblaje,this.diciembreDoblaje], label: 'Doblajes' ,
       backgroundColor:  "#D0F515"},



    )

  })
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

    this.barChartData.push(
      { data: [this.eneroFestivo, this.febreroFestivo, this.marzoFestivo, this.abrilFestivo,this.mayoFestivo, this.junioFestivo,
       this.julioFestivo,this.agostoFestivo,this.septiembreFestivo,this.octubreFestivo,this.noviembreFestivo,this.diciembreFestivo], label: 'Festivos',
      backgroundColor: "#F31E35" },



    )

  })
   }

   public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
     'Julio','Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];


  public barChartData: ChartDataSets[] = [


  ];
  ngOnInit(): void {


  }





}
