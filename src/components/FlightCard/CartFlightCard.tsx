import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { Flight } from "../../Entities/Flight";

import DeleteIcon from "@mui/icons-material/Delete";
import { Paper, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { removeFromCart } from "../../app/reducers/CardSlice";

interface DetailsFlightCardProps {
  flight: Flight;
  tickets: string[];
}
const CartFlightCard: FC<DetailsFlightCardProps> = ({ flight, tickets }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const openFlight = (e) => {
    e.preventDefault();
    navigate(`/flights/${flight.id}`);
  };

  const currentFlightDuration =
    new Date(flight.arrivalTime).getTime() -
    new Date(flight.departureTime).getTime();

  const hours = Math.floor(currentFlightDuration / (1000 * 60 * 60));
  const minutes = Math.floor(
    (currentFlightDuration % (1000 * 60 * 60)) / (1000 * 60),
  );

  return (
    <Stack sx={{ display: "flex", flexDirection: "row" }}>
      <Card
        variant="ticket"
        elevation={6}
        sx={{
          position: "relative",
          width: "100%",
        }}
        onClick={(e) => openFlight(e)}
      >
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

      <Paper
        variant="bortPass"
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
          gap: "0.5rem",
        }}
      >
        {tickets.map((ticket) => {
          return (
            <Card
              variant="ticket"
              key={`${flight.id}-seat-${ticket}`}
              sx={{
                position: "relative",
              }}
            >
              <DeleteIcon
                sx={{
                  position: "absolute",
                  right: "0.5rem",
                  top: "0.5rem",
                  cursor: "pointer",
                }}
                onClick={() =>
                  dispatch(removeFromCart({ flightId: flight.id, id: ticket }))
                }
              ></DeleteIcon>
              <span>Seat: {ticket}</span>
            </Card>
          );
        })}
      </Paper>
    </Stack>
  );
};

export default CartFlightCard;
