import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cardSlice from './slices/cardSlice';

export const store = configureStore({
  reducer: {
    cardSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
