import s from "./Filter.module.css";

import { useSelector, useDispatch } from "react-redux";

import actions from "../../redux/actions";
import React from "react";

const Filter = () => {
  const name = useSelector((state) => state.actions);
  const dispatch = useDispatch();
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={name}
        onChange={(event) =>
          dispatch(actions.filter(event.currentTarget.value))
        }
      />
    </label>
  );
};

export default Filter;
