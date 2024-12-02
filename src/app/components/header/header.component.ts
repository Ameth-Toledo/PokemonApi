import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor (private router : Router) {}

  enviarFavoritos(event : Event) {
    event.preventDefault();
    this.router.navigate(['/favoritos']);
  }

  enviarHome(event : Event) {
    event.preventDefault();
    this.router.navigate(['/home']);
  }

  enviarDetalles(event : Event) {
    event.preventDefault();
    this.router.navigate(['/detalles/1']);
  }
}
