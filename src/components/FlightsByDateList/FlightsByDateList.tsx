import { Paper, Typography } from "@mui/material";
import { FC } from "react";
import type { Flight } from "../../Entities/Flight";
import FlightsList from "../FilghtsList/FlightsList";

interface FlightsByDateListProps {
  flightsList: Flight[];
  date: string;
}

const FlightsByDateList: FC<FlightsByDateListProps> = ({
  flightsList,
  date,
}) => {
  return (
    <Paper sx={{ borderWidth: "0.2rem", width: "100%" }}>
      <Typography variant="h2" sx={{ marginBottom: "1rem" }}>
        Date: {date}
      </Typography>

      <div>
        <FlightsList flights={flightsList}></FlightsList>
      </div>
    </Paper>
  );
};

export default FlightsByDateList;
