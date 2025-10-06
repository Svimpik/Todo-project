import type React from "react";
import "./Todo.scss";
import cn from "classnames";

type Props = {
  id: number;
  title: string;
  work: string;
  completed: boolean;
  onTogle: (id: number) => void;
  onDelete: (id: number) => void;
};

const Todo: React.FC<Props> = ({
  id,
  title,
  work,
  completed,
  onTogle,
  onDelete,
}) => {
  return (
    <div className="todo">
      <div className="todo__info">
        <button className="todo__checkbox" onClick={() => onTogle(id)}>
          {completed && (
            <img src="/public/done.svg" alt="done" className="todo__done" />
          )}
        </button>
        <h3
          className={cn("todo__title", {
            "todo--completed": completed,
          })}
        >
          {title}
        </h3>
        <p className="todo__work">{work}</p>
      </div>

      <div className="todo__button">
        <button className="todo__edit">
          <img src="/public/edit.svg" alt="edit" className="todo__img" />
        </button>
        <button className="todo__delete" onClick={() => onDelete(id)}>
          <img src="/public/delete.svg" alt="delete" className="todo__img" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
