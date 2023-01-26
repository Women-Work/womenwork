import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { UserProfile } from '../models/UserProfile';
import { UserUpdate } from '../models/UserUpdate';
import { update } from '../services/UserService';
import { RootState } from './store';
import { getReduxState } from './utils';

const baseURL = '/users';

export interface UserState {
  user: UserProfile;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
}

const initialState = {
  user: {} as UserProfile,
  status: 'idle',
  error: null as string | null | undefined,
} as UserState;

export const updateUser = createAsyncThunk<
  UserProfile,
  UserUpdate
>('user/updateUser', async (payload: UserUpdate) => {
  let response: UserProfile;
  try{
    switch (payload.type) {
      case 'addProduct':
        if(!payload.payload.productId) throw new Error('Product ID is required');
        const user = {
          id: payload.id,
          product: [{
            id: payload.payload.productId,
          }]
        }
        response = await update(`${baseURL}/update`, user, getReduxState().token.token);
        break;
    }
    
    return response;
  } catch (err: any) {
    return Promise.reject(err);
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, { payload }: { payload: UserProfile }) {
      state.user = payload;
    },
    logout(state) {
      state.user = {} as UserProfile;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.user = payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      }
    )
  }
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;