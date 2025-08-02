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

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeName>) {
      state.currentTheme = action.payload;
    },
    setFontScale(state, action: PayloadAction<FontScale>) {
      state.fontScale = action.payload;
    },
  },
});

export const { setTheme, setFontScale } = themeSlice.actions;
export default themeSlice.reducer;
