//importamos el http para poder hacer peticiones http
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
//rutas
import { APP_ROUTES } from './app-routing.module';

//componentes
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HistoricoComponent } from './components/historico/historico.component';
import { ModalCalendarComponent } from './components/modal-calendar/modal-calendar.component';
import { GraphicComponent } from './components/graphic/graphic.component';
import { CalendarioComponent } from './components/calendario/calendario.component';

//servicio
import { ControlJobsServiceService } from './services/control-jobs-service.service';

//angular material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

//graficos
import { ChartsModule } from 'ng2-charts';


import { environment } from './../environments/environment';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    HistoricoComponent,
    ModalCalendarComponent,
    GraphicComponent,
    CalendarioComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    materialModules,
    ChartsModule,
    FormsModule,HttpClientModule

  ],
  providers: [
    ControlJobsServiceService
  ],
  exports: [
     materialModules
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
