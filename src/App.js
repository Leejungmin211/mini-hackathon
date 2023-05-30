import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
// import ErrorPage from './pages/ErrorPage';

const MainCalendar = lazy(() => import('./pages/MainCalendar'));
const TodoList = lazy(() => import('./pages/TodoList'));
const UserPage = lazy(() => import('./pages/UserPage'));
const TopNav = lazy(() => import('./component/TopNav'));
const Weather = lazy(() => import('./component/Weather'));
const Header = lazy(() => import('./component/Header'));

const MainWrapper = styled.div`
  display: flex;
`;
const HeaderWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
  box-sizing: border-box;
  background: #ffffff00;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 2;
`;
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="app-wrapper">
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
          <div className="weather">
            <Weather />
          </div>
          <MainWrapper>
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
