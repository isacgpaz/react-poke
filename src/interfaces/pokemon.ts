type PokemonColorType = {
  color: {
    name: string;
  }
}

export type PokemonSpecieType = PokemonColorType & {
  flavor_text_entries: [{
    flavor_text: string;
    language: {
      name: string;
    }
  }];
  habitat: {
    name: string;
  };
  shape: {
    name: string;
  },
  has_gender_differences: boolean;
}

export type PokemonType = PokemonColorType & {
  name: string;
  id: number;
  height: number;
  weight: number;
  base_experience: number;
  abilities: [{
    ability: {
      name: string;
    }
  }];
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
  results: [{
    name: string;
  }];
}