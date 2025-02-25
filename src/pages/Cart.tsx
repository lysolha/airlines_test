import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useFetchFlights } from "../API/useFetchFlights";
import { useAppSelect } from "../app/hooks";
import CartList from "../components/CartList/CartList";
import Loading from "../components/Loading/AnimatedSVG";
import type { Flight } from "../Entities/Flight";
import type { Ticket } from "../Entities/Ticket";

const Cart = () => {
  const cartState: Ticket[] = useAppSelect((state) => state.card.tickets);
  const { flights, loading } = useFetchFlights();
  const [addedTickets, setAddedTickets] = useState<
    { flight: Flight; place: string[] }[]
  >([]);

  useEffect(() => {
    if (flights.length === 0 || cartState.length === 0)
      return setAddedTickets([]);
    const dataMap = new Map(flights.map((item) => [item.id, item]));
    const groupedMap = new Map<string, { flight: Flight; place: string[] }>();

    cartState.forEach(({ flightId, id }) => {
      const flight = dataMap.get(flightId);
      if (!flight) return;

      if (!groupedMap.has(flightId)) {
        groupedMap.set(flightId, { flight, place: [] });
      }

      groupedMap.get(flightId)?.place.push(id);
    });

    setAddedTickets(Array.from(groupedMap.values()));
  }, [flights, cartState]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <ShoppingBagIcon
            sx={{
              height: "5rem",
              width: "5rem",
              "&:hover": { transform: "none" },
            }}
          />
          {addedTickets.length > 0 ? (
            <CartList flights={flights} addedTickets={addedTickets}></CartList>
          ) : (
            <Typography variant="h3" sx={{ textAlign: "center" }}>
              Cart is Empty
            </Typography>
          )}
        </Paper>
      )}
    </>
  );
};

export default Cart;
