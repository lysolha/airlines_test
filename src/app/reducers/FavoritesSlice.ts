import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { Flight } from "../../Entities/Flight";

interface Favorites {
  favorites: Flight[];
}

const initialState: Favorites = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, { payload }: PayloadAction<Flight>) => {
      state.favorites.push(payload);
    },
    removeFromFavorites: (state, { payload }: PayloadAction<Flight>) => {
      state.favorites = state.favorites.filter(
        (ticket) => ticket.id !== payload.id,
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;
