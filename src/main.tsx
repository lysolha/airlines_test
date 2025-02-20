import React from "react";
import { createRoot } from "react-dom/client";
// import { store } from "./app/store"
// import App from "./App"
import { ThemeProvider } from "@mui/material/styles";
import "./index.css";
import FlightsPage from "./pages/FlightsPage";
import { theme } from "./theme";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      {/* <Provider store={store}> */}
      <ThemeProvider theme={theme}>
        <FlightsPage />
      </ThemeProvider>

      {/* </Provider> */}
    </React.StrictMode>,
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  );
}
