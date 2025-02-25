import { FC } from "react";
import Seat from "./Seat";
interface SeatCabinProps {
  flightId: string;
  cabinArr: Record<string, string>[];
}
const SeatCabin: FC<SeatCabinProps> = ({ flightId, cabinArr }) => {
  return (
    <div className="flex flex-col">
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
    </div>
  );
};

export default SeatCabin;
