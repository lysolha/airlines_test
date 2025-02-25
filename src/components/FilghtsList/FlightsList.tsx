import { FC } from "react";
import type { Flight } from "../../Entities/Flight";
import FlightCard from "../FlightCard/FlightCard";

interface FilmsListProps {
  flights: Flight[];
}

const FlightsList: FC<FilmsListProps> = ({ flights }) => {
  return (
    <>
      {flights.map((flight) => {
        return <FlightCard key={flight.id} flight={flight}></FlightCard>;
      })}
    </>
  );
};

export default FlightsList;
