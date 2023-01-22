import { useQuery } from "react-query";
import {
  ListPokemonRequestType,
  PokemonSpecieType,
  PokemonType,
} from "../interfaces/pokemon";
import { RequestListOptionsType } from "../interfaces/request";
import {
  getPokemonRequest,
  getPokemonSpecieRequest,
  getPokemonsRequest,
} from "../services/pokemon";

export const usePokemons = (requestListOptions?: RequestListOptionsType) => {
  return useQuery<ListPokemonRequestType>(
    ["pokemons", requestListOptions],
    () => getPokemonsRequest(requestListOptions),
    {
      staleTime: 1000 * 60 * 30,
    }
  );
};

export const usePokemon = (name: string) => {
  return useQuery<PokemonType>(
    ["pokemon", name],
    () => getPokemonRequest(name),
    {
      enabled: !!name,
      retry: false,
      staleTime: 1000 * 60 * 30,
    }
  );
};

export const usePokemonSpecie = (name: string) => {
  return useQuery<PokemonSpecieType>(
    ["pokemonSpecie", name],
    () => getPokemonSpecieRequest(name),
    {
      enabled: !!name,
      staleTime: 1000 * 60 * 30,
    }
  );
};
