import { useParams } from "react-router-dom";
import { usePokemon } from "../../hooks/usePokemons";

export function Pokemon() {
  const { name } = useParams<string>();
  const { data } = usePokemon(name as string);

  return (
    <div>
      pokemon
    </div>
  );
}