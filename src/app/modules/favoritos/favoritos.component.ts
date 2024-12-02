import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FavoritePokemon } from '../../models/pokemon';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [HeaderComponent, CommonModule, MatCardModule],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.scss'
})
export class FavoritosComponent implements OnInit {
  favoritos : FavoritePokemon[] = []
  isModalOpen : boolean = false;
  pokemonToDelete: FavoritePokemon | null = null;

  openModal(pokemon: FavoritePokemon): void {
    this.isModalOpen = true;
    this.pokemonToDelete = pokemon; 
  }
  
  closeModal(): void {
    this.isModalOpen = false;
    this.pokemonToDelete = null;
  }
  

  ngOnInit(): void {
    const favoritosFromStorage = localStorage.getItem('favoritos');
    this.favoritos = favoritosFromStorage ? JSON.parse(favoritosFromStorage) : [];
  }  

  removeFromFavorites(pokemon: FavoritePokemon): void {
    this.favoritos = this.favoritos.filter(fav => fav.id !== pokemon.id);
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
  }
  
  confirmDeletion(): void {
    if (this.pokemonToDelete) {
      this.favoritos = this.favoritos.filter(fav => fav.id !== this.pokemonToDelete!.id);
      localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
      this.closeModal();
    }
  }
}
