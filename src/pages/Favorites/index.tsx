import classNames from "classnames";
import { Compass } from "phosphor-react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { PokeCard } from "../../components/PokeCard";
import { useFavorites } from "../../hooks/useFavorites";
import { useList } from "../../hooks/useList";

export function Favorites() {
  const { favoritesPokemons, clearFavoritesList } = useFavorites();
  const { isGrid } = useList();

  return (
    <div className="flex flex-col gap-8 p-8 items-center h-screen overflow-auto">
      <Header showFavoritesButton={false} />

      <div className="w-full">
        <h1 className="text-xl font-bold">
          My Pokédex ({favoritesPokemons.length}/10)
        </h1>

        <p className="text-sm text-slate-500">
          Your favorite pokémons will be listed here.
        </p>
      </div>

      <div className="flex flex-1 flex-col w-full gap-8">
        {favoritesPokemons.length ? (
          <>
            <div
              className={classNames({
                "flex flex-col gap-8": !isGrid,
                "grid grid-cols-2 gap-4": isGrid,
              })}
            >
              {favoritesPokemons?.map((pokemon) => (
                <PokeCard key={pokemon?.name} {...pokemon} />
              ))}
            </div>

            <div className="flex flex-col gap-4">
              {/* <button className="bg-orange-500 text-white text-lg font-medium rounded-md py-2 w-full self-center flex items-center justify-center gap-1">
                <ShareNetwork weight="bold" />
                Show the world your pokedex!
              </button> */}

              <button
                onClick={clearFavoritesList}
                className="bg-zinc-500 text-white text-lg font-medium rounded-lg py-2 w-full self-center flex items-center justify-center gap-1"
              >
                Clear pokedéx
              </button>

              {/* <button
                onClick={clearFavoritesList}
                className="text-sm uppercase font-bold text-zinc-500"
              >
                Clear pokedéx
              </button> */}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-1 text-gray-400 mt-5">
            <Compass size={40} />

            <p className="text-center">
              Shall we go out to catch some pokémons?
            </p>

            <Link
              to="/"
              className="bg-orange-500 text-white text-lg font-medium rounded-md py-2 px-4 mt-4"
            >
              Explore
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
