import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import TransitEnterexitIcon from "@mui/icons-material/TransitEnterexit";
import { Badge, Paper, Stack, Typography } from "@mui/material";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useAppSelect } from "./app/hooks";
import type { Flight } from "./Entities/Flight";
import type { Ticket } from "./Entities/Ticket";
import "./index.css";
import Cart from "./pages/CartPage";
import FavoritesPage from "./pages/FavorietsPage";
import FlightDetailsPage from "./pages/FlightDetailsPage";
import FlightsPage from "./pages/FlightsPage";
import { theme } from "./theme";

const App = () => {
  const cartState: Ticket[] = useAppSelect((state) => state.card.tickets);
  const favoriteState: Flight[] = useAppSelect(
    (state) => state.favorite.favorites,
  );

  const location = useLocation();

  return (
    <>
      <Stack
        sx={{
          gap: 0,
          position: "relative",
          marginBottom: "2rem",

          [theme.breakpoints.down("md")]: {
            gap: "1rem",
          },

          [theme.breakpoints.down("sm")]: {
            marginBottom: "1rem",
          },
        }}
      >
        <Stack sx={{ flexDirection: "row" }}>
          {location.pathname !== "/" && (
            <Link to="/">
              <Paper
                sx={{
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  transform: "translate(-0%, -50%)",
                  width: "fit-content",

                  [theme.breakpoints.down("sm")]: {
                    position: "initial",
                    top: 0,
                    left: 0,
                    transform: "none",
                  },
                }}
              >
                <TransitEnterexitIcon
                  fontSize="large"
                  sx={{ rotate: "45deg" }}
                ></TransitEnterexitIcon>
              </Paper>
            </Link>
          )}

          <Paper
            sx={{
              position: "absolute",
              display: "flex",
              flexDirection: "row",
              right: 0,
              top: "50%",
              transform: "translate(-0%, -50%)",
              gap: "1rem",
              width: "fit-content",
              [theme.breakpoints.down("md")]: {
                padding: "1rem",
              },

              [theme.breakpoints.down("sm")]: {
                position: "initial",
                top: 0,
                left: 0,
                transform: "none",
              },
            }}
          >
            <Link to="/liked">
              <Badge badgeContent={favoriteState.length} color="primary">
                <FavoriteIcon fontSize="large" />
              </Badge>
            </Link>
            <Link to="/cart">
              <Badge badgeContent={cartState.length} color="primary">
                <ShoppingBagIcon fontSize="large" />
              </Badge>
            </Link>
          </Paper>
        </Stack>

        <Link to="/">
          <Paper
            elevation={6}
            sx={{ width: "fit-content", borderWidth: "0.5rem" }}
          >
            <Typography variant="h1">Happy Airline Tickets</Typography>
          </Paper>
        </Link>
      </Stack>

      <Routes>
        <Route index element={<FlightsPage />} />
        <Route path="flights/:id" element={<FlightDetailsPage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="liked" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;
