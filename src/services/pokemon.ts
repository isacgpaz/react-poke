import { PokemonType } from "../interfaces/pokemon";
import { RequestListOptionsType } from "../interfaces/request";
import { api } from "./api";

export async function getPokemonRequest(nameOrId: string) {
  const res = await api.get<PokemonType>(`/pokemon/${nameOrId}`);
  return res.data;
}

export async function getPokemonsRequest(
  requestListOptions?: RequestListOptionsType
) {
  console.log(requestListOptions)
  const { data } = await api.get("/pokemon", {
    params: {
      ...requestListOptions,
      limit: requestListOptions?.limit ?? 10
    }
  });

  const results = await Promise.all(
    data.results.map(({ name }: PokemonType) => getPokemonRequest(name))
  );

  return {
    ...data,
    results
  };
}