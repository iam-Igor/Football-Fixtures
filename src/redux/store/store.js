import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers/reducer";

export const SERIE_A = "SERIE_A";
export const PREMIER_UK = "PREMIER_UK";
export const LIGA_ES = "LIGA_ES";

const store = configureStore({
  reducer: mainReducer,
});

export default store;
