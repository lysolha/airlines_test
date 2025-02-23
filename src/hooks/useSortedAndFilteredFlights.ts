import { useEffect, useMemo, useState } from "react";
import type { Flight } from "../Entities/Flight";
import type { FlightDate } from "../Entities/FlightDate";
import { formatDate } from "../utils/dateFormatter";

const useSearchFlights = (
  flights: Flight[],
  searchFrom: string,
  searchTo: string,
  isSearch: boolean,
  searchDate: string,
): Flight[] => {
  const searchFlights = (flights: Flight[]): Flight[] | [] => {
    const formattedDate = searchDate ? formatDate(searchDate) : "";

    const searchedFlights = flights.filter((flight) => {
      return (
        (!searchFrom ||
          flight.from
            .toLocaleLowerCase()
            .includes(searchFrom.toLocaleLowerCase())) &&
        (!searchTo ||
          flight.to
            .toLocaleLowerCase()
            .includes(searchTo.toLocaleLowerCase())) &&
        (!formattedDate || flight.departureTime.startsWith(formattedDate))
      );
    });

    return searchedFlights;
  };

  let searchedFlights = useMemo(() => {
    if (searchFrom || searchTo || searchDate) {
      return searchFlights(flights);
    }
    return flights;
  }, [isSearch, flights]);

  return searchedFlights ? searchedFlights : [];
};

const groupFlightsByDate = (flights: Flight[]): FlightDate[] | [] => {
  const groupedFlights: Record<string, Flight[]> = {};

  if (flights.length === 0) return [];

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

export const useSortedAndFilteredFlights = (
  flights: Flight[],
  filters: {
    sortType: string;
    searchFrom: string;
    searchTo: string;
    isSearch: boolean;
    searchDate: string;
  },
): FlightDate[] => {
  const searchedFlights: Flight[] | [] = useSearchFlights(
    flights,
    filters.searchFrom,
    filters.searchTo,
    filters.isSearch,
    filters.searchDate,
  );

  const [sortedByDateFlights, setSortedByDateFlights] = useState<
    FlightDate[] | []
  >(groupFlightsByDate(flights));

  useEffect(() => {
    setSortedByDateFlights(groupFlightsByDate(searchedFlights));
  }, [searchedFlights]);

  return sortedByDateFlights;
};
