import { Paper, Stack } from "@mui/material";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { useFetchSingleFlight } from "../API/useFetchFlights";
import DetailsFlightCard from "../components/FlightCard/DetailsFlightCard";
import Loading from "../components/Loading/AnimatedSVG";
import SeatPlan from "../components/SeatPlan/SeatPlan";

const FlightDetailsPage: FC = () => {
  const { id } = useParams();

  const { flight, error, loading } = useFetchSingleFlight(id);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Paper sx={{ padding: "2rem" }}>
          <Stack gap="2rem">
            <DetailsFlightCard flight={flight}></DetailsFlightCard>
            <SeatPlan flightId={flight.id} tickets={flight.tickets} />
          </Stack>
        </Paper>
      )}
    </div>
  );
};

export default FlightDetailsPage;
