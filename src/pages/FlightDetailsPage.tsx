import { FC } from "react";
import { useParams } from "react-router-dom";
import { useFetchSingleFlight } from "../API/useFetchFlights";

const FlightDetailsPage: FC = () => {
  const { id } = useParams();

  const { flight, error, loading } = useFetchSingleFlight(id);

  return <div>{flight.id}</div>;
};

export default FlightDetailsPage;
