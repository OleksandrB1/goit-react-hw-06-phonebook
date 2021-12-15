import { useState } from "react";
import { useDispatch } from "react-redux";
import actions from "../../redux/actions";
import s from "./Form.module.css";

export default function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const submit = (event) => {
    event.preventDefault();
    dispatch(actions.add(name, number));
    setName("");
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
            value={name}
            onChange={(e) => {
              setName(e.currentTarget.value);
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
