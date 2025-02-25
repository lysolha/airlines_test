import { FC } from "react";
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
    <div className="flex flex-col justify-center gap-3.5">
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
    </div>
  );
};

export default SeatRow;
