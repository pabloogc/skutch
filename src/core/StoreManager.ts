import {configureStore, Store} from "@reduxjs/toolkit";
import {artboardSlice, ArtboardSlice} from "app/artboards/ArtboardSlice";


export class StoreManager {
  store!: Store;

  constructor(readonly artboardSlice: ArtboardSlice) {
    this.store = configureStore({
      reducer: {
        [artboardSlice.artboardApi.reducerPath]: artboardSlice.artboardApi.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(artboardSlice.artboardApi.middleware),
      enhancers: [],
    });
  }
}

export const storeManager = new StoreManager(artboardSlice);
