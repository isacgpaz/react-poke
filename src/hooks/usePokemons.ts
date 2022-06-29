import { useQuery } from "react-query"
import { ListPokemonRequestType, PokemonType } from "../interfaces/pokemon";
import { RequestListOptionsType } from "../interfaces/request";
import { getPokemonRequest, getPokemonsRequest } from "../services/pokemon";

export const usePokemons = (requestListOptions?: RequestListOptionsType) => {
  return useQuery<ListPokemonRequestType>(
    ["pokemons", requestListOptions],
    () => getPokemonsRequest(requestListOptions)
  );
}

export const usePokemon = (nameOrId: string) => {
  return useQuery<PokemonType>(
    ["pokemon", nameOrId],
    () => getPokemonRequest(nameOrId)
  );
}