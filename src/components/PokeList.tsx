import classNames from "classnames";
import { ArrowLeft, ArrowRight, House } from "phosphor-react";

import { usePokemon, usePokemons } from "../hooks/usePokemons";
import { EmptyListSearch } from "./EmptyListSearch";
import { PokeCard } from "./PokeCard";
import { Spinner } from "./Spinner";

import { LIMIT } from "../constants/list";
import { useList } from "../hooks/useList";

type PokeListProps = {
  search: string;
};

export function PokeList({ search }: PokeListProps) {
  const { isGrid, limit, offset, setOffset, toPreviousPage, toNextPage } =
    useList();

  const { data: list, isLoading } = usePokemons({
    limit,
    offset,
  });

  const parsedIntSearch = parseInt(search);

  const query = isNaN(parsedIntSearch)
    ? search.toLocaleLowerCase()
    : parsedIntSearch.toString();

  const {
    data: pokemon,
    isLoading: isPokemonDetailsLoading,
    isError: isPokemonDetailsError,
  } = usePokemon(query);

  if (isLoading || isPokemonDetailsLoading) {
    return <Spinner />;
  }

  if (isPokemonDetailsError) {
    return <EmptyListSearch />;
  }

  return (
    <div className="flex flex-col gap-8 justify-between w-full flex-1">
      <div
        className={classNames({
          "flex flex-col gap-8": !isGrid,
          "grid grid-cols-2 gap-4": isGrid,
        })}
      >
        {pokemon ? (
          <PokeCard {...pokemon} />
        ) : (
          list?.results?.map((pokemon) => (
            <PokeCard key={pokemon?.name} {...pokemon} />
          ))
        )}
      </div>

      {!pokemon && (
        <div className="flex justify-between pb-4">
          <button
            onClick={toPreviousPage}
            disabled={!list?.previous}
            className="flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-no-drop"
          >
            <ArrowLeft weight="bold" />
            Previous
          </button>

          <div className="flex items-center justify-center gap-2 w-full ">
            <button onClick={() => setOffset(0)}>
              <House size={18} weight="regular" />
            </button>

            <span>/</span>

            <span>{offset / LIMIT + 1}</span>
          </div>

          <button
            onClick={toNextPage}
            disabled={!list?.next}
            className="flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-no-drop"
          >
            Next
            <ArrowRight weight="bold" />
          </button>
        </div>
      )}
    </div>
  );
}
