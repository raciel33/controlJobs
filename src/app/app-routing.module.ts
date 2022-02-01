import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'home',component:HomeComponent },
  { path: 'navbar',component:NavbarComponent },
  { path: 'login',component:LoginComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'login' },

];



export const APP_ROUTES = RouterModule.forRoot( routes );

