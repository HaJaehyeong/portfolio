import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type AboutExplorerState = {
  type: 'terminal' | 'user' | 'gamepad';
  directoryId?: number;
  fileId?: number;
};

const initialState = {
  type: 'terminal',
  directoryId: undefined,
  fileId: undefined,
} as AboutExplorerState;

export const aboutExplorer = createSlice({
  name: 'aboutExplorer',
  initialState,
  reducers: {
    setAboutExplorerState(state, action: PayloadAction<AboutExplorerState>) {
      return action.payload;
    },
    setAboutExplorerType(state, action: PayloadAction<'terminal' | 'user' | 'gamepad'>) {
      return {
        ...state,
        type: action.payload,
      };
    },
    setAboutExplorerDirectoryId(state, action: PayloadAction<number | undefined>) {
      return {
        ...state,
        directoryId: action.payload,
      };
    },
    setAboutExplorerFileId(state, action: PayloadAction<number | undefined>) {
      return {
        ...state,
        fileId: action.payload,
      };
    },
  },
});

export const { setAboutExplorerState, setAboutExplorerType, setAboutExplorerDirectoryId, setAboutExplorerFileId } =
  aboutExplorer.actions;
export default aboutExplorer.reducer;
