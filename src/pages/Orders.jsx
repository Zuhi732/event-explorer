const Orders = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-10">My Booked Events</h2>
      <div className="overflow-x-auto">
        <table className="table border">
          {/* head */}
          <thead>
            <tr className="bg-base-200">
              <th>#</th>
              <th>Event Name</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr>
              <th>1</th>
              <td>Tech Innovation Summit 2024</td>
              <td>Nov 20, 2024</td>
              <td>
                <div className="badge badge-success text-white">Confirmed</div>
              </td>
            </tr>
            {/* Row 2 */}
            <tr>
              <th>2</th>
              <td>Grand Food Festival</td>
              <td>Dec 12, 2024</td>
              <td>
                <div className="badge badge-warning text-white">Pending</div>
              </td>
            </tr>
            {/* Row 3 */}
            <tr>
              <th>3</th>
              <td>Live Music Concert</td>
              <td>Dec 25, 2024</td>
              <td>
                <div className="badge badge-ghost">Canceled</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
