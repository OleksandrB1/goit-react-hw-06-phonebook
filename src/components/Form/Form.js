import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../redux/actions";
import s from "./Form.module.css";

export default function Form() {
  const [nameState, setNameState] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.contacts.items);

  const submit = (event) => {
    event.preventDefault();
    if (state.find((contact) => contact.name === nameState)) {
      alert(`${nameState} is already in contacts.`);
      return;
    }
    dispatch(actions.add(nameState, number));
    setNameState("");
    setNumber("");
  };

  return (
    <div>
      <form className={s.form} onSubmit={submit}>
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={nameState}
            onChange={(e) => {
              setNameState(e.currentTarget.value);
            }}
          />
        </label>
        <label className={s.label}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={(e) => {
              setNumber(e.currentTarget.value);
            }}
          />
        </label>

        <button className={s.button} type="submit">
          Add contacts
        </button>
      </form>
    </div>
  );
}
