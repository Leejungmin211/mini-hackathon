import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Suspense, lazy } from 'react';
import './App.css';
import ErrorPage from "./pages/ErrorPage";
import styled from "styled-components"

const MainCalendar = lazy(() => import('./pages/MainCalendar'));
const TodoList = lazy(() => import("./pages/TodoList"));
const UserPage = lazy(() => import('./pages/UserPage'));
const TopNav = lazy(() => import('./component/TopNav'));
const Weather = lazy(() => import('./component/Weather'));
const BottomNav = lazy(() => import('./component/BottomNav'));

const MainWrapper = styled.div`
display: flex;
`
const SideWrapper = styled.div`
display: flex;
flex-direction: column;
`
function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
    <div className="app-wrapper">
      <div className="weather">
        <Weather />
      </div>
     <MainWrapper>
     <SideWrapper>
      <BottomNav />
      </SideWrapper>
    <div className="App">
      <TopNav />
      <main className="main">
        <Routes>
        <Route path="/" element={<MainCalendar />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/userpage" element={<UserPage />} />
        </Routes>
      </main>
    </div>
    </MainWrapper>
     </div>
    </Suspense>
    </BrowserRouter>
  );
}

export default App;
