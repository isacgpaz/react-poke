import { useQuery } from "react-query"
import { ListPokemonRequestType, PokemonSpecieType, PokemonType } from "../interfaces/pokemon";
import { RequestListOptionsType } from "../interfaces/request";
import { getPokemonRequest, getPokemonSpecieRequest, getPokemonsRequest } from "../services/pokemon";

export const usePokemons = (requestListOptions?: RequestListOptionsType) => {
  return useQuery<ListPokemonRequestType>(
    ["pokemons", requestListOptions],
    () => getPokemonsRequest(requestListOptions)
  );
}

export const usePokemon = (nameOrId: string) => {
  return useQuery<PokemonType>(
    ["pokemon", nameOrId],
    () => getPokemonRequest(nameOrId),
    {
      enabled: !!nameOrId
    }
  );
}

export const usePokemonSpecie = (nameOrId: string) => {
  return useQuery<PokemonSpecieType>(
    ["pokemon-specie", nameOrId],
    () => getPokemonSpecieRequest(nameOrId),
    {
      enabled: !!nameOrId
    }
  );
}