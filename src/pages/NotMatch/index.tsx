import { Link } from "react-router-dom";
import suprisedPikachu from "../../assets/surprised-pikachu.gif";

export function NotMatch() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-6">
      <img src={suprisedPikachu} alt="" className="rounded-full w-40 h-40" />

      <div className="text-center">
        <h1 className="text-xl font-bold">404</h1>
        <h2 className="text-zinc-600">This page not exists. ¯\_(ツ)_/¯</h2>
      </div>

      <Link
        to="/"
        className="bg-orange-500 text-white text-lg font-medium rounded-md py-2 px-4 mt-4"
      >
        Go back to home
      </Link>
    </div>
  );
}
