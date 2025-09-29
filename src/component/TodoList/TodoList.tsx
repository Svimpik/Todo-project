import "./TodoList.scss";
import Todo from "../Todo/Todo";

const TodoList = () => {
  return (
    <div className="todo-list">
      <h1 className="todo-list__title">Сьогодні</h1>
      <div className="todo-list__controls">
        <button className="todo-list__add">+ Додати задачу</button>
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
        <Todo />
        <Todo />
        <Todo />
      </ul>
    </div>
  );
};

export default TodoList;
