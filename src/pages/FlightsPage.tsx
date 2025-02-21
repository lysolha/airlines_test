import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useFetchFlights } from "../API/useFetchFlights";
import Loading from "../components/Loading/AnimatedSVG";

const FlightsPage = () => {
  const { flights, error, loading } = useFetchFlights();

  return (
    <div className="App">
      <div className="m-auto flex w-full max-w-7xl flex-col items-center gap-5">
        <Paper elevation={6}>
          <Typography variant="h1">Happy Airline Tickets</Typography>
        </Paper>
        {/* <TextField className="w-full" placeholder="search"></TextField> */}

        {loading ? <Loading></Loading> : flights.length}
      </div>
    </div>
  );
};

export default FlightsPage;
