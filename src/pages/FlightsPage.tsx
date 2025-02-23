import { FC, useState } from "react";
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
    <div className="mx-10 flex max-w-7xl flex-col items-center gap-5 xl:m-auto">
      <SearchForm setFilters={setFilters} />

      {loading ? (
        <Loading></Loading>
      ) : (
        <ListTab
          flights={sortedFlights}
          totalFlightsCount={sortedFlights.length}
          filters={filters}
          setFilters={setFilters}
        />
      )}
    </div>
  );
};

export default FlightsPage;
