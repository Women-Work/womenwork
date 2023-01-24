import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import Course from '../models/Course';
import { searchList } from '../services/Service';
import { RootState } from './store';

const baseURL = '/products';
export interface RequestProps {
  url: string;
  token: string;
}
 
export interface CoursesState {
  courses: Course[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
}

const initialState = {
  courses: [] as Course[],
  status: 'idle',
  error: null as string | null | undefined,
} as CoursesState;

export const fetchCourses = createAsyncThunk('courses/fetchCourses', async (token: string) => {
  try{
    const response = await searchList(baseURL, token);
    return response;
  } catch (err) {
    return err;
  }
});

export const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    addCourse(state, { payload }: { payload: Course }) {
      state.courses.push(payload);
    },
    removeCourse(state, { payload }: { payload: Course }) {
      state.courses = state.courses.filter((course) => course.id !== payload.id);
    },
    updateCourse(state, { payload }: { payload: Course }) {
      const index = state.courses.findIndex((course) => course.id === payload.id);
      state.courses[index] = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCourses.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.courses = payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      }
    );


  },
});

export const { addCourse, removeCourse, updateCourse } = coursesSlice.actions;

export const selectAllCourses = (state: RootState) => state.courses.courses;
export const getCoursesStatus = (state: RootState) => state.courses.status;
export const getCoursesError = (state: RootState) => state.courses.error;

export default coursesSlice.reducer;