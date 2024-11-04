export interface Ability {
    ability: {
      name: string;
      url: string;
    };
  }
  
  export interface Sprites {
    front_default: string;
  }
  
  export interface PokemonResponse {
    id: number;
    name: string;
    height: number;
    weight: number;
    base_experience: number;
    abilities: Ability[];
    sprites: Sprites;
    url?: string; // Agregamos la propiedad 'url', que puede ser opcional
  }
  
  // Crea una nueva interfaz para Pokémon que incluya la propiedad isFavorite
  export interface FavoritePokemon extends PokemonResponse {
    isFavorite: boolean; // Propiedad adicional
  }
  