import Link from "next/link";
import { FC } from "react";

interface FooterClientProps {}

const FooterClient: FC<FooterClientProps> = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Nha Khoa</h3>
            <p className="text-gray-400 max-w-xs">
              Chăm sóc sức khỏe răng miệng chuyên nghiệp, tạo nên những nụ cười
              rạng rỡ.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-3">Dịch Vụ</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/client/services#general"
                    className="text-gray-400 hover:text-white"
                  >
                    Khám Tổng Quát
                  </Link>
                </li>
                <li>
                  <Link
                    href="/client/services#implant"
                    className="text-gray-400 hover:text-white"
                  >
                    Trồng Răng Implant
                  </Link>
                </li>
                <li>
                  <Link
                    href="/client/services#whitening"
                    className="text-gray-400 hover:text-white"
                  >
                    Tẩy Trắng Răng
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Liên Kết</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Trang Chủ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/client/about"
                    className="text-gray-400 hover:text-white"
                  >
                    Về Chúng Tôi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/client/contact"
                    className="text-gray-400 hover:text-white"
                  >
                    Liên Hệ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Giờ Làm Việc</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Thứ 2 - Thứ 6: 8:00 - 19:00</li>
                <li>Thứ 7: 8:00 - 17:00</li>
                <li>Chủ nhật: 9:00 - 15:00</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Nha Khoa. Tất cả các quyền được
            bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterClient;
