import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { DetallesComponent } from './modules/detalles/detalles.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch:'full' },
    { path: 'home', component: HomeComponent },
    { path: 'detalles/:id', component: DetallesComponent }
];
