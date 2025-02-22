import { Button, FormControl, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import type { Dayjs } from "dayjs";
import * as React from "react";

const SearchForm = () => {
  const [value, setValue] = React.useState<Dayjs | null>(null);

  return (
    <FormControl sx={{ width: "100%" }}>
      <Grid container spacing={1}>
        <Grid size={4}>
          <TextField className="w-full" placeholder="From"></TextField>
        </Grid>
        <Grid size={4}>
          <TextField className="w-full" placeholder="To"></TextField>
        </Grid>
        <Grid size={2}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </LocalizationProvider>
        </Grid>
        <Grid size={2}>
          <Button variant="full">Search</Button>
        </Grid>
      </Grid>
    </FormControl>
  );
};

export default SearchForm;
