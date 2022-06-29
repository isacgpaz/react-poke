import { MagnifyingGlass } from "phosphor-react";
import { Header } from "../components/Header";
import { PokeList } from "../components/PokeList";

export function Home() {
  return (
    <div className="flex flex-col gap-8 p-8 items-center">
      <Header />

      <div className="flex flex-col gap-4">
        <p className="text-sm text-slate-500">
          Search for a pokémon by name or using its National Pokémon number.
        </p>

        <div className="relative text-gray-700">
          <span className="absolute inset-y-0 left-0 flex items-center pl-5">
            <MagnifyingGlass size={20} weight="bold" />
          </span>

          <input
            placeholder="What pokémon are you looking for?"
            className="w-full py-4 text-sm text-white bg-slate-200 rounded-xl pl-12 focus:outline-none focus:bg-slate-200 focus:text-gray-900"
          />
        </div>
      </div>

      <PokeList />
    </div>
  );
}