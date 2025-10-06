import React, { useState } from "react";
import "./AddForm.scss";
import type { Todos } from "../../type";

type Props = {
  togleForm: () => void;
  onAdd: (newTodo: Omit<Todos, "id">) => void;
};

export const AddForm: React.FC<Props> = ({ togleForm, onAdd }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const [nameError, setNameError] = useState(false);
  const [nameErrorText, setNameErrorText] = useState("");

  const [typeError, setTypeError] = useState(false);
  const [typeErrorText, setTypeErrorText] = useState("");

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setNameError(false);
    setNameErrorText("");
  };

  const handleChangeType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value);
    setTypeError(false);
    setTypeErrorText("");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setNameError(false);
    setTypeError(false);

    let hasError = false;

    if (name.trim() === "") {
      setNameErrorText("Завдання порожнє!");
      setNameError(true);
      hasError = true;
    } else if (name.length > 40) {
      setNameErrorText("Ім'я надто довге!");
      setNameError(true);
      hasError = true;
    }

    if (type.trim() === "") {
      setTypeErrorText("Тип завдання порожнє!");
      setTypeError(true);
      hasError = true;
    } else if (type.length > 8) {
      setTypeErrorText("Тип завдання надто довгий!");
      setTypeError(true);
      hasError = true;
    }

    if (hasError) {
      return;
    }

    const newTodo: Omit<Todos, "id"> = {
      title: name,
      work: type,
      completed: false,
      important: false,
    };

    onAdd(newTodo);
    togleForm();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <button className="form__close" type="button" onClick={togleForm}>
        <img src="/public/close.svg" alt="close" className="form__img" />
      </button>
      <input
        type="text"
        className="form__input"
        placeholder="Завдання"
        value={name}
        onChange={handleChangeName}
      />

      {nameError && <p className="form__error">{nameErrorText}</p>}

      <input
        type="text"
        className="form__input"
        placeholder="Тип завдання"
        value={type}
        onChange={handleChangeType}
      />
      {typeError && <p className="form__error">{typeErrorText}</p>}

      <button type="submit" className="form__button">
        Готово!
      </button>
    </form>
  );
};
