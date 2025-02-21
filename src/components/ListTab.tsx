import TablePagination from "@mui/material/TablePagination";
import { FC, useEffect, useState } from "react";
import type { FlightDate } from "../Entities/FlightDate";
import FlightsByDateList from "./FlightsByDateList/FlightsByDateList";

interface ListTabProps {
  flights: FlightDate[];
  totalFlightsCount: number;
}
const ListTab: FC<ListTabProps> = ({ flights, totalFlightsCount }) => {
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
      <TablePagination
        component="div"
        count={totalFlightsCount}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[3, 7, "all"]}
      />
      {paginatedFlights.map((flightDate) => {
        return (
          <FlightsByDateList
            key={flightDate.id}
            flightsList={flightDate.flights}
            date={flightDate.date}
          ></FlightsByDateList>
        );
      })}
      ;
    </div>
  );
};

export default ListTab;
