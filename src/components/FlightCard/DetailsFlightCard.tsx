import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Flight } from "../../Entities/Flight";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SendIcon from "@mui/icons-material/Send";
import { Stack } from "@mui/material";

interface DetailsFlightCardProps {
  flight: Flight;
}
const DetailsFlightCard: FC<DetailsFlightCardProps> = ({ flight }) => {
  const navigate = useNavigate();

  const currentFlightDuration =
    new Date(flight.arrivalTime).getTime() -
    new Date(flight.departureTime).getTime();

  const hours = Math.floor(currentFlightDuration / (1000 * 60 * 60));
  const minutes = Math.floor(
    (currentFlightDuration % (1000 * 60 * 60)) / (1000 * 60),
  );

  return (
    <Card
      variant="bortPass"
      elevation={6}
      sx={{
        position: "relative",
      }}
    >
      <div className="absolute top-3 right-4 flex w-full justify-end gap-2">
        <FavoriteBorderIcon sx={{ fill: "#F4ECD0" }} />
        <SendIcon sx={{ fill: "#F4ECD0" }} />
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
