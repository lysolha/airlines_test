import { Paper, Stack } from "@mui/material";
import { FC, useMemo } from "react";
import { theme } from "../../theme";
import { getRandomSoldSeats } from "../../utils/getRandomSoldSeats";
import { seatPlanBuilder } from "../../utils/seatPlanBuilder";
import SeatRow from "./SeatRow";

interface SeatPlanParams {
  flightId: string;
  tickets: {
    total: number;
    remaining: number;
  };
}
const SeatPlan: FC<SeatPlanParams> = ({ flightId, tickets }) => {
  const seatPlan: {
    type: string;
    seatsPerRow: number;
    seatRowsCount: number;
    lastRowSeatsCount: number;
  } = seatPlanBuilder(tickets.total);

  const ticketsArr = useMemo(() => {
    const storage = localStorage.getItem(`random-${flightId}`);
    let parsedData = storage ? JSON.parse(storage) : [];

    if (parsedData.length === 0) {
      parsedData = getRandomSoldSeats(tickets.total, tickets.remaining);
      localStorage.setItem(`random-${flightId}`, JSON.stringify(parsedData));
    }

    return parsedData;
  }, [tickets.remaining]);

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
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
        {Array.from({ length: seatPlan.seatRowsCount }, (_, index) => {
          const rowKey = `${flightId}-row-${index}`;
          let lastRow =
            index === seatPlan.seatRowsCount - 1
              ? seatPlan.lastRowSeatsCount
              : 0;
          const typeArr: string[] = seatPlan.type.split("-");
          const startIndex = index * 7;
          const seatsForRow = ticketsArr.slice(
            startIndex,
            startIndex + seatPlan.seatsPerRow,
          );

          return (
            <SeatRow
              key={rowKey}
              rowId={rowKey}
              typeArr={typeArr}
              seatsForRow={seatsForRow}
              lastRowSeatsCount={lastRow}
            />
          );
        })}
      </Stack>
    </Paper>
  );
};

export default SeatPlan;
