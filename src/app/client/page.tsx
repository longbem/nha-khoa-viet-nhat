import React from "react";
import Link from "next/link";

export default function ClientHomePage() {
  // Dữ liệu giả cho dịch vụ
  const services = [
    {
      id: 1,
      title: "Khám Tổng Quát",
      description:
        "Kiểm tra sức khỏe răng miệng toàn diện với các thiết bị hiện đại.",
      icon: "🦷",
    },
    {
      id: 2,
      title: "Tẩy Trắng Răng",
      description:
        "Giải pháp làm trắng răng an toàn, hiệu quả trong thời gian ngắn.",
      icon: "✨",
    },
    {
      id: 3,
      title: "Niềng Răng",
      description:
        "Công nghệ niềng răng tiên tiến, đảm bảo thẩm mỹ trong quá trình điều trị.",
      icon: "😁",
    },
    {
      id: 4,
      title: "Implant Nha Khoa",
      description:
        "Phục hồi răng mất với implant chất lượng cao, bền chắc như răng thật.",
      icon: "🔧",
    },
  ];

  // Dữ liệu giả cho bác sĩ
  const doctors = [
    {
      id: 1,
      name: "TS.BS Nguyễn Văn A",
      specialty: "Phẫu thuật Implant",
      image: "https://placehold.co/300x300/dddddd/333333?text=BS.A",
    },
    {
      id: 2,
      name: "PGS.TS Trần Thị B",
      specialty: "Chỉnh nha",
      image: "https://placehold.co/300x300/dddddd/333333?text=BS.B",
    },
    {
      id: 3,
      name: "BS Lê Văn C",
      specialty: "Thẩm mỹ răng sứ",
      image: "https://placehold.co/300x300/dddddd/333333?text=BS.C",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Chăm sóc nụ cười của bạn là sứ mệnh của chúng tôi
            </h1>
            <p className="text-xl mb-8">
              Phòng khám nha khoa chuyên nghiệp với đội ngũ bác sĩ giàu kinh
              nghiệm và trang thiết bị hiện đại.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/client/appointment"
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition"
              >
                Đặt lịch ngay
              </Link>
              <Link
                href="/client/services"
                className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-medium transition"
              >
                Xem dịch vụ
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute right-0 top-0 h-full w-1/3 bg-[url('https://placehold.co/800x600/dddddd/333333?text=Dental+Image')] bg-cover bg-center"></div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Dịch vụ của chúng tôi
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Chúng tôi cung cấp các dịch vụ nha khoa chất lượng cao
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <Link
                  href={`/client/services/${service.id}`}
                  className="mt-4 inline-block text-blue-600 hover:underline"
                >
                  Tìm hiểu thêm →
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/client/services"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Xem tất cả dịch vụ
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Tại sao chọn chúng tôi?
              </h2>

              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Đội ngũ bác sĩ chuyên nghiệp
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Các bác sĩ của chúng tôi được đào tạo chuyên sâu và có
                      nhiều năm kinh nghiệm trong lĩnh vực nha khoa.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Trang thiết bị hiện đại
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Ứng dụng công nghệ tiên tiến và thiết bị nha khoa hiện đại
                      giúp điều trị hiệu quả và thoải mái.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Tiết kiệm thời gian
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Quy trình làm việc hiệu quả, không cần chờ đợi lâu và linh
                      hoạt đặt lịch hẹn.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="aspect-w-16 aspect-h-9 relative h-[400px]">
                <div className="absolute inset-0 bg-[url('https://placehold.co/800x600/dddddd/333333?text=Modern+Dental+Clinic')] bg-cover bg-center rounded-lg shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Đội ngũ bác sĩ</h2>
            <p className="mt-4 text-xl text-gray-600">
              Các chuyên gia nha khoa hàng đầu của chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <div className="h-64 relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${doctor.image})` }}
                  ></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                  <p className="text-blue-600 mb-4">{doctor.specialty}</p>
                  <Link
                    href={`/client/doctors/${doctor.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Xem thông tin chi tiết →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/client/doctors"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Xem tất cả bác sĩ
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Khách hàng nói gì về chúng tôi
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Trải nghiệm của khách hàng khi sử dụng dịch vụ tại Nha Khoa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "Tôi rất hài lòng với dịch vụ tại đây. Bác sĩ tư vấn chi tiết và
                tận tâm. Giá cả hợp lý và chất lượng điều trị tuyệt vời."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    Nguyễn Văn X
                  </p>
                  <p className="text-sm text-gray-500">Khách hàng</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "Phòng khám rất sạch sẽ, hiện đại. Tôi đã làm dịch vụ niềng răng
                và rất hài lòng với kết quả. Nhân viên thân thiện và chuyên
                nghiệp."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    Trần Thị Y
                  </p>
                  <p className="text-sm text-gray-500">Khách hàng</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "Con tôi rất sợ đi khám răng nhưng các bác sĩ ở đây rất tận tình
                và nhẹ nhàng. Môi trường thân thiện với trẻ em, tôi sẽ tiếp tục
                đưa con đến đây."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Lê Văn Z</p>
                  <p className="text-sm text-gray-500">Khách hàng</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Bắt đầu hành trình nụ cười khỏe mạnh
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí và đặt
            lịch hẹn khám.
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
    </div>
  );
}
