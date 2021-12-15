import s from "./Contacts.module.css";
import { useSelector, useDispatch } from "react-redux";

import actions from "../../redux/actions";
import React from "react";

const Contacts = () => {
  const list = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);

  const dispatch = useDispatch();

  return (
    <ul>
      {list
        .filter((el) => el.name.toLowerCase().includes(filter.toLowerCase()))
        .map((el) => (
          <li key={el.id} className={s.listItem}>
            <span className={s.item}>{el.name}:</span>
            <span className={s.item}>{el.number}</span>
            <button
              onClick={() => dispatch(actions.remove(el.id))}
              type="button"
              className={s.button}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default Contacts;
