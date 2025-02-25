import { Stack } from "@mui/material";
import { FC } from "react";
import { theme } from "../../theme";
import { splitIntoCustomSizes } from "../../utils/splitArrayIntoCabins";
import SeatCabin from "./SeatCabin";

interface SeatRowProps {
  rowNumber: number;
  rowArr: Record<string, string>[];
  planeType: string;
  flightId: string;
}

const SeatRow: FC<SeatRowProps> = ({
  rowNumber,
  rowArr,
  planeType,
  flightId,
}) => {
  const cabinsType = planeType.split("-").map((element) => parseInt(element));
  const cabinsArray: Record<string, string>[][] = splitIntoCustomSizes(
    rowArr,
    cabinsType,
  );

  return (
    <Stack
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        gap: "1.3rem",

        [theme.breakpoints.down("lg")]: {
          flexDirection: "row",
        },
        [theme.breakpoints.down("s")]: {
          flexDirection: "column",
        },
      }}
    >
      <span>{rowNumber}</span>
      {cabinsArray.map((cabin, index) => {
        const cabinID = `${flightId}-row-${index}`;
        return (
          <SeatCabin
            key={cabinID}
            cabinArr={cabin}
            flightId={flightId}
          ></SeatCabin>
        );
      })}
    </Stack>
  );
};

export default SeatRow;
