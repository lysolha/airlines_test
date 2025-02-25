import { Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import type { Flight } from "../../Entities/Flight";

interface FlightCardProps {
  flight: Flight;
}
const FlightCartFavorite: FC<FlightCardProps> = ({ flight }) => {
  const navigate = useNavigate();

  const openFlight = (e: MouseEvent) => {
    e.preventDefault();
    navigate(`/flights/${flight.id}`);
  };
  return (
    <Card
      elevation={6}
      sx={{
        position: "relative",
      }}
      onClick={(e) => openFlight(e)}
    >
      <CardContent>
        <Typography variant="h3" sx={{ marginBottom: "1rem" }}>
          {flight.airline}
        </Typography>
        <Typography variant="h3" sx={{ marginLeft: "2rem" }}>
          {flight.id}
        </Typography>

        <Stack
          sx={{
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Stack
            sx={{ flexDirection: "column", alignItems: "start", gap: "1rem" }}
          >
            <Typography variant="h3">{flight.from}</Typography>
            <Typography variant="h4" sx={{ color: "text.secondary" }}>
              {new Date(flight.departureTime).toLocaleString()}
            </Typography>
          </Stack>
          <Stack
            sx={{ flexDirection: "column", alignItems: "start", gap: "1rem" }}
          >
            <Typography variant="h3">{flight.to}</Typography>
            <Typography variant="h4" sx={{ color: "text.secondary" }}>
              {new Date(flight.arrivalTime).toLocaleString()}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default FlightCartFavorite;
