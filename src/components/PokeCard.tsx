import { PokemonType } from "../interfaces/pokemon";
import { PokeTypeBadge } from "./PokeTypeBadge";
import classNames from "classnames";

export function PokeCard(pokemon: PokemonType) {
  return (
    <div className={
      classNames("flex justify-between gap-4 relative w-full p-5 rounded-xl",
        pokemon.color.name
      )}>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col">
          <span className={classNames("font-bold text-sm")}>
            {`#${String(pokemon.order).padStart(3, "0")}`}
          </span>

          <span className="font-bold text-2xl text-white capitalize">
            {pokemon.name}
          </span>
        </div>

        <div className="flex gap-2">
          {pokemon.types.map(({ type }) => <PokeTypeBadge title={type.name} />)}
        </div>
      </div>

      <div className="bg-red-500">
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          className="saturate-150 contrast-100 absolute -top-[20%] right-3 max-w-[140px] drop-shadow-2xl"
        />
      </div>
    </div >
  );
}