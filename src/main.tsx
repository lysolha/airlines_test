import React from "react";
import { createRoot } from "react-dom/client";
// import { store } from "./app/store"
// import App from "./App"
import { ThemeProvider } from "@mui/material/styles";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./index.css";
import FlightsPage from "./pages/FlightsPage";
import { theme } from "./theme";

import { Paper, Stack, Typography } from "@mui/material";
import FlightDetailsPage from "./pages/FlightDetailsPage";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      {/* <Provider store={store}> */}

      <ThemeProvider theme={theme}>
        <Stack sx={{ alignItems: "center", margin: "2rem" }}>
          <Paper
            elevation={6}
            sx={{ width: "fit-content", borderWidth: "0.5rem" }}
          >
            <Typography variant="h1">Happy Airline Tickets</Typography>
          </Paper>
        </Stack>

        <Router>
          <Routes>
            <Route index element={<FlightsPage />} />
            <Route path="flights/:id" element={<FlightDetailsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </ThemeProvider>

      {/* </Provider> */}
    </React.StrictMode>,
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  );
}
