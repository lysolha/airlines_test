import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SendIcon from "@mui/icons-material/Send";
import { IconButton, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState, type FC } from "react";
import type { Flight } from "../../Entities/Flight";
import { useAppDispatch, useAppSelect } from "../../app/hooks";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../app/reducers/FavoritesSlice";

interface DetailsFlightCardProps {
  flight: Flight;
}
const DetailsFlightCard: FC<DetailsFlightCardProps> = ({ flight }) => {
  const currentFlightDuration =
    new Date(flight.arrivalTime).getTime() -
    new Date(flight.departureTime).getTime();

  const hours = Math.floor(currentFlightDuration / (1000 * 60 * 60));
  const minutes = Math.floor(
    (currentFlightDuration % (1000 * 60 * 60)) / (1000 * 60),
  );

  const dispatch = useAppDispatch();
  const favoriteState: Flight[] = useAppSelect(
    (state) => state.favorite.favorites,
  );

  const initialIsFavorite: Boolean = !!favoriteState.find(
    (favorite) => favorite.id === flight.id,
  );

  const [isFavorite, setIsFavorite] = useState<Boolean>(initialIsFavorite);
  if (flight.id === "FL002") {
    console.log("isFavorite", isFavorite);
  }

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
      variant="bortPass"
      elevation={6}
      sx={{
        position: "relative",
      }}
    >
      <div className="absolute top-2 right-3 flex w-full justify-end gap-2">
        <IconButton onClick={(e) => handleAddToFavorites(e)}>
          {isFavorite ? (
            <FavoriteIcon sx={{ fill: "#F4ECD0" }} />
          ) : (
            <FavoriteBorderIcon sx={{ fill: "#F4ECD0" }} />
          )}
        </IconButton>
        <IconButton onClick={(e) => handleShare(e)}>
          <SendIcon sx={{ fill: "#F4ECD0" }} />
        </IconButton>
      </div>

      <CardContent>
        <Stack></Stack>
        <Typography variant="h3" sx={{ marginBottom: "1rem" }}>
          {flight.airline}
        </Typography>
        <Typography variant="h3" sx={{ marginLeft: "2rem" }}>
          {flight.id}
        </Typography>

        <div className="mb-2 flex justify-around">
          <div className="flex flex-col">
            <Typography variant="h3">{flight.from}</Typography>
            <Typography variant="h4" sx={{ color: "text.secondary" }}>
              {new Date(flight.departureTime).toLocaleString()}
            </Typography>
          </div>
          <div className="flex flex-col">
            <Typography variant="h3">{flight.to}</Typography>
            <Typography variant="h4" sx={{ color: "text.secondary" }}>
              {new Date(flight.arrivalTime).toLocaleString()}
            </Typography>
          </div>
        </div>

        <div className="flex items-end justify-center gap-2.5">
          <Typography variant="h4">Flight duration:</Typography>
          <Typography variant="h2">
            {hours}:{minutes}
          </Typography>
        </div>

        <div className="mb-2 flex items-end justify-between">
          <div className="flex gap-5">
            <Typography variant="h4">Terminal: {flight.terminal}</Typography>
            <Typography variant="h4">Gate:{flight.gate}</Typography>
          </div>
          <Typography variant="body1">Price: {flight.price}$</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default DetailsFlightCard;
