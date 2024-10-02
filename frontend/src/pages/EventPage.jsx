import Nav from "../components/navbar/Nav.jsx";
import CardSection from "../components/events/EventPage/CardSection.jsx";
import IntroSection from "../components/events/EventPage/IntroSection.jsx";
const EventPage = () => {
  return (
    <div>
      <Nav />
      <IntroSection />
      <CardSection />
    </div>
  );
};

export default EventPage;
