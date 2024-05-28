import "./App.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainBlock from "./components/MainBlock";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <MainBlock />
      </div>
    </div>
  );
};

export default App;
