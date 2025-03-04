import React from "react";
import { createRoot } from "react-dom/client";
// import { store } from "./app/store"
// import App from "./App"
import { ThemeProvider } from "@mui/material/styles";
import "./index.css";
import { theme } from "./theme";

import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { persistor, store } from "./app/store";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <CssBaseline>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </CssBaseline>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </React.StrictMode>,
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  );
}
