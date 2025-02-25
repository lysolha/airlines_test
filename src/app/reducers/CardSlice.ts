import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { Ticket } from "../../Entities/Ticket";

interface CardState {
  tickets: Ticket[];
}

const initialState: CardState = {
  tickets: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<Ticket[]>) => {
      state.tickets.push(...payload);
    },
    removeFromCart: (state, { payload }: PayloadAction<Ticket>) => {
      state.tickets = state.tickets.filter(
        (ticket) =>
          ticket.flightId !== payload.flightId || ticket.id !== payload.id,
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
