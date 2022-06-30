import classNames from "classnames";
import { ArrowLeft, ArrowRight, House } from "phosphor-react";
import { useState } from "react";
import { usePokemons } from "../hooks/usePokemons";
import { PokeCard } from "./PokeCard";
import { Spinner } from "./Spinner";
import { useList } from "../hooks/useList";

const LIMIT = 10;
const INITIAL_OFFSET = 0;

export function PokeList() {
  const [offset, setOffset] = useState(INITIAL_OFFSET);

  const { isGrid } = useList();
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
      <div className={classNames({
        "flex flex-col gap-8": !isGrid,
        "grid grid-cols-2 gap-4": isGrid
      })}>
        {data?.results?.map((pokemon) => <PokeCard key={pokemon?.order} {...pokemon} />)}
      </div>

      <div className="flex justify-between">
        <button
          onClick={toPreviousPage}
          disabled={!data?.previous}
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

          <span>{(offset / LIMIT) + 1}</span>
        </div>

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