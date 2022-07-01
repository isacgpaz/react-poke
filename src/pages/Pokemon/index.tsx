import classNames from "classnames";
import { ArrowLeft, Barbell, FireSimple, Heart, Ladder, ShareNetwork } from "phosphor-react";
import { useNavigate, useParams } from "react-router-dom";
import { PokeTypeBadge } from "../../components/PokeTypeBadge";
import { usePokemon, usePokemonSpecie } from "../../hooks/usePokemons";

export function Pokemon() {
  const { name } = useParams<string>();
  const navigate = useNavigate();

  const { data: pokemon } = usePokemon(name as string);
  const { data: pokemonSpecie } = usePokemonSpecie(name as string);

  return (
    <div className="flex flex-col gap-12">
      <div className={classNames(
        "flex flex-col gap-4 items-center min-h-[30vh] relative p-8",
        pokemonSpecie?.color.name
      )}>
        <div className="flex justify-between w-full">
          <button
            onClick={() => navigate(-1)}
            className="text-white"
          >
            <ArrowLeft size={24} weight="bold" />
          </button>

          <div className="flex gap-4">
            <button className="text-white">
              <Heart size={24} weight="fill" />
            </button>

            <button className="text-white">
              <ShareNetwork size={24} weight="bold" />
            </button>
          </div>
        </div>

        <span className="font-bold text-9xl opacity-[35%]">
          {`#${String(pokemon?.order).padStart(3, "0")}`}
        </span>

        <img
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt={pokemon?.name}
          className="saturate-150 contrast-100 max-w-[240px] drop-shadow-2xl absolute -bottom-1/3 left-1/2 transform -translate-x-1/2 translate-y-[0]"
        />
      </div>

      <div className="flex flex-col gap-8 p-8">
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

        <div className="flex justify-between items-center px-5">
          <div className="flex flex-col items-center gap-1">
            <Barbell size={32} weight="regular" className="text-slate-700" />

            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">
                {pokemon?.weight}
              </span>

              <span className="font-normal text-xs">
                Lbs
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-1">
            <Ladder size={32} weight="regular" className="text-slate-700" />

            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">
                {pokemon?.height}
              </span>

              <span className="font-normal text-xs">
                Meters
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-1">
            <FireSimple size={32} weight="regular" className="text-slate-700" />

            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">
                {pokemon?.base_experience}
              </span>

              <span className="font-normal text-xs">
                Base XP
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5">
          <h2 className="font-medium text-lg text-slate-900">
            Base Stats
          </h2>

          <div className="flex flex-col gap-2">
            {pokemon?.stats.map(({ stat, base_stat }) => (
              <div className="grid grid-cols-5 gap-4 items-center">
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
                      <span className="text-xs text-white">
                        {base_stat}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}