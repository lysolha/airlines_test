import { Button, FormControl, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { type FC, useState } from "react";
import { theme } from "../../theme";
import type { Filters } from "..//../Entities/Filters";

interface SearchFormProps {
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const SearchForm: FC<SearchFormProps> = ({ setFilters }) => {
  const [fromValue, setFromValue] = useState<string>("");
  const [toValue, setToValue] = useState<string>("");
  const [dateFlight, setDateFlight] = useState<Dayjs | null>(null);

  const searchFlights = (e: SubmitEvent) => {
    e.preventDefault();

    const formattedDate = dateFlight
      ? dayjs(dateFlight).format("DD/MM/YYYY")
      : "";

    setFilters((prev) => ({
      ...prev,
      isSearch: !prev.isSearch,
      searchFrom: fromValue ? fromValue : prev.searchFrom,
      searchTo: toValue ? toValue : prev.searchTo,
      searchDate: formattedDate ? formattedDate : prev.searchDate,
    }));

    setFromValue("");
    setToValue("");
    setDateFlight(null);
  };

  return (
    <FormControl sx={{ width: "100%" }}>
      <Grid container spacing={1}>
        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            value={fromValue}
            onChange={(e) => setFromValue(e.target.value)}
            className="w-full"
            placeholder="From"
          ></TextField>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            value={toValue}
            onChange={(e) => setToValue(e.target.value)}
            className="w-full"
            placeholder="To"
          ></TextField>
        </Grid>
        <Grid size={{ xs: 12, md: 2 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              sx={{
                width: "100%",
              }}
              value={dateFlight}
              onChange={(newValue) => setDateFlight(newValue)}
            />
          </LocalizationProvider>
        </Grid>
        <Grid size={{ xs: 12, md: 2 }}>
          <Button
            disabled={!fromValue && !toValue && !dateFlight}
            variant="full"
            onClick={searchFlights}
            sx={{
              [theme.breakpoints.down("md")]: {
                padding: "0.5rem",
              },
            }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </FormControl>
  );
};

export default SearchForm;
