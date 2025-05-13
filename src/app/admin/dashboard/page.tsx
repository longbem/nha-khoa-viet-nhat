import React from "react";

export default function AdminDashboard() {
  // Dữ liệu giả cho thống kê
  const stats = [
    {
      title: "Bệnh nhân mới",
      value: "12",
      change: "+20%",
      changeType: "increase",
    },
    {
      title: "Cuộc hẹn hôm nay",
      value: "8",
      change: "-5%",
      changeType: "decrease",
    },
    {
      title: "Doanh thu tháng",
      value: "45M VND",
      change: "+12%",
      changeType: "increase",
    },
    {
      title: "Tổng bệnh nhân",
      value: "1,205",
      change: "+8%",
      changeType: "increase",
    },
  ];

  // Dữ liệu giả cho lịch hẹn
  const appointments = [
    {
      id: 1,
      patient: "Nguyễn Văn A",
      time: "09:00",
      service: "Khám tổng quát",
      status: "confirmed",
    },
    {
      id: 2,
      patient: "Trần Thị B",
      time: "10:30",
      service: "Tẩy trắng răng",
      status: "pending",
    },
    {
      id: 3,
      patient: "Lê Văn C",
      time: "13:45",
      service: "Niềng răng",
      status: "confirmed",
    },
    {
      id: 4,
      patient: "Phạm Thị D",
      time: "15:15",
      service: "Cạo vôi răng",
      status: "cancelled",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
            <div className="flex items-baseline mt-2">
              <p className="text-2xl font-semibold text-gray-900">
                {stat.value}
              </p>
              <span
                className={`ml-2 text-xs font-medium ${
                  stat.changeType === "increase"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Appointments */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">
            Lịch hẹn hôm nay
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Bệnh nhân
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Thời gian
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Dịch vụ
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Trạng thái
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {appointment.patient}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {appointment.time}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {appointment.service}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        appointment.status === "confirmed"
                          ? "bg-green-100 text-green-800"
                          : appointment.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {appointment.status === "confirmed"
                        ? "Đã xác nhận"
                        : appointment.status === "pending"
                        ? "Chờ xác nhận"
                        : "Đã hủy"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      Chi tiết
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      Chỉnh sửa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick actions */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Thao tác nhanh
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
            Thêm lịch hẹn mới
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition">
            Thêm bệnh nhân mới
          </button>
          <button className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition">
            Báo cáo tháng
          </button>
        </div>
      </div>
    </div>
  );
}
