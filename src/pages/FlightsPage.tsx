import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { FC, useEffect, useState } from "react";
import { useFetchFlights } from "../API/useFetchFlights";
import ListTab from "../components/ListTab";
import Loading from "../components/Loading/AnimatedSVG";
import type { Flight } from "../Entities/Flight";
import type { FlightDate } from "../Entities/FlightDate";

const FlightsPage: FC = () => {
  const { flights, error, loading } = useFetchFlights();

  const [filteredByDate, setFilteredFlights] = useState<FlightDate[]>([]);

  const groupFlightsByDate = (flights: Flight[]): FlightDate[] => {
    const groupedFlights: Record<string, Flight[]> = {};

    flights.forEach((flight) => {
      const date = flight.departureTime.split("T")[0];

      if (!groupedFlights[date]) {
        groupedFlights[date] = [];
      }

      groupedFlights[date].push(flight);
    });

    const result = Object.keys(groupedFlights)
      .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
      .map((date) => ({
        id: new Date(date).getTime(),
        date,
        flights: groupedFlights[date],
      }));

    return result;
  };

  useEffect(() => {
    setFilteredFlights(groupFlightsByDate(flights));
  }, [flights]);

  return (
    <div className="mx-10 flex max-w-7xl flex-col items-center gap-5 xl:m-auto">
      <Paper elevation={6} sx={{ borderWidth: "0.5rem" }}>
        <Typography variant="h1">Happy Airline Tickets</Typography>
      </Paper>

      {/* <TextField className="w-full" placeholder="search"></TextField> */}

      {loading ? (
        <Loading></Loading>
      ) : (
        <ListTab flights={filteredByDate} totalFlightsCount={flights.length} />
      )}
    </div>
  );
};

export default FlightsPage;
