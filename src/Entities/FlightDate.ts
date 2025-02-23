import type { Flight } from "./Flight";

export type FlightDate = {
  id: number;
  date: string;
  flights: Flight[];
};
