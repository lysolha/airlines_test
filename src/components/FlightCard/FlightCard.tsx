import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { Flight } from "../../Entities/Flight";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SendIcon from "@mui/icons-material/Send";

interface FlightCardProps {
  flight: Flight;
}
const FlightCard: FC<FlightCardProps> = ({ flight }) => {
  const date = new Date(flight.departureTime).toLocaleString();

  const openFlight = (e) => {
    console.log("test");
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
        <FavoriteBorderIcon />
        <SendIcon />
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
