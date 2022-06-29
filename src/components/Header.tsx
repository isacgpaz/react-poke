import { Heart } from "phosphor-react";

export function Header() {
  return (
    <div className="flex items-center justify-between w-full">
      <span className="text-3xl font-bold text-orange-500">
        React Poké
      </span>

      <button>
        <Heart className="text-orange-500" weight="fill" size={32} />
      </button>
    </div>
  );
}