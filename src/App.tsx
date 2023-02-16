import { Route, Routes } from "react-router-dom";
import { Favorites } from "./pages/Favorites";
import { Home } from "./pages/Home";
import { NotMatch } from "./pages/NotMatch";
import { Pokemon } from "./pages/Pokemon";

export function App() {
  return (
    <div className="max-w-md mx-auto min-h-screen">
      <Routes>
        <Route index element={<Home />} />
        <Route path="pokemon/:name" element={<Pokemon />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </div>
  );
}
