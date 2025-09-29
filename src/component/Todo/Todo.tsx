import "./Todo.scss";

const Todo = () => {
  return (
    <div className="todo">
      <div className="todo__info">
        <button className="todo__checkbox">
          <img src="/public/done.svg" alt="done" className="todo__done" />
        </button>
        <h3 className="todo__task">Зробити звіт</h3>
        <p className="todo__work">навчання</p>
      </div>

      <div className="todo__button">
        <button className="todo__edit">
          <img src="/public/edit.svg" alt="edit" className="todo__img" />
        </button>
        <button className="todo__delete">
          <img src="/public/delete.svg" alt="delete" className="todo__img" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
