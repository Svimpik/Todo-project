import "./TodoList.scss";
import Todo from "../Todo/Todo";
import type { Todos } from "../../type";
import type React from "react";

type Props = {
  todos: Todos[];
  onToogle: (id: number) => void;
  onDelete: (id: number) => void;
  isOpenForm: () => void;
};

const TodoList: React.FC<Props> = ({
  todos,
  onToogle,
  onDelete,
  isOpenForm,
}) => {
  return (
    <div className="todo-list">
      <h1 className="todo-list__title">Сьогодні</h1>
      <div className="todo-list__controls">
        <button className="todo-list__add" onClick={isOpenForm}>
          + Додати задачу
        </button>
        <button className="todo-list__search">
          <img
            src="/public/search.svg"
            alt="search"
            className="todo-list__icon"
          />
        </button>
      </div>
      <div className="todo-list__filters">
        <button className="todo-list__filter">Усі</button>
        <button className="todo-list__filter">Активні</button>
        <button className="todo-list__filter">Виконані</button>
      </div>

      <ul className="todo-list__items">
        {todos.map((todo) => (
          <Todo
            id={todo.id}
            title={todo.title}
            work={todo.work}
            completed={todo.completed}
            key={todo.id}
            onTogle={onToogle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
