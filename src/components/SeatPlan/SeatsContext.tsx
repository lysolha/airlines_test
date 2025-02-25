import { createContext, useContext, useState } from "react";
import { Ticket } from "../../Entities/Ticket";

type SeatsContextType = {
  selectedSeats: Ticket[];
  toggleSeat: (ticket: Ticket) => void;
  isSeatSelected: (id: string) => boolean;
};

const SeatsContext = createContext<SeatsContextType | null>(null);

export const SeatsProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedSeats, setSelectedSeats] = useState<Ticket[]>([]);

  const toggleSeat = (ticket: Ticket) => {
    setSelectedSeats((prev) => {
      const isSelected = prev.some((s) => s.id === ticket.id);

      if (isSelected) {
        return prev.filter((s) => s.id !== ticket.id);
      }

      return [...prev, ticket];
    });
  };

  const isSeatSelected = (id: string) =>
    selectedSeats.some((seat) => seat.id === id);

  return (
    <SeatsContext.Provider
      value={{ selectedSeats, toggleSeat, isSeatSelected }}
    >
      {children}
    </SeatsContext.Provider>
  );
};

export const useSeats = () => {
  const context = useContext(SeatsContext);
  if (!context) {
    throw new Error("useSeats must be used within a SeatsProvider");
  }
  return context;
};
