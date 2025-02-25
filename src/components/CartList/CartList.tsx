import { Stack } from "@mui/material";
import { FC } from "react";
import { Flight } from "../../Entities/Flight";
import CartFlightCard from "../FlightCard/CartFlightCard";
interface CartListProps {
  flights: Flight[];
  addedTickets: { flight: Flight; place: string[] }[];
}
const CartList: FC<CartListProps> = ({ flights, addedTickets }) => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
      }}
    >
      {flights.length > 0 &&
        addedTickets.map((ticket) => {
          return (
            <CartFlightCard
              key={`${ticket.flight}-${ticket.place}`}
              flight={ticket.flight}
              tickets={ticket.place}
            ></CartFlightCard>
          );
        })}
    </Stack>
  );
};

export default CartList;
