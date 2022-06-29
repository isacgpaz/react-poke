export type PokemonType = {
  name: string;
  order: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      }
    }
  }
}

export type ListPokemonRequestType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonType[];
}