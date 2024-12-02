export interface Ability {
    ability: {
      name: string;
      url: string;
    };
  }
  
  export interface Sprites {
    front_default: string;
    back_default: string;
    front_shiny: string;
    back_shiny: string;
  }
  
  export interface PokemonResponse {
    id: number;
    name: string;
    height: number;
    weight: number;
    base_experience: number;
    abilities: Ability[];
    sprites: Sprites;
    url?: string;
  }
  
  export interface FavoritePokemon extends PokemonResponse {
    isFavorite: boolean;
  }
  