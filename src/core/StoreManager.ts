import {configureStore, Store} from "@reduxjs/toolkit";
import {artboardSlice, DocumentSlice} from "app/document/DocumentSlice";


export class StoreManager {
  store!: Store;

  constructor(readonly artboardSlice: DocumentSlice) {
    this.store = configureStore({
      reducer: {
        [artboardSlice.documentApi.reducerPath]: artboardSlice.documentApi.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(artboardSlice.documentApi.middleware),
      enhancers: [],
    });
  }
}

export const storeManager = new StoreManager(artboardSlice);
