import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { ListProvider } from './contexts/ListContext'

import './styles/global.css'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ListProvider>
          <App />
        </ListProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
)
