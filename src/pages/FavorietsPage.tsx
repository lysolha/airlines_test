import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button, Paper, Stack, Typography } from "@mui/material";
import type { Flight } from "../Entities/Flight";
import { useAppDispatch, useAppSelect } from "../app/hooks";
import { removeFromFavorites } from "../app/reducers/FavoritesSlice";
import FlightCartFavorite from "../components/FlightCard/FlightCartFavorite";
import { theme } from "../theme";

const FavoritesPage = () => {
  const favoriteState: Flight[] = useAppSelect(
    (state) => state.favorite.favorites,
  );
  const dispatch = useAppDispatch();

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <FavoriteIcon
        sx={{ height: "5rem", width: "5rem", "&:hover": { transform: "none" } }}
      />
      {favoriteState.length > 0 ? (
        favoriteState.map((flight, index) => {
          return (
            <Stack
              key={flight.id + index}
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                width: "100%",
              }}
            >
              <FlightCartFavorite flight={flight} />
              <Button
                sx={{ widows: "3rem" }}
                onClick={() => dispatch(removeFromFavorites(flight))}
              >
                <DeleteIcon
                  sx={{
                    fill: theme.palette.secondary.light,
                    "&:hover": { transform: "none" },
                  }}
                />
              </Button>
            </Stack>
          );
        })
      ) : (
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Favorites is empty
        </Typography>
      )}
    </Paper>
  );
};

export default FavoritesPage;
