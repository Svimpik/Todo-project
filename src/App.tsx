import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import Sidebar from "./component/Sidebar/Sidebar";
import type { Todos } from "./type";
import { client } from "./api";
import { AddForm } from "./component/AddForm/AddForm";

const App = () => {
  const [todoList, setTodoList] = useState<Todos[]>([]);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const API_URL = "http://localhost:3000/tasks";

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await client.fetchData<Todos[]>(API_URL);
        setTodoList(data);
      } catch (error) {
        console.log(error);
      }
    };

    loadData();
  }, []);

  const onToogle = async (id: number) => {
    try {
      const todo = todoList.find((t) => t.id === id);
      if (!todo) return;

      const updated = await client.patchData<Todos>(`${API_URL}/${id}`, {
        completed: !todo.completed,
      });

      setTodoList((prev) => prev.map((t) => (t.id === id ? updated : t)));
    } catch (error) {
      console.error(error);
    }
  };

  const onDelete = async (id: number) => {
    try {
      await client.deleteData(API_URL, id);
      const updated = todoList.filter((todo) => todo.id !== id);

      setTodoList(updated);
    } catch (error) {
      console.error(error);
    }
  };

  const onAdd = async (newTodo: Omit<Todos, "id">) => {
    const createdTodo = await client.addData<Todos>(API_URL, newTodo);

    setTodoList([...todoList, createdTodo]);
  };

  const togleForm = () => {
    setIsOpenForm((prev) => !prev);
  };

  return (
    <div className="app">
      <Header />
      <Sidebar />
      <Main
        todos={todoList}
        onToogle={onToogle}
        onDelete={onDelete}
        isOpenForm={togleForm}
      />

      {isOpenForm && (
        <div className="modal">
          <div className="modal__overlay"></div>
          <div className="modal__content">
            <AddForm togleForm={togleForm} onAdd={onAdd} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
