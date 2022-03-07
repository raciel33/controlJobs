import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { ModalCalendarComponent } from './components/modal-calendar/modal-calendar.component';
import { HistoricoComponent } from './components/historico/historico.component';

const routes: Routes = [
  { path: 'home',component:HomeComponent },
  { path: 'navbar',component:NavbarComponent },
  { path: 'login',component:LoginComponent },
  { path: 'modal/:id',component:ModalCalendarComponent },
  { path: 'historico',component:HistoricoComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' },

];



export const APP_ROUTES = RouterModule.forRoot( routes );

