import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import BottomNav from './component/BottomNav';
import UserPage from './pages/UserPage';
import Calendar from './pages/Calendar';
import TodoList from "./pages/TodoList";
import TopNav from "./component/TopNav";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <TopNav />
      <main className="main">
        <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/userpage" element={<UserPage />} />
        </Routes>
      </main>
      <BottomNav />
    </div>
    </BrowserRouter>
  );
}

export default App;
