import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type ProjectFilterState = {
  tabs: string[];
};

const initialState = {
  tabs: [],
} as ProjectFilterState;

export const projectFilter = createSlice({
  name: 'projectFilter',
  initialState,
  reducers: {
    setProjectFilterTabs(state, action: PayloadAction<string[]>) {
      return { tabs: action.payload };
    },
    addProjectFilterTab(state, action: PayloadAction<string>) {
      return {
        tabs: [...state.tabs, action.payload],
      };
    },
    removeProjectFilterTab(state, action: PayloadAction<string>) {
      return {
        tabs: state.tabs.filter((tab) => tab !== action.payload),
      };
    },
  },
});

export const { setProjectFilterTabs, addProjectFilterTab, removeProjectFilterTab } = projectFilter.actions;
export default projectFilter.reducer;
