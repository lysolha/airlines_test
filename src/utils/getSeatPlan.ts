export const getSeatPlane = (seatsCount: number) => {
  if (seatsCount % 7 === 0) {
    return {
      type: "2-3-2",
      seatsPerRow: 7,
      seatRowsCount: seatsCount / 7,
      lastRowSeatsCount: 0,
    };
  } else if (seatsCount % 6 === 0) {
    return {
      type: "3-3",
      seatsPerRow: 6,
      seatRowsCount: seatsCount / 6,
      lastRowSeatsCount: 0,
    };
  } else if (seatsCount % 5 === 0) {
    return {
      type: "3-2",
      seatsPerRow: 5,
      seatRowsCount: seatsCount / 5,
      lastRowSeatsCount: 0,
    };
  }
  return {
    type: "#-2-3-2",
    seatsPerRow: 7,
    seatRowsCount: Math.ceil(seatsCount / 7),
    lastRowSeatsCount: seatsCount % 7,
  };
};
