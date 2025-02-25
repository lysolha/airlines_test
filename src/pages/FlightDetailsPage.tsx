import { Paper, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { useFetchSingleFlight } from "../API/useFetchFlights";
// import DetailsFlightCard from "../components/FlightCard/DetailsFlightCard";
import FlightCard from "../components/FlightCard/FlightCard";
import Loading from "../components/Loading/AnimatedSVG";
import SeatPlan from "../components/SeatPlan/SeatPlan";
import { SeatsProvider } from "../components/SeatPlan/SeatsContext";

const FlightDetailsPage: FC = () => {
  const { id } = useParams();
  const { flight, error, loading } = useFetchSingleFlight(id);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <SeatsProvider>
          <Paper sx={{ padding: "2rem" }}>
            <Typography
              variant="h2"
              sx={{ marginBottom: "1rem", textAlign: "center" }}
            >
              Flight details
            </Typography>
            <Stack gap="2rem">
              <FlightCard variant="bortPass" flight={flight}></FlightCard>

              <SeatPlan flightId={flight.id} tickets={flight.tickets} />
            </Stack>
          </Paper>
        </SeatsProvider>
      )}
    </div>
  );
};

export default FlightDetailsPage;
