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

const container = document.getElementById("root");

if (container) {
  ReactDOM.createRoot(container).render(
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

        {/* <ReactQueryDevtools></ReactQueryDevtools> */}
      </QueryClientProvider>
    </React.StrictMode>
  );
}
