import type { GeneratedDate, PlanePlan } from "../Entities/PlanePlan";
import { seatPlanBuilder } from "./seatPlanBuilder";
export const getRandomSoldSeats = (
  totalSeats: number,
  soldCount: number,
): GeneratedDate => {
  const freeCount = totalSeats - soldCount;

  const seatStatus = [
    ...Array(soldCount).fill("sold"),
    ...Array(freeCount).fill("free"),
  ].sort(() => Math.random() - 0.5);

  const seatPlan: PlanePlan = seatPlanBuilder(totalSeats);
  const alphabet = "abcdefg";

  let row = 1;
  let letterIndex = 0;

  const generatedSeats: Record<string, string>[] = seatStatus.map(
    (status, index) => {
      if (index !== 0 && index % seatPlan.seatsPerRow === 0) {
        row = row + 1;
        letterIndex = 0;
      }
      const key = row + alphabet[letterIndex].toUpperCase();
      letterIndex += 1;
      return { [key]: status };
    },
  );

  return { generatedSeats, seatPlan };
};
