import {Middleware} from "@reduxjs/toolkit";
import {singleton} from "tsyringe";


@singleton()
export class Logger {
  middleware: Middleware = store => next => action => {
    console.group(action.type);
    console.info("dispatching", action);
    let result = next(action);
    console.log("next state", store.getState());
    console.groupEnd();
    return result;
  };
}
