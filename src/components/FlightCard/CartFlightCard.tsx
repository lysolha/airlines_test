import Card from "@mui/material/Card";
import { FC } from "react";
import { Flight } from "../../Entities/Flight";

import DeleteIcon from "@mui/icons-material/Delete";
import { Paper, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { removeFromCart } from "../../app/reducers/CardSlice";
import FlightCard from "./FlightCard";

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
    <Stack sx={{ flexDirection: "row", alignItems: "start", width: "100%" }}>
      <FlightCard flight={flight}></FlightCard>

      <Paper
        variant="bortPass"
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
          gap: "0.5rem",
          width: "30%",
          height: "100%",
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
