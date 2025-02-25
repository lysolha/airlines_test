import { Stack } from "@mui/material";
import { FC } from "react";
import { theme } from "../../theme";
import Seat from "./Seat";
interface SeatCabinProps {
  flightId: string;
  cabinArr: Record<string, string>[];
}
const SeatCabin: FC<SeatCabinProps> = ({ flightId, cabinArr }) => {
  return (
    <Stack
      sx={{
        gap: "0.5rem",

        [theme.breakpoints.down("lg")]: {
          flexDirection: "row",
          gap: "0.2rem",
        },
      }}
    >
      {cabinArr.map((seat) => {
        const seatID = Object.keys(seat)[0];
        const status = seat[seatID];
        return (
          <Seat
            key={`${flightId}-${seatID}`}
            status={status}
            id={seatID}
            flightId={flightId}
          />
        );
      })}
    </Stack>
  );
};

export default SeatCabin;
