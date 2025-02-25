import { Stack } from "@mui/material";
import { type FC, useState } from "react";
import { useFetchFlights } from "../API/useFetchFlights";
import ListTab from "../components/ListTab";
import Loading from "../components/Loading/AnimatedSVG";
import SearchForm from "../components/SearchForm/SearchForm";
import type { Filters } from "../Entities/Filters";
import { useSortedAndFilteredFlights } from "../hooks/useSortedAndFilteredFlights";

const FlightsPage: FC = () => {
  const { flights, error, loading } = useFetchFlights();
  const [filters, setFilters] = useState<Filters>({
    sortType: "",
    searchFrom: "",
    searchTo: "",
    isSearch: false,
    searchDate: "",
  });

  const sortedFlights = useSortedAndFilteredFlights(flights, filters);

  return (
    <Stack>
      <SearchForm setFilters={setFilters} />

      {loading ? (
        <Loading></Loading>
      ) : (
        <ListTab
          flights={sortedFlights}
          filters={filters}
          setFilters={setFilters}
        />
      )}
    </Stack>
  );
};

export default FlightsPage;
