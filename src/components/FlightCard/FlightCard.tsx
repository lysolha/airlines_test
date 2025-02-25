import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";
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

interface FlightCardProps {
  flight: Flight;
}
const FlightCard: FC<FlightCardProps> = ({ flight }) => {
  const navigate = useNavigate();
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
      elevation={6}
      sx={{
        position: "relative",
        backgroundColor: "#F4ECD0",
        cursor: "pointer",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale3d(1.01, 1, 1)",
        },
      }}
      onClick={(e) => openFlight(e)}
    >
      <div className="absolute top-5 right-5 flex w-full justify-end gap-2">
        <IconButton onClick={(e) => handleAddToFavorites(e)}>
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
        <IconButton onClick={(e) => handleShare(e)}>
          <SendIcon />
        </IconButton>
      </div>

      <CardContent>
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

export default FlightCard;
