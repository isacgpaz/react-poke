import classNames from "classnames";
import { Link } from "react-router-dom";

import { PokeTypeBadge } from "./PokeTypeBadge";
import { useList } from "../hooks/useList";
import { usePokemon, usePokemonSpecie } from "../hooks/usePokemons";

type PokeCardProps = {
  name: string;
};

export function PokeCard({ name }: PokeCardProps) {
  const { isGrid } = useList();

  const { data: pokemon } = usePokemon(name);
  const { data: pokemonSpecie } = usePokemonSpecie(name);

  return (
    <Link to={`/pokemon/${pokemon?.name}`}>
      <div
        className={classNames(
          "flex justify-between relative w-full p-5 rounded-xl",
          pokemonSpecie?.color.name,
          {
            "min-h-[140px] flex-col-reverse items-center": isGrid,
            "gap-4": !isGrid,
          }
        )}
      >
        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <span
              className={classNames("font-bold text-sm", {
                "absolute top-3.5 left-3.5": isGrid,
              })}
            >
              {pokemon?.id && `#${String(pokemon?.id).padStart(3, "0")}`}
            </span>

            {!isGrid && (
              <span className="font-bold text-2xl text-white capitalize">
                {pokemon?.name}
              </span>
            )}
          </div>

          {!isGrid && (
            <div className="flex gap-2">
              {pokemon?.types.map(({ type }) => (
                <PokeTypeBadge key={type.name} title={type.name} />
              ))}
            </div>
          )}
        </div>

        <div>
          <img
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt={pokemon?.name}
            className={classNames(
              "saturate-150 contrast-100 max-w-[140px] drop-shadow-2xl",
              {
                "": isGrid,
                "absolute -top-[20%] right-3": !isGrid,
              }
            )}
          />
        </div>
      </div>
    </Link>
  );
}
