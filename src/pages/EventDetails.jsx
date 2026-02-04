import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EventDetails = () => {
  const events = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const event = events.find((job) => job.id === idInt);

  const handleApplyJob = () => {
    toast.success("You have booked the seat successfully");
  };

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-4 my-10">
        <div className="border md:col-span-4 p-4 rounded-lg bg-base-200">
          <img
            src={event.image}
            className="w-full h-96 object-cover rounded-lg mb-6"
            alt=""
          />
          <h2 className="text-4xl font-bold mb-4">{event.title}</h2>
          <p className="text-lg mb-2">
            <span className="font-bold">Date:</span> {event.date}
          </p>
          <p className="text-lg mb-2">
            <span className="font-bold">Location:</span> {event.location}
          </p>
          <p className="text-lg mb-4">
            <span className="font-bold">Price:</span> {event.price}
          </p>
          <p className="text-gray-600 mb-6">{event.description}</p>

          {/* রিজার্ভেশন ফর্ম (Assignment Requirement) */}
          <div className="card w-full max-w-md shadow-2xl bg-base-100 mx-auto">
            <div className="card-body">
              <h3 className="text-xl font-bold text-center">
                Reserve Your Seat
              </h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button onClick={handleApplyJob} className="btn btn-primary">
                  Reserve Seat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
