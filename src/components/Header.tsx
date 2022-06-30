import { Heart } from "phosphor-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="flex items-center justify-between w-full">
      <Link
        to="/"
        className="text-3xl font-bold text-orange-500"
      >
        React Poké
      </Link>

      <button>
        <Heart className="text-orange-500" weight="fill" size={32} />
      </button>
    </div>
  );
}