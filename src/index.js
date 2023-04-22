import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { BooksProvider, BooksContext } from "./contexts/BooksContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export {BooksContext};

root.render(
  <StrictMode>
    <BrowserRouter>
      <BooksProvider>
        <App />
      </BooksProvider>
    </BrowserRouter>
  </StrictMode>
);
