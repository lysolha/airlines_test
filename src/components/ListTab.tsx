import { Paper, Stack, Typography } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import dayjs from "dayjs";
import { FC, useEffect, useState } from "react";
import type { Filters } from "../Entities/Filters";
import type { FlightDate } from "../Entities/FlightDate";
import DeletableChips from "./DeletableChips/DeletableChips";
import FlightsByDateList from "./FlightsByDateList/FlightsByDateList";

interface ListTabProps {
  flights: FlightDate[];
  totalFlightsCount: number;
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}
const ListTab: FC<ListTabProps> = ({
  flights,
  totalFlightsCount,
  filters,
  setFilters,
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  const [paginatedFlights, setPaginatedFlights] = useState<FlightDate[]>(
    flights.slice(rowsPerPage * page, rowsPerPage),
  );

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  useEffect(() => {
    setPaginatedFlights(
      flights.slice(rowsPerPage * page, rowsPerPage * page + rowsPerPage),
    );
  }, [page, rowsPerPage, flights]);

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newRowsPerPage =
      event.target.value === "all" ? 100 : parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);
    setPage(0);
  };

  return (
    <div className="flex w-full flex-col gap-5">
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <DeletableChips
          setFilters={setFilters}
          appliedFilters={filters}
        ></DeletableChips>
        <TablePagination
          component="div"
          count={flights.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[3, 7]}
        />
      </Stack>
      {paginatedFlights.length > 0 ? (
        paginatedFlights.map((flightDate) => {
          return (
            <FlightsByDateList
              key={flightDate.id}
              flightsList={flightDate.flights}
              date={dayjs(flightDate.date).format("DD/MM/YYYY")}
            ></FlightsByDateList>
          );
        })
      ) : (
        <Paper>
          <Typography variant="h3" sx={{ textAlign: "center" }}>
            Flights not found
          </Typography>
        </Paper>
      )}
    </div>
  );
};

export default ListTab;
