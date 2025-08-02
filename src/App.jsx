import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/MainLayout/MainLayout";
import Home from "./components/Home/Home";
import TodoList from "./components/TodoList/TodoList";
import GitProfile from "./components/GitProfile/GitProfile";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/github" element={<GitProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
