import { Heart, MagnifyingGlass, XCircle } from "phosphor-react";
import { useState } from "react";
import { Header } from "../components/Header";
import { PokeList } from "../components/PokeList";

export function Home() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col gap-8 p-8 pb-0 items-center min-h-screen">
      <Header />

      <div className="flex flex-col gap-4 w-full">
        <p className="text-sm text-slate-500">
          Search for a pokémon by name or using its National Pokémon number.
        </p>

        <div className="relative text-gray-700">
          <span className="absolute inset-y-0 left-0 flex items-center pl-5">
            <MagnifyingGlass size={20} weight="bold" />
          </span>

          <input
            placeholder="What pokémon are you looking for?"
            className="w-full py-4 text-sm bg-slate-200 rounded-xl pl-12 focus:outline-none focus:text-gray-900 focus:ring-2 ring-gray-700 transition-colors"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <button
              className="absolute inset-y-0 right-0 flex items-center pr-4"
              onClick={() => setSearch("")}
            >
              <XCircle />
            </button>
          )}
        </div>
      </div>

      <PokeList search={search} />

      <div className="mb-4 max-auto">
        <span className="flex items-center text-xs gap-1 text-zinc-600">
          Developed with <Heart className="text-orange-500" weight="fill" /> by
          <a href="https://github.com/isacgpaz" className="underline">
            @isacgpaz
          </a>
        </span>
      </div>
    </div>
  );
}
