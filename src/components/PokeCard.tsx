import { PokeTypeBadge } from "./PokeTypeBadge";

export function PokeCard() {
  return (
    <div className="flex w-full bg-orange-500 p-8 rounded-xl">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col">
          <span className="font-bold text-sm text-orange-900">
            #001
          </span>

          <span className="font-bold text-2xl text-white">
            Charmander
          </span>
        </div>

        <div className="flex gap-2">
          <PokeTypeBadge />
          <PokeTypeBadge />
        </div>
      </div>

      <div>
        {/* pokemon image */}
        <img src="" alt="" />
      </div>
    </div>
  );
}