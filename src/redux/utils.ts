import { RootState } from './store';

export const getReduxState: () => RootState = () => require('./store').store.getState();