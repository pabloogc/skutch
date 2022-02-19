import {Action, configureStore, Store} from "@reduxjs/toolkit";
import {singleton} from "tsyringe";
import {Logger} from "core/middleware/Logger";

export interface AppState {
}

export interface RootAction extends Action {
}



export function rootReducer(state: AppState, action: RootAction): AppState {
  return state;
}

@singleton()
export class StoreManager {

  store!: Store<AppState, RootAction>;

  constructor(readonly logger: Logger) {
    this.store = configureStore({
      reducer: rootReducer,
      middleware: [this.logger.middleware],
      enhancers: [],
    });
  }
}