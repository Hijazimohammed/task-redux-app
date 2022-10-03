import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';

const DashboardPage = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default DashboardPage;
