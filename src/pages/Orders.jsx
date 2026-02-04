import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Orders = () => {
  // 1. ডামি ডাটা (State এ রাখা হলো যাতে ডিলিট করা যায়)
  const [orders, setOrders] = useState([
    {
      id: 1,
      name: "Tech Innovation Summit 2024",
      date: "Nov 20, 2024",
      status: "Confirmed",
      statusColor: "green",
    },
    {
      id: 2,
      name: "Grand Food Festival",
      date: "Dec 12, 2024",
      status: "Pending",
      statusColor: "yellow",
    },
    {
      id: 3,
      name: "Live Music Concert",
      date: "Dec 25, 2024",
      status: "Canceled",
      statusColor: "red",
    },
  ]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // 2. ডিলিট ফাংশন
  const handleDelete = (id) => {
    const remainingOrders = orders.filter((order) => order.id !== id);
    setOrders(remainingOrders);
    toast.error("Event deleted successfully!");
  };

  return (
    <div className="min-h-screen pt-24 px-4 pb-10 max-w-6xl mx-auto">
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-5xl font-bold text-gradient mb-4">
          My Booked Events
        </h2>
        <p className="text-gray-400">Manage your bookings efficiently.</p>
      </div>

      <div
        className="overflow-x-auto glass-effect rounded-2xl shadow-2xl border border-white/10"
        data-aos="fade-up"
      >
        <table className="table w-full">
          {/* Table Head */}
          <thead className="bg-neonBlue/10 text-white text-lg">
            <tr>
              <th className="py-6 pl-8">#</th>
              <th>Event Name</th>
              <th>Date</th>
              <th>Status</th>
              <th className="text-right pr-8">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-gray-300">
            {orders.map((order, index) => (
              <tr
                key={order.id}
                className="hover:bg-white/5 transition-colors border-b border-white/5"
              >
                <th className="pl-8 font-bold text-neonPink">{index + 1}</th>
                <td className="font-semibold text-white">{order.name}</td>
                <td>{order.date}</td>
                <td>
                  <div
                    className={`badge border-none bg-${order.statusColor}-500/20 text-${order.statusColor}-400 font-bold p-3`}
                  >
                    ● {order.status}
                  </div>
                </td>
                <td className="text-right pr-8">
                  {/* Delete Button (Cross Icon) */}
                  <button
                    onClick={() => handleDelete(order.id)}
                    className="btn btn-sm btn-circle btn-outline border-red-500 text-red-500 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all"
                    title="Delete Event"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* যদি কোনো অর্ডার না থাকে */}
        {orders.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No bookings found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
