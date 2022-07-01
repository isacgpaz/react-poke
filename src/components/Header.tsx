import { DotsNine, GithubLogo, Heart, List } from "phosphor-react";
import { Link } from "react-router-dom";
import { INITIAL_OFFSET } from "../constants/list";
import { useList } from "../hooks/useList";

export function Header() {
  const { isGrid, setOffset, toggleGrid } = useList();

  return (
    <div className="flex items-center justify-between w-full">
      <Link
        to="/"
        className="text-3xl font-bold text-orange-500"
        onClick={() => setOffset(INITIAL_OFFSET)}
      >
        React Poké
      </Link>

      <div className="flex justify-end gap-4">
        <button className="text-slate-900" onClick={toggleGrid}>
          {isGrid
            ? <List weight="regular" size={24} />
            : <DotsNine weight="bold" size={24} />}
        </button>

        <a
          href="https://github.com/isacgpaz"
          className="flex items-center text-slate-900"
        >
          <GithubLogo weight="fill" size={24} />
        </a>

        <button className="text-orange-500">
          <Heart weight="fill" size={32} />
        </button>
      </div>
    </div>
  );
}