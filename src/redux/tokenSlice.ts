import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface TokenState {
  token: string;
}

const initialState: TokenState = {
  token: '',
} as TokenState;

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    addToken(state, { payload }: PayloadAction<string>){
      return {...state, token: payload}
    },
    resetToken(state: TokenState){
      return {...state, token: ''}
    }
  }
});

export const { addToken, resetToken } = tokenSlice.actions;

export const selectToken = (state: RootState) => state.token.token;

export default tokenSlice.reducer;