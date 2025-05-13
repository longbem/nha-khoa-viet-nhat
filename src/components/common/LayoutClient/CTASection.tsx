import Link from "next/link";
import { FC } from "react";

interface CTASectionClientProps {}

const CTASectionClient: FC<CTASectionClientProps> = () => {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Bắt đầu hành trình nụ cười khỏe mạnh
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí và đặt lịch
          hẹn khám.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/client/appointment"
            className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition"
          >
            Đặt lịch ngay
          </Link>
          <Link
            href="/client/contact"
            className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-medium transition"
          >
            Liên hệ chúng tôi
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASectionClient;
