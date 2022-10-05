import { GlobeHemisphereEast, Lightbulb } from "phosphor-react";

export function EmptyListSearch() {
  return (
    <div className="flex flex-col items-center justify-between mt-10 flex-1 w-full gap-4 text-gray-400">
      <div className="flex flex-col items-center gap-1">
        <GlobeHemisphereEast size={40} />

        <p className="text-center w-72">
          Sorry, this pokémon hasn't been discovered yet.
        </p>
      </div>

      <div className="flex gap-2">
        <Lightbulb size={20} />

        <p className="text-xs">
          <span className="font-bold">TIP:</span> Try pokémon full name or using
          its National Pokémon number.
        </p>
      </div>
    </div>
  );
}
