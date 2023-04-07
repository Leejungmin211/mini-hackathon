import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import BottomNav from './component/BottomNav';
import UserPage from './pages/UserPage';
import MainCalendar from './pages/MainCalendar';
import TodoList from "./pages/TodoList";
import TopNav from "./component/TopNav";
import Weather from "./component/Weather";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <div className="weather">
        <Weather />
      </div>
    <div className="App">
      <TopNav />
      <main className="main">
        <Routes>
        <Route path="/" element={<MainCalendar />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/userpage" element={<UserPage />} />
        </Routes>
      </main>
      <BottomNav />
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
