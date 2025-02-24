export const getRandomSoldSeats = (
  totalSeats: number,
  soldCount: number,
): string[] => {
  const freeCount = totalSeats - soldCount;

  const seatStatus = [
    ...Array(soldCount).fill("sold"),
    ...Array(freeCount).fill("free"),
  ];

  return seatStatus.sort(() => Math.random() - 0.5);
};
