import "./App.scss";
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import Sidebar from "./component/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
