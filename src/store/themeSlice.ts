import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  font: string;
}

const initialState: ThemeState = {
  font: 'inter',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setFont: (state, action: PayloadAction<string>) => {
      state.font = action.payload;
    },
  },
});

export const { setFont } = themeSlice.actions;
export default themeSlice.reducer;
