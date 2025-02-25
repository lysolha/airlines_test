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
        backgroundColor: "#F4ECD0",
        cursor: "pointer",
        transition: "transform 0.2s ease-in-out",
        width: "100%",
        "&:hover": {
          transform: "scale3d(1.01, 1, 1)",
        },
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

        <div className="mb-2 flex justify-around">
          <div className="flex flex-col">
            <Typography variant="h3">{flight.from}</Typography>
            <Typography variant="h4" sx={{ color: "text.secondary" }}>
              {new Date(flight.departureTime).toLocaleString()}
            </Typography>
          </div>
          <div className="flex flex-col">
            <Typography variant="h3">{flight.to}</Typography>
            <Typography variant="h4" sx={{ color: "text.secondary" }}>
              {new Date(flight.arrivalTime).toLocaleString()}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FlightCartFavorite;
