import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Pokemon } from "./pages/Pokemon";

export function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="pokemon/:name" element={<Pokemon />} />
    </Routes>
  )
}
