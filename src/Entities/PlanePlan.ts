export type PlanePlan = {
  type: string;
  seatsPerRow: number;
  seatRowsCount: number;
  lastRowSeatsCount: number;
};

export type GeneratedDate = {
  generatedSeats: Record<string, string>[];
  seatPlan: PlanePlan;
};
