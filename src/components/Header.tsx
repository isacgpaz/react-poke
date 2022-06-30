import { DotsNine, Heart, List, SlidersHorizontal } from "phosphor-react";
import { Link } from "react-router-dom";
import { useList } from "../hooks/useList";

export function Header() {
  const { isGrid, toggleGrid } = useList();

  return (
    <div className="flex items-center justify-between w-full">
      <Link
        to="/"
        className="text-3xl font-bold text-orange-500"
      >
        React Poké
      </Link>

      <div className="flex justify-end gap-4">
        <button className="text-slate-900" onClick={toggleGrid}>
          {isGrid
            ? <DotsNine weight="bold" size={24} />
            : <List weight="regular" size={24} />}
        </button>

        <button className="text-slate-900">
          <SlidersHorizontal weight="fill" size={24} />
        </button>

        <button className="text-orange-500">
          <Heart weight="fill" size={32} />
        </button>
      </div>
    </div>
  );
}