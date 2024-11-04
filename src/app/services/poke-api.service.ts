import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonResponse } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private url = 'https://pokeapi.co/api/v2/pokemon?limit=20'; // Limitamos a 20 resultados para la prueba

  constructor(private http: HttpClient) {}

  getAllPokemones(): Observable<{ results: PokemonResponse[] }> {
    return this.http.get<{ results: PokemonResponse[] }>(this.url);
  }

  getPokemonById(id: string): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }  
}
