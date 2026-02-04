import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // ডাটা লোড করা
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));

    // অ্যানিমেশন ইনিশিয়ালাইজ করা
    AOS.init();
  }, []);

  return (
    <div>
      {/* 1. Slider Section */}
      <div className="carousel w-full h-[500px] rounded-xl mb-12">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop"
            className="w-full object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute bottom-10 left-10 text-white bg-black bg-opacity-50 p-4 rounded">
            <h2 className="text-4xl font-bold">Tech Innovation 2024</h2>
            <p>Join the future of technology.</p>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1200&auto=format&fit=crop"
            className="w-full object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute bottom-10 left-10 text-white bg-black bg-opacity-50 p-4 rounded">
            <h2 className="text-4xl font-bold">Live Concert</h2>
            <p>Feel the rhythm of the night.</p>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1200&auto=format&fit=crop"
            className="w-full object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute bottom-10 left-10 text-white bg-black bg-opacity-50 p-4 rounded">
            <h2 className="text-4xl font-bold">Art Exhibition</h2>
            <p>Explore creativity at its best.</p>
          </div>
        </div>
      </div>

      {/* 2. Upcoming Events Section */}
      <div className="my-16">
        <h2
          className="text-4xl font-bold text-center mb-10"
          data-aos="fade-down"
        >
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="card bg-base-100 shadow-xl"
              data-aos="fade-up"
            >
              <figure>
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-60 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {event.title}
                  <div className="badge badge-secondary">{event.price}</div>
                </h2>
                <p>{event.description}</p>
                <div className="card-actions justify-end mt-4">
                  <Link
                    to={`/event/${event.id}`}
                    className="btn btn-primary w-full"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Extra Section 1: Services */}
      <div className="my-20 bg-base-200 p-10 rounded-xl" data-aos="zoom-in">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center">
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-xl font-bold">Event Planning</h3>
            <p>We plan your events to perfection.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-xl font-bold">Catering</h3>
            <p>Delicious food for every occasion.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-xl font-bold">Venue Management</h3>
            <p>Best venues at affordable prices.</p>
          </div>
        </div>
      </div>

      {/* Extra Section 2: Newsletter */}
      <div className="my-20 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
        <p className="mb-6">
          Get the latest updates on upcoming events directly in your inbox.
        </p>
        <div className="join">
          <input
            className="input input-bordered join-item"
            placeholder="Email"
          />
          <button className="btn join-item rounded-r-full btn-primary">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
