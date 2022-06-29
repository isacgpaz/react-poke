import { Spinner as PhosphorSpinner } from "phosphor-react";

export function Spinner() {
  return (
    <PhosphorSpinner
      size={36}
      weight="bold"
      className="text-orange-500 animate-spin"
    />
  );
}