import { useContext } from "react";
import { ListContext } from "../contexts/ListContext";

export const useList = () => (
  useContext(ListContext)
);