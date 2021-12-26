import { createReducer, combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import actions from "./actions";

import storage from "redux-persist/lib/storage";

const contactReducer = createReducer(
  JSON.parse(localStorage.getItem("contacts")) || [],
  {
    [actions.add]: (state, action) => {
      const short = require("short-uuid");
      const id = short.generate();
      return [
        ...state,
        { id: id, name: action.payload.name, number: action.payload.number },
      ];
    },

    [actions.remove]: (state, action) => {
      return state.reduce((acc, el) => {
        if (el.id !== action.payload) {
          acc.push(el);
        }
        return acc;
      }, []);
    },
  }
);

const filterReducer = createReducer("", {
  [actions.filter]: (state, filter) => filter.payload,
});

const persistConfig = {
  key: "contacts",
  storage,
};

const itemReducer = combineReducers({
  items: contactReducer,
  filter: filterReducer,
});

const rootReducer = combineReducers({
  contacts: persistReducer(persistConfig, itemReducer),
});

export default rootReducer;
