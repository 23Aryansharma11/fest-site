import { Link } from "react-router-dom";
import Nav from "../components/navbar/Nav";
import { FaLocationDot } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';
const EventInfo = () => {
  const location = useLocation(); // Get the location object
  const { state } = location; // Extract state from location object

  // Check if state is available and contains the expected properties
  if (!state) {
    return <p>No data available</p>;
  }
  const eventData = {
    name: "Need For Speed",
    imageUrl:
      "data:image/jpeg;base64,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",
    description:
      "N.F.S. is a high-octane racing video game series developed by Electronic Arts (EA). Since its debut in 1994, the franchise has become a staple in the racing genre, known for its exhilarating gameplay, stunning graphics, and diverse range of customizable cars. Players can experience the thrill of illegal street racing, evade the police in high-speed pursuits, and compete in various racing modes, including circuit, sprint, and drift challenges. The game features a vast array of real-world cars from manufacturers like Ferrari, Lamborghini, and Porsche, each with detailed customization options for performance and aesthetics. With its compelling mix of arcade-style racing and immersive environments,  continues to captivate racing enthusiasts around the globe",
    entryFee: "50",
    slug: "nfs",
  };
  return (
    <section className="text-white">
      <Nav />
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt=""
              src={state.image}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <span className="flex flex-col ">
              <h2 className="text-3xl font-bold sm:text-4xl flex items-center justify-between">
                <span>{state.title}</span>{" "}
                {state.prize && <span>₹{state.prize}</span>}
              </h2>
              <p className="flex items-center  gap-2 text-gray">
                <FaLocationDot />
                Uit, Summer Hill
              </p>
            </span>

            <p className="mt-4 text-gray-600">{state.description}</p>

            <Link
              to={`/form/${eventData.slug}`}
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400 float-left"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
