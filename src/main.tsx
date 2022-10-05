import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import { ListProvider } from "./contexts/ListContext";
import { ScrollToTop } from "./helpers/ScrollToTop";

import "./styles/global.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <FavoritesProvider>
          <ListProvider>
            <ScrollToTop />
            <App />
          </ListProvider>
        </FavoritesProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
