import { createContext, ReactNode, useMemo, useState } from "react";

type ListProviderProps = {
  children: ReactNode;
}

type ListContextProps = {
  isGrid: boolean;
  toggleGrid(): void;
}

export const ListContext = createContext({} as ListContextProps);

export function ListProvider({ children }: ListProviderProps) {
  const [isGrid, setIsGrid] = useState(false);

  function toggleGrid() {
    setIsGrid(!isGrid);
  }

  const contextValues = useMemo(() => ({
    isGrid,
    toggleGrid
  }), [
    isGrid,
    toggleGrid
  ])

  return (
    <ListContext.Provider value={contextValues}>
      {children}
    </ListContext.Provider>
  )
}