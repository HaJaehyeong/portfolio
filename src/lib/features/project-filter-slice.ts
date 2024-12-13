import { TechnologyEnum } from '@/enums/technology.enum';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type ProjectFilterState = {
  technologies: TechnologyEnum['code'][];
};

const initialState = {
  technologies: [],
} as ProjectFilterState;

export const projectFilter = createSlice({
  name: 'projectFilter',
  initialState,
  reducers: {
    initProjectFilterState: () => initialState,
    setProjectFilterTechnologiesState(state, action: PayloadAction<TechnologyEnum['code'][]>) {
      return { technologies: action.payload };
    },
    addProjectFilterTechnologyState(state, action: PayloadAction<TechnologyEnum['code']>) {
      return {
        technologies: [...state.technologies, action.payload],
      };
    },
    removeProjectFilterTechnologyState(state, action: PayloadAction<TechnologyEnum['code']>) {
      return {
        technologies: state.technologies.filter((tech) => tech !== action.payload),
      };
    },
  },
});

export const {
  initProjectFilterState,
  setProjectFilterTechnologiesState,
  addProjectFilterTechnologyState,
  removeProjectFilterTechnologyState,
} = projectFilter.actions;
export default projectFilter.reducer;
