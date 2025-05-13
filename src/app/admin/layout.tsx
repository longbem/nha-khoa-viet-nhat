import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Admin Dashboard - Nha Khoa',
  description: 'Trang quản trị nha khoa',
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Nha Khoa Admin</h2>
        </div>
        <nav className="mt-4">
          <ul>
            <li>
              <a href="/admin/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                Dashboard
              </a>
            </li>
            <li>
              <a href="/admin/patients" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                Quản lý bệnh nhân
              </a>
            </li>
            <li>
              <a href="/admin/appointments" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                Lịch hẹn
              </a>
            </li>
            <li>
              <a href="/admin/services" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                Dịch vụ
              </a>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Main content */}
      <div className="flex-1">
        {/* Top navigation */}
        <div className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h1 className="text-lg font-medium">Admin Dashboard</h1>
          <div className="flex items-center">
            <span className="mr-4">Admin User</span>
            <button className="px-3 py-1 bg-gray-200 rounded-md text-sm">
              Đăng xuất
            </button>
          </div>
        </div>
        
        {/* Page content */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}