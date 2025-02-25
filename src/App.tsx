import TransitEnterexitIcon from "@mui/icons-material/TransitEnterexit";
import {
  Link,
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./index.css";
import FlightsPage from "./pages/FlightsPage";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Badge, Paper, Stack, Typography } from "@mui/material";
import { useAppSelect } from "./app/hooks";
import type { Flight } from "./Entities/Flight";
import type { Ticket } from "./Entities/Ticket";
import Cart from "./pages/Cart";
import FavoritesPage from "./pages/FavorietsPage";
import FlightDetailsPage from "./pages/FlightDetailsPage";

const App = () => {
  const cartState: Ticket[] = useAppSelect((state) => state.card.tickets);
  const favoriteState: Flight[] = useAppSelect(
    (state) => state.favorite.favorites,
  );

  return (
    <Router>
      <Stack
        sx={{
          alignItems: "center",
          margin: "2rem",
          position: "relative",
        }}
      >
        <Link to="/">
          <Paper
            sx={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translate(-0%, -50%)",
            }}
          >
            <TransitEnterexitIcon
              fontSize="large"
              sx={{ rotate: "45deg" }}
            ></TransitEnterexitIcon>
          </Paper>
        </Link>

        <Link to="/">
          <Paper
            elevation={6}
            sx={{ width: "fit-content", borderWidth: "0.5rem" }}
          >
            <Typography variant="h1">Happy Airline Tickets</Typography>
          </Paper>
        </Link>

        <Paper
          sx={{
            position: "absolute",
            display: "flex",
            flexDirection: "row",
            right: 0,
            top: "50%",
            transform: "translate(-0%, -50%)",
            gap: "1rem",
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

      <div className="mx-10 max-w-7xl xl:m-auto">
        <Routes>
          <Route index element={<FlightsPage />} />
          <Route path="flights/:id" element={<FlightDetailsPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="liked" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
