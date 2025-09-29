import TodoList from "../TodoList/TodoList";
import "./Main.scss";

const Main = () => {
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
        <button className="welcome__button">Почати</button>
      </div>

      <TodoList />
    </main>
  );
};

export default Main;
