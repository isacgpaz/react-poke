import classNames from "classnames";
import { Header } from "../../components/Header";
import { PokeCard } from "../../components/PokeCard";
import { useFavorites } from "../../hooks/useFavorites";
import { useList } from "../../hooks/useList";

export function Favorites() {
  const { favoritesPokemons } = useFavorites();
  const { isGrid } = useList();

  return (
    <div className="flex flex-col gap-8 p-8 items-center h-screen">
      <Header showFavoritesButton={false} />

      <div className="w-full">
        <h1 className="text-xl font-bold">
          My Pokémons ({favoritesPokemons.length}/10)
        </h1>
        <p className="text-sm text-slate-500">
          Your favorite pokémons will be listed here.
        </p>
      </div>

      <div className="w-full">
        {favoritesPokemons.length ? (
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
        ) : (
          <p>Empty list.</p>
        )}
      </div>
    </div>
  );
}
