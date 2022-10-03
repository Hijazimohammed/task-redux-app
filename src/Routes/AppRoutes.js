import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DashboardHome from '../Components/DashboardHome';
import DashboardPage from '../pages/DashboardPage';
import LoginPage from '../pages/LoginPage';
import NewTask from '../pages/NewTask';
import TaskDetailsPage from '../pages/TaskDetailsPage';

function AppRoutes() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/login'
          element={
            isLoggedIn != true ? <LoginPage /> : <Navigate to='/dashboard' />
          }
        />
        <Route path='/' element={<Navigate to='/login' />} />
        <Route
          path='/dashboard'
          element={
            isLoggedIn != true ? <Navigate to='/' /> : <DashboardPage />
          }>
          <Route index element={<DashboardHome />} />
          <Route path=':id' element={<TaskDetailsPage />} />
          <Route path='new-task' element={<NewTask />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
