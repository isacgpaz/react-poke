export type PokemonType = {
  name: string;
  order: number;
  color: {
    name: string;
  };
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      }
    }
  };
  types: [{
    type: {
      name: string;
    }
  }]
}

export type ListPokemonRequestType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonType[];
}