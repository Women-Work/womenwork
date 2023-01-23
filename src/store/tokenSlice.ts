import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface TokenState {
  value: string;
}

const initialState: TokenState = {
  value: '',
} as TokenState;

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    addToken(state, { payload }: PayloadAction<string>){
      return {...state, value: payload}
    },
    resetToken(state: TokenState){
      return {...state, value: ''}
    }
  }
});

export const { addToken, resetToken } = tokenSlice.actions;

export const selectToken = (state: RootState) => state.token.value;

export default tokenSlice.reducer;