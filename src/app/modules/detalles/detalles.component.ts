import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeApiService } from '../../services/poke-api.service';
import { PokemonResponse } from '../../models/pokemon';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {
  pokemon: PokemonResponse | null = null;

  constructor(
    private route: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pokeApiService.getPokemonById(id).subscribe({
        next: (response) => {
          this.pokemon = response;
        },
        error: (err) => console.error('Error fetching Pokémon details:', err)
      });
    }
  }
}
