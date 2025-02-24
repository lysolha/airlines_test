import EventSeatIcon from "@mui/icons-material/EventSeat";
import { FC, useState } from "react";
interface SeatProps {
  seatStatus: boolean;
}
const Seat: FC<SeatProps> = ({ seatStatus }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const variant = seatStatus ? "sold" : isChecked ? "checked" : "auto";
  return (
    <EventSeatIcon
      onClick={() => setIsChecked((prev) => !prev)}
      fontSize="small"
      sx={{
        fill: "black",
        transform: "rotate(90deg)",
        cursor: "pointer",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "rotate(0deg)",
        },
        ...(variant === "sold" && {
          fill: "gray",
          cursor: "auto",
          "&:hover": {
            transform: "rotate(90deg)",
          },
        }),
        ...(variant === "checked" && {
          fill: "green",
          transform: "rotate(0deg)",
          "&:hover": {
            transform: "rotate(0deg)",
          },
        }),
      }}
    />
  );
};

export default Seat;
