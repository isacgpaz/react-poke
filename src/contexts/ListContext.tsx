import { createContext, Dispatch, ReactNode, SetStateAction, useMemo, useState } from "react";
import { INITIAL_OFFSET, LIMIT } from "../constants/list";

type ListProviderProps = {
  children: ReactNode;
}

type ListContextProps = {
  isGrid: boolean;
  limit: number;
  offset: number;
  setOffset: Dispatch<SetStateAction<number>>;
  toggleGrid(): void;
  toPreviousPage(): void;
  toNextPage(): void;
}

export const ListContext = createContext({} as ListContextProps);

export function ListProvider({ children }: ListProviderProps) {
  const [offset, setOffset] = useState(INITIAL_OFFSET);
  const [isGrid, setIsGrid] = useState(false);

  const toPreviousPage = () => {
    setOffset((offset) => offset - LIMIT);
  }

  const toNextPage = () => {
    setOffset((offset) => offset + LIMIT);
  }

  function toggleGrid() {
    setIsGrid(!isGrid);
  }

  const contextValues = useMemo(() => ({
    isGrid,
    limit: LIMIT,
    offset,
    setOffset,
    toggleGrid,
    toPreviousPage,
    toNextPage
  }), [
    isGrid,
    LIMIT,
    offset,
    setOffset,
    toggleGrid,
    toPreviousPage,
    toNextPage
  ])

  return (
    <ListContext.Provider value={contextValues}>
      {children}
    </ListContext.Provider>
  )
}