import { PokemonType } from "../interfaces/pokemon";
import { RequestListOptionsType } from "../interfaces/request";
import { api } from "./api";

export async function getPokemonSpecieRequest(name: string) {
  const res = await api.get(`pokemon-species/${name}`);
  return res.data;
}

export async function getPokemonRequest(name: string) {
  const res = await api.get<PokemonType>(`/pokemon/${name}`);
  return res.data;
}

export async function getPokemonsRequest(
  requestListOptions?: RequestListOptionsType
) {
  const res = await api.get("/pokemon", {
    params: {
      ...requestListOptions,
      limit: requestListOptions?.limit ?? 10
    }
  });

  return res.data;
}