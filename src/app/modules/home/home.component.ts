import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HeaderComponent } from "../../components/header/header.component";
import { MatListModule } from '@angular/material/list';
import { PokeApiService } from '../../services/poke-api.service';
import { PokemonResponse } from '../../models/pokemon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MatListModule], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokemones: PokemonResponse[] = [];

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokeApiService.getAllPokemones().subscribe({
      next: (response) => {
        console.log(response); 
        this.pokemones = response.results; 
      },
      error: (err) => console.error('Error fetching Pokémon data:', err)
    });
  }
}
