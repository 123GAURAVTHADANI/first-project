import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import counterReducer from "../features/counterSlice";

let store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
