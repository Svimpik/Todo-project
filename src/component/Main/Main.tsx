import type { Todos } from "../../type";
import TodoList from "../TodoList/TodoList";
import "./Main.scss";

type Props = {
  todos: Todos[];
  onToogle: (id: number) => void;
  onDelete: (id: number) => void;
  isOpenForm: () => void;
};

const Main: React.FC<Props> = ({ todos, onToogle, onDelete, isOpenForm }) => {
  return (
    <main className="main">
      <div className="welcome">
        <h1 className="welcome__title">
          Організуй свій день легко
          <img src="/public/stars.svg" alt="stars" className="welcome__img" />
        </h1>
        <p className="welcome__text">
          Створюй, редагуй і відмічай завдання у зручному списку
        </p>
        <button className="welcome__button" onClick={isOpenForm}>
          Почати
        </button>
      </div>

      <TodoList
        todos={todos}
        onToogle={onToogle}
        onDelete={onDelete}
        isOpenForm={isOpenForm}
      />
    </main>
  );
};

export default Main;
