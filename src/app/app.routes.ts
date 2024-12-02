import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { DetallesComponent } from './modules/detalles/detalles.component';
import { FavoritosComponent } from './modules/favoritos/favoritos.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch:'full' },
    { path: 'home', component: HomeComponent },
    { path: 'detalles/:id', component: DetallesComponent },
    { path: 'favoritos', component: FavoritosComponent }
];
