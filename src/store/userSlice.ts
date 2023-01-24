import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '../models/User';
import { RootState } from './store';

export interface UserState {
  user: User;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
}

const initialState = {
  user: {} as User,
  status: 'idle',
  error: null as string | null | undefined,
} as UserState;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, { payload }: PayloadAction<User>) {
     state.user = payload;
    },
    logout(state) {
      state.user = {} as User;
    }
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;