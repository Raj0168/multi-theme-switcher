import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { FontScale, ThemeName } from "../../types";

interface ThemeState {
  currentTheme: ThemeName;
  fontScale: FontScale;
}

const initialState: ThemeState = {
  currentTheme: "theme1",
  fontScale: "medium",
};

// creates a slice of the redux state with reducers
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    // reducer function to change the theme
    setTheme(state, action: PayloadAction<ThemeName>) {
      state.currentTheme = action.payload;
    },
    // reducer function to change the font size
    setFontScale(state, action: PayloadAction<FontScale>) {
      state.fontScale = action.payload;
    },
  },
});

export const { setTheme, setFontScale } = themeSlice.actions;
export default themeSlice.reducer;
