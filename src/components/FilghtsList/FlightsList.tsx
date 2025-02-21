import { FC } from "react";
import type { Flight } from "../../Entities/Flight";
import FlightCard from "../FlightCard/FlightCard";

interface FilmsListProps {
  flights: Flight[];
}

const FlightsList: FC<FilmsListProps> = ({ flights }) => {
  return (
    <div>
      {flights.map((flight) => {
        return <FlightCard key={flight.id} flight={flight}></FlightCard>;
      })}
    </div>
  );
};

export default FlightsList;
