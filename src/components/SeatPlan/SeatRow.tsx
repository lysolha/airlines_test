import { FC } from "react";
import SeatCabin from "./SeatCabin";

interface SeatRowProps {
  rowId: string;
  typeArr: string[];
  lastRowSeatsCount: number;
  seatsForRow: string[];
}

const SeatRow: FC<SeatRowProps> = ({
  rowId,
  typeArr,
  lastRowSeatsCount,
  seatsForRow,
}) => {
  return (
    <div className="flex flex-col justify-center gap-3.5">
      {lastRowSeatsCount === 0 ? (
        typeArr.map((item, index) => {
          const cabinKey = `${rowId}-cabin-${index}`;
          const seats = seatsForRow.slice(index, parseInt(item));
          return (
            <SeatCabin
              key={cabinKey}
              cabinId={cabinKey}
              seatCount={parseInt(typeArr[index])}
              seatsForCabin={seats}
            />
          );
        })
      ) : (
        // Array.from({ length: typeArr.length }, (_, index) => {
        //   const cabinKey = `${rowId}-cabin-${index}`;
        //   const index =
        //   const seats =
        //   return (
        //     <SeatCabin
        //       key={cabinKey}
        //       cabinId={cabinKey}
        //       seatCount={parseInt(typeArr[index])}
        //       seatsForCabin={seats}
        //     />
        //   );
        // })
        <SeatCabin
          key={`${rowId}-last`}
          cabinId={`${rowId}-last`}
          seatCount={lastRowSeatsCount}
        />
      )}
    </div>
  );
};

export default SeatRow;
