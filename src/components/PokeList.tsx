import { ArrowLeft, ArrowRight } from "phosphor-react";
import { useState } from "react";
import { usePokemons } from "../hooks/usePokemons";
import { PokeCard } from "./PokeCard";
import { Spinner } from "./Spinner";

const LIMIT = 10;
const INITIAL_OFFSET = 0;

export function PokeList() {
  const [offset, setOffset] = useState(INITIAL_OFFSET);

  const { data, isLoading } = usePokemons({ limit: LIMIT, offset });

  const toPreviousPage = () => {
    setOffset((offset) => offset - LIMIT);
  }

  const toNextPage = () => {
    setOffset((offset) => offset + LIMIT);
  }

  if (isLoading) {
    return (
      <Spinner />
    )
  }

  return (
    <div className="flex flex-col gap-8 w-full">
      {data?.results?.map((pokemon) => <PokeCard key={pokemon?.order} {...pokemon} />)}

      <div className="flex justify-between px-8">
        <button
          onClick={toPreviousPage}
          disabled={!data?.previous}
          className="flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-no-drop"
        >
          <ArrowLeft weight="bold" />
          Previous
        </button>

        <button
          onClick={toNextPage}
          disabled={!data?.next}
          className="flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-no-drop"
        >
          Next
          <ArrowRight weight="bold" />
        </button>
      </div>
    </div>
  );
}