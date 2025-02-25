import EventSeatIcon from "@mui/icons-material/EventSeat";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { theme } from "../../theme";
import { useSeats } from "./SeatsContext";

type SeatProps = {
  status: string;
  id: string;
  flightId: string;
};

export const Seat = ({ status, id, flightId }: SeatProps) => {
  const { toggleSeat, isSeatSelected } = useSeats();
  const selected = isSeatSelected(id);
  const variant =
    status === "sold"
      ? "sold"
      : status === "cart"
        ? "cart"
        : selected
          ? "checked"
          : "auto";

  const handleToggle = () => {
    if (variant !== "cart") {
      toggleSeat({ id, flightId });
    }
  };

  return (
    <Tooltip title={variant !== "cart" ? id : "Seat in the cart"}>
      <IconButton onClick={() => handleToggle()} sx={{ padding: 0 }}>
        <EventSeatIcon
          className={`seat ${selected ? "selected" : ""}`}
          sx={{
            fill: "black",
            rotate: "90deg",
            cursor: "pointer",
            transition: "rotate 0.2s ease-in-out",
            "&:hover": {
              rotate: "0deg",
            },

            [theme.breakpoints.down("lg")]: {
              rotate: "0deg",
            },

            ...(variant === "sold" && {
              fill: "gray",
              cursor: "auto",
              "&:hover": {
                rotate: "90deg",
                transform: "none",
              },
            }),
            ...(variant === "checked" && {
              fill: "green",
              transform: "scale3d(1.3, 1.3, 1.3)",
              rotate: "0deg",
            }),
            ...(variant === "cart" && {
              fill: theme.palette.primary.light,
              stroke: theme.palette.primary.main,
              transform: "scale3d(1.3, 1.3, 1.3)",
              rotate: "0deg",
            }),
          }}
        />
      </IconButton>
    </Tooltip>
  );
};

export default Seat;
