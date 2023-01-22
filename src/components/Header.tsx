import { DotsNine, GithubLogo, Heart, House, List } from "phosphor-react";
import { Link } from "react-router-dom";

import { INITIAL_OFFSET } from "../constants/list";
import { useFavorites } from "../hooks/useFavorites";
import { useList } from "../hooks/useList";

export type HeaderProps = {
  showFavoritesButton?: boolean;
};

export function Header({ showFavoritesButton = true }: HeaderProps) {
  const { isGrid, setOffset, toggleGrid } = useList();
  const { favoritesPokemons } = useFavorites();

  return (
    <div className="flex items-center justify-between w-full">
      <Link
        to="/"
        className="text-3xl font-bold text-orange-500"
        onClick={() => setOffset(INITIAL_OFFSET)}
      >
        React Poké
      </Link>

      <div className="flex items-center justify-end gap-4">
        <button
          className="text-slate-900 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 active:bg-gray-300 transition-colors"
          onClick={toggleGrid}
        >
          {isGrid ? (
            <List weight="regular" size={24} />
          ) : (
            <DotsNine weight="bold" size={24} />
          )}
        </button>

        <a
          href="https://github.com/isacgpaz"
          className="flex items-center text-slate-900"
          target={"_blank"}
        >
          <GithubLogo weight="fill" size={24} />
        </a>

        {showFavoritesButton ? (
          <Link to="favorites" className="relative">
            <Heart
              weight="fill"
              size={32}
              className="text-orange-500 hover:text-orange-600 active:text-orange-700 transition-colors"
            />
            <span className="text-white font-bold text-[10px] absolute top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-500 w-4 h-4 flex items-center justify-center rounded-full">
              {favoritesPokemons.length}
            </span>
          </Link>
        ) : (
          <Link to="/">
            <House
              weight="fill"
              size={32}
              className="text-orange-500 hover:text-orange-600 active:text-orange-700 transition-colors"
            />
          </Link>
        )}
      </div>
    </div>
  );
}
