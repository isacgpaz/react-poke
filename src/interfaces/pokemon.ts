export type PokemonType = {
  name: string;
  order: number;
  height: number;
  weight: number;
  base_experience: number;
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
  }];
  stats: [{
    base_stat: 45,
    stat: {
      name: string;
    }
  }];
}

export type ListPokemonRequestType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonType[];
}