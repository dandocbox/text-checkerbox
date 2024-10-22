import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className="flex h-screen bg-[#f8f9fb] text-gray-700">
      <Sidebar />
      <main className="flex-1 overflow-auto p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;