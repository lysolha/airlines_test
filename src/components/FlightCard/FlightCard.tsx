import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SendIcon from "@mui/icons-material/Send";
import { IconButton, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelect } from "../../app/hooks";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../app/reducers/FavoritesSlice";
import type { Flight } from "../../Entities/Flight";
import { theme } from "../../theme";

interface FlightCardProps {
  flight: Flight;
  variant?: string;
}
const FlightCard: FC<FlightCardProps> = ({ flight, variant = "elevation" }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const favoriteState: Flight[] = useAppSelect(
    (state) => state.favorite.favorites,
  );

  const initialIsFavorite: Boolean = !!favoriteState.find(
    (favorite) => favorite.id === flight.id,
  );

  const [isFavorite, setIsFavorite] = useState<Boolean>(initialIsFavorite);

  const currentFlightDuration =
    new Date(flight.arrivalTime).getTime() -
    new Date(flight.departureTime).getTime();

  const hours = Math.floor(currentFlightDuration / (1000 * 60 * 60));
  const minutes = Math.floor(
    (currentFlightDuration % (1000 * 60 * 60)) / (1000 * 60),
  );

  const openFlight = (e: MouseEvent) => {
    e.preventDefault();
    navigate(`/flights/${flight.id}`);
  };

  const handleShare = async (e: MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      try {
        await navigator.share({
          url: `${window.location.origin}/flights/${flight.id}`,
        });
      } catch (error) {
        throw new Error(`${error}`);
      }
    } else {
      console.log("Web Share API does not work in this browser");
    }
  };

  const handleAddToFavorites = (e: MouseEvent) => {
    e.stopPropagation();
    if (isFavorite) {
      dispatch(removeFromFavorites(flight));
      setIsFavorite(!isFavorite);
    } else {
      dispatch(addToFavorites(flight));
      setIsFavorite(!isFavorite);
    }
  };

  return (
    <Card
      variant={variant}
      sx={{
        position: "relative",
      }}
      onClick={(e) => openFlight(e)}
    >
      <Stack
        sx={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          justifyContent: "end",
          flexDirection: "row",
          gap: 0,
        }}
      >
        <IconButton onClick={(e) => handleAddToFavorites(e)}>
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
        <IconButton onClick={(e) => handleShare(e)}>
          <SendIcon />
        </IconButton>
      </Stack>

      <CardContent>
        <Typography variant="h3" sx={{ marginBottom: "1rem" }}>
          {flight.airline}
        </Typography>
        <Typography variant="h3" sx={{ marginLeft: "2rem" }}>
          {flight.id}
        </Typography>

        <Stack
          sx={{
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Stack
            sx={{ flexDirection: "column", alignItems: "start", gap: "1rem" }}
          >
            <Typography variant="h3">{flight.from}</Typography>
            <Typography variant="h4" sx={{ color: "text.secondary" }}>
              {new Date(flight.departureTime).toLocaleString()}
            </Typography>
          </Stack>
          <Stack
            sx={{ flexDirection: "column", alignItems: "start", gap: "1rem" }}
          >
            <Typography variant="h3">{flight.to}</Typography>
            <Typography variant="h4" sx={{ color: "text.secondary" }}>
              {new Date(flight.arrivalTime).toLocaleString()}
            </Typography>
          </Stack>
        </Stack>

        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "end",
            justifyContent: "center",

            [theme.breakpoints.down("sm")]: {
              alignItems: "start",
            },
          }}
        >
          <Typography variant="h4">Flight duration:</Typography>
          <Typography variant="h2">
            {hours}:{minutes}
          </Typography>
        </Stack>

        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "end",
            justifyContent: "space-between",

            [theme.breakpoints.down("sm")]: {
              alignItems: "start",
            },
          }}
        >
          <Stack
            sx={{
              flexDirection: "row",
              margin: 0,
              [theme.breakpoints.down("sm")]: {
                alignItems: "start",
              },
            }}
            className="flex gap-5"
          >
            <Typography variant="h4">Terminal: {flight.terminal}</Typography>
            <Typography variant="h4">Gate:{flight.gate}</Typography>
          </Stack>
          <Typography variant="body1">Price: {flight.price}$</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default FlightCard;
