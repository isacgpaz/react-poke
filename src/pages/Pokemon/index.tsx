import classNames from "classnames";
import {
  ArrowLeft,
  Barbell,
  FireSimple,
  Graph,
  Heart,
  Ladder,
  ShareNetwork,
  ThumbsDown,
  Tree,
} from "phosphor-react";
import { Link, useParams } from "react-router-dom";
import { PokeTypeBadge } from "../../components/PokeTypeBadge";
import { useFavorites } from "../../hooks/useFavorites";
import { usePokemon, usePokemonSpecie } from "../../hooks/usePokemons";

export function Pokemon() {
  const { name } = useParams<string>();

  const {
    addPokemonToFavoritesList,
    removePokemonToFavoritesList,
    favoritesPokemons,
  } = useFavorites();

  const { data: pokemon } = usePokemon(name as string);
  const { data: pokemonSpecie } = usePokemonSpecie(name as string);

  const randomNumber = Math.floor(Math.random() * 10);

  const englishDescriptions = pokemonSpecie?.flavor_text_entries.filter(
    ({ language }) => language.name === "en"
  );

  return (
    <div className={classNames("flex flex-col", pokemonSpecie?.color.name)}>
      <div className="flex flex-col gap-4 min-h-[30vh] items-center relative p-8">
        <div className="flex justify-between w-full">
          <Link to="/" className="text-white">
            <ArrowLeft size={24} weight="bold" />
          </Link>

          <div className="flex gap-4">
            <button className="text-white">
              <ShareNetwork size={24} weight="bold" />
            </button>

            {favoritesPokemons.some(({ id }) => id === pokemon?.id) ? (
              <button
                className="text-white"
                onClick={() => pokemon && removePokemonToFavoritesList(pokemon)}
              >
                <ThumbsDown size={32} weight="fill" />
              </button>
            ) : (
              <button
                className="text-white"
                onClick={() => pokemon && addPokemonToFavoritesList(pokemon)}
              >
                <Heart size={32} weight="fill" />
              </button>
            )}
          </div>
        </div>

        <span className="font-bold text-9xl opacity-[35%]">
          {pokemon?.id && `#${String(pokemon.id).padStart(3, "0")}`}
        </span>

        <img
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt={pokemon?.name}
          className="saturate-150 contrast-100 max-w-[240px] drop-shadow-2xl absolute -bottom-1/3 left-1/2 transform -translate-x-1/2 translate-y-[0]"
        />
      </div>

      <div className="flex flex-col gap-8 px-8 py-20 bg-white rounded-t-[1.75rem]">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="capitalize font-bold text-3xl text-slate-900">
            {pokemon?.name}
          </h1>

          <div className="flex gap-2">
            {pokemon?.types.map(({ type }) => (
              <PokeTypeBadge key={type.name} title={type.name} />
            ))}
          </div>
        </div>

        <p className="text-sm text-slate-500">
          {englishDescriptions?.[randomNumber].flavor_text.replaceAll("\f", "")}
        </p>

        <div className="flex justify-between items-center px-5 text-slate-700">
          <div className="flex flex-col items-center gap-1">
            <Barbell size={32} weight="regular" />

            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">{pokemon?.weight}</span>

              <span className="font-normal text-xs">hg</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-1">
            <Ladder size={32} weight="regular" />

            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">{pokemon?.height}</span>

              <span className="font-normal text-xs">dm</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-1">
            <FireSimple size={32} weight="regular" />

            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">
                {pokemon?.base_experience}
              </span>

              <span className="font-normal text-xs">Base XP</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="font-medium text-lg text-slate-900 text-center">
            Base Stats
          </h2>

          <div className="flex flex-col gap-2 text-slate-700">
            {pokemon?.stats.map(({ stat, base_stat }) => (
              <div
                key={stat.name}
                className="grid grid-cols-5 gap-4 items-center"
              >
                <span className="col-span-2 uppercase font-medium text-sm text-right">
                  {stat.name}
                </span>

                <div className="col-span-3">
                  <div className="bg-slate-200 rounded-full w-full">
                    <div
                      className={classNames(
                        "flex items-center justify-end px-2 py-0.5 rounded-full",
                        pokemonSpecie?.color.name
                      )}
                      style={{ width: `${(base_stat * 100) / 200}%` }}
                    >
                      <span className="text-xs text-white">{base_stat}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <h2 className="font-medium text-lg text-slate-900">Abilities</h2>

          <ul className="flex gap-2">
            {pokemon?.abilities.map(({ ability }) => (
              <li className="capitalize text-sm text-slate-500 rounded-xl px-3 border-2 border-slate-500">
                {ability.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center gap-2">
          <h2 className="font-medium text-lg text-slate-900">
            Other informations
          </h2>

          <div className="w-full flex justify-between items-center px-5 text-slate-700">
            <div className="flex flex-col items-center gap-1">
              <Tree size={32} weight="regular" />

              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold capitalize">
                  {pokemonSpecie?.habitat.name}
                </span>

                <span className="font-normal text-xs">Habitat</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-1">
              <Graph size={32} weight="regular" />

              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold capitalize">
                  {pokemonSpecie?.shape.name}
                </span>

                <span className="font-normal text-xs">Shape</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
