import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { HeaderComponent } from "../../components/header/header.component";
import { MatListModule } from '@angular/material/list';
import { PokeApiService } from '../../services/poke-api.service';
import { FavoritePokemon } from '../../models/pokemon';
import { PokemoNamePipe } from '../../pipes/pokemo-name.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MatListModule, PokemoNamePipe], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokemones: FavoritePokemon[] = [];
  favoritos: FavoritePokemon[] = [];
  isModalOpen : boolean = false;

  openModal(): void {
    this.isModalOpen = true;
  }
  
  closeModal(): void {
    this.isModalOpen = false;
  }

  constructor(private pokeApiService: PokeApiService, private router: Router) {}

  ngOnInit(): void {
    this.pokeApiService.getAllPokemones().subscribe({
      next: (response) => {
        this.pokemones = response.results.map(pokemon => ({
          ...pokemon,
          isFavorite: false 
        })) as FavoritePokemon[];
      },
      error: (err) => console.error('Error fetching Pokémon data:', err)
    });
  }

  toggleFavorite(pokemon: FavoritePokemon): void {
    const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
  
    if (!pokemon.isFavorite) {
      if (favoritos.length >= 5) {
        this.openModal(); 
        return; 
      }
  
      const id = this.extractIdFromUrl(pokemon.url || '');
      this.pokeApiService.getPokemonById(id).subscribe({
        next: (fullPokemon) => {
          const favoritePokemon: FavoritePokemon = {
            ...fullPokemon,
            isFavorite: true,
          };
  
          favoritos.push(favoritePokemon);
          localStorage.setItem('favoritos', JSON.stringify(favoritos));
  
          this.favoritos = favoritos;
        },
        error: (err) => console.error('Error fetching Pokémon details:', err),
      });
    } else {
      const updatedFavoritos = favoritos.filter((fav: FavoritePokemon) => fav.id !== pokemon.id);
      localStorage.setItem('favoritos', JSON.stringify(updatedFavoritos));
      this.favoritos = updatedFavoritos;
    }
  
    pokemon.isFavorite = !pokemon.isFavorite;
  }  

  viewPokemonDetails(url?: string): void {
    if (url) {
      const id = this.extractIdFromUrl(url);
      this.router.navigate(['/detalles', id]);
    } else {
      console.error('URL is undefined');
    }
  }

  private extractIdFromUrl(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2];
  }
}
