import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { HeaderComponent } from "../../components/header/header.component";
import { MatListModule } from '@angular/material/list';
import { PokeApiService } from '../../services/poke-api.service';
import { FavoritePokemon } from '../../models/pokemon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MatListModule], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokemones: FavoritePokemon[] = [];

  constructor(private pokeApiService: PokeApiService, private router: Router) {}

  ngOnInit(): void {
    this.pokeApiService.getAllPokemones().subscribe({
      next: (response) => {
        console.log(response); 
        this.pokemones = response.results.map(pokemon => ({
          ...pokemon,
          isFavorite: false // Añade isFavorite a cada Pokémon
        })) as FavoritePokemon[]; // Asegúrate de que sea del tipo FavoritePokemon
      },
      error: (err) => console.error('Error fetching Pokémon data:', err)
    });
  }

  toggleFavorite(pokemon: FavoritePokemon): void {
    pokemon.isFavorite = !pokemon.isFavorite; 
  }

  viewPokemonDetails(url?: string): void {
    if (url) {
      const id = this.extractIdFromUrl(url);
      this.router.navigate(['/detalles', id]);
    } else {
      console.error('URL is undefined'); // Manejo de error
    }
  }

  private extractIdFromUrl(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2];
  }
}
