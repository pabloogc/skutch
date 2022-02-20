import {configureStore} from "@reduxjs/toolkit";
import {documentSlice} from "app/document/DocumentSlice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
  reducer: {
    [documentSlice.api.reducerPath]: documentSlice.api.reducer,
    [documentSlice.slice.name]: documentSlice.slice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(documentSlice.api.middleware),
  enhancers: [],
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

