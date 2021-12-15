import { createAction } from "@reduxjs/toolkit";

const remove = createAction("contact/remove");
const filter = createAction("contact/filter");
const add = createAction("contact/add", (name, number) => {
  return {
    payload: {
      name,
      number,
    },
  };
});

const actions = { remove, filter, add };

export default actions;
