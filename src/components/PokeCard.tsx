import { PokemonType } from "../interfaces/pokemon";
import { PokeTypeBadge } from "./PokeTypeBadge";

export function PokeCard(pokemon: PokemonType) {
  return (
    <div className="flex justify-between gap-4 relative w-full bg-orange-500 p-5 rounded-xl">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col">
          <span className="font-bold text-sm text-orange-900">
            {`#${String(pokemon.order).padStart(3, "0")}`}
          </span>

          <span className="font-bold text-2xl text-white capitalize">
            {pokemon.name}
          </span>
        </div>

        <div className="flex gap-2">
          <PokeTypeBadge />
          <PokeTypeBadge />
        </div>
      </div>

      <div className="bg-red-500">
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt=""
          className="saturate-150 contrast-100 absolute -top-[20%] right-3 max-w-[140px]"
        />
      </div>
    </div>
  );
}