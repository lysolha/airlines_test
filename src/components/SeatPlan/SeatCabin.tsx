import { FC } from "react";
import Seat from "./Seat";
interface SeatCabinProps {
  cabinId: string;
  seatCount: number;
  seatsForCabin: string[];
}
const SeatCabin: FC<SeatCabinProps> = ({
  cabinId,
  seatCount,
  seatsForCabin,
}) => {
  return (
    <div className="flex flex-col">
      {Array.from({ length: seatCount }, (_, index) => {
        const seatId = `${cabinId}-seat-${index}`;
        const seatStatus = seatsForCabin[index] === "sold";
        return <Seat key={seatId} seatStatus={seatStatus}></Seat>;
      })}
    </div>
  );
};

export default SeatCabin;
