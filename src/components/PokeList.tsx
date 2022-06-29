import { Spinner } from "phosphor-react";
import { usePokemons } from "../hooks/usePokemons";
import { PokeCard } from "./PokeCard";

export function PokeList() {
  const { data, isLoading } = usePokemons({ limit: 50 });

  if (isLoading) {
    return (
      <Spinner
        size={36}
        weight="bold"
        className="text-orange-500 animate-spin"
      />
    )
  }

  return (
    <div className="flex flex-col gap-8 w-full">
      {data?.results?.map((pokemon) => <PokeCard key={pokemon?.order} {...pokemon} />)}
    </div>
  );
}