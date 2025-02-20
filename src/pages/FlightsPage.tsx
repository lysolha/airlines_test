import { TextField, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";

const FlightsPage = () => {
  return (
    <div className="App">
      <div className="m-auto flex w-full max-w-7xl flex-col items-center gap-5">
        <Paper elevation={6}>
          <Typography variant="h1">Happy Airline Tickets</Typography>
        </Paper>
        <TextField className="w-full" placeholder="search"></TextField>
      </div>
    </div>
  );
};

export default FlightsPage;
