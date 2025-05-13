import Link from "next/link";
import { FC } from "react";

interface HeaderClientProps {}

const HeaderClient: FC<HeaderClientProps> = ({}) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/client" className="text-2xl font-bold text-blue-600">
              Nha Khoa
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/client"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium"
            >
              Trang chủ
            </Link>
            <Link
              href="/client/services"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium"
            >
              Dịch vụ
            </Link>
            <Link
              href="/client/doctors"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium"
            >
              Bác sĩ
            </Link>
            <Link
              href="/client/about"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium"
            >
              Giới thiệu
            </Link>
            <Link
              href="/client/contact"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium"
            >
              Liên hệ
            </Link>
          </nav>

          {/* Action buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/client/appointment"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Đặt lịch hẹn
            </Link>
            <button className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderClient;
