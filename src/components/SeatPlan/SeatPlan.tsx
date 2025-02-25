import { Button, Paper, Stack } from "@mui/material";
import { FC, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelect } from "../../app/hooks";
import { addToCart } from "../../app/reducers/CardSlice";
import type { GeneratedDate } from "../../Entities/PlanePlan";
import type { Ticket } from "../../Entities/Ticket";
import { theme } from "../../theme";
import { getRandomSoldSeats } from "../../utils/getRandomSoldSeats";
import { splitArrayToRows } from "../../utils/splitArrayToRows";
import SeatRow from "./SeatRow";
import { useSeats } from "./SeatsContext";

interface SeatPlanParams {
  flightId: string;
  tickets: {
    total: number;
    remaining: number;
  };
}

const SeatPlan: FC<SeatPlanParams> = ({ flightId, tickets }) => {
  const { selectedSeats } = useSeats();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const generatedData: GeneratedDate = useMemo(() => {
    const storage = localStorage.getItem(`random-${flightId}`);
    let parsedData = storage ? JSON.parse(storage) : [];

    if (parsedData.length === 0) {
      parsedData = getRandomSoldSeats(tickets.total, tickets.remaining);
      console.log("parsedData", parsedData);
      localStorage.setItem(`random-${flightId}`, JSON.stringify(parsedData));
    }

    return parsedData;
  }, [tickets.remaining]);

  const { generatedSeats, seatPlan } = generatedData;
  const cartState: Ticket[] | [] = useAppSelect((state) => state.card.tickets);

  const rowsPlan = useMemo(() => {
    if (generatedSeats === undefined || generatedSeats.length === 0) return [];

    if (cartState.length > 0) {
      const ticketsInCart = cartState.map((item) => {
        if (item.flightId === flightId) return item.id;
      });

      const ticketsSet = new Set(ticketsInCart);

      const updatedSeats = generatedSeats.map((seat) => {
        const key = Object.keys(seat)[0];

        if (ticketsSet.has(key)) {
          return { [key]: "cart" };
        }

        return seat;
      });

      console.log("updatedSeats", updatedSeats);

      return splitArrayToRows(updatedSeats, seatPlan.seatsPerRow);
    }

    return splitArrayToRows(generatedSeats, seatPlan.seatsPerRow);
  }, [generatedSeats]);

  console.log("selectedSeats", selectedSeats);

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "1rem",
        backgroundColor: theme.palette.secondary.light,
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          width: "fit-content",
        }}
      >
        {rowsPlan.length > 0 &&
          rowsPlan.map((row: Record<string, string>[], index) => {
            const rowId = `${flightId}-row-${index}`;

            return (
              <SeatRow
                flightId={flightId}
                key={rowId}
                rowNumber={index + 1}
                rowArr={row}
                planeType={seatPlan.type}
              ></SeatRow>
            );
          })}
      </Stack>
      <Button
        onClick={() => {
          navigate("/cart");
          dispatch(addToCart(selectedSeats));
        }}
        disabled={selectedSeats.length === 0}
      >
        Add to Cart
      </Button>
    </Paper>
  );
};

export default SeatPlan;
