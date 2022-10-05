import { createContext, ReactNode, useMemo, useState } from "react";
import { PokemonType } from "../interfaces/pokemon";

type FavoritesProviderProps = {
  children: ReactNode;
};

type FavoritesContextProps = {
  favoritesPokemons: PokemonType[];
  addPokemonToFavoritesList: (pokemon: PokemonType) => void;
  removePokemonToFavoritesList: (pokemon: PokemonType) => void;
};

export const FavoritesContext = createContext({} as FavoritesContextProps);

export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favoritesPokemons, setFavoritesPokemons] = useState<PokemonType[]>([]);

  function addPokemonToFavoritesList(pokemon: PokemonType): void {
    if (
      !favoritesPokemons.some(({ id }) => id === pokemon.id) &&
      favoritesPokemons.length < 10
    ) {
      setFavoritesPokemons((favoritesPokemons) => [
        ...favoritesPokemons,
        pokemon,
      ]);
    }
  }

  function removePokemonToFavoritesList(pokemon: PokemonType): void {
    if (favoritesPokemons.some(({ id }) => id === pokemon.id)) {
      setFavoritesPokemons((favoritesPokemons) =>
        favoritesPokemons.filter(({ id }) => id !== pokemon.id)
      );
    }
  }

  const contextValues = useMemo(
    () => ({
      favoritesPokemons,
      addPokemonToFavoritesList,
      removePokemonToFavoritesList,
    }),
    [favoritesPokemons, addPokemonToFavoritesList, removePokemonToFavoritesList]
  );

  return (
    <FavoritesContext.Provider value={contextValues}>
      {children}
    </FavoritesContext.Provider>
  );
}