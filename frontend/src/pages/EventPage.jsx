import Nav from "../components/navbar/Nav.jsx";
import CardSection from "../components/events/EventPage/CardSection.jsx";
import IntroSection from "../components/events/EventPage/IntroSection.jsx";
import { Hexagon } from "../components/Animation/Hexagon.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Starfield from "react-starfield";
const EventPage = () => {
  return (
    <div>
   
      <Nav />
      <Starfield/>
      <IntroSection />
      <CardSection />
      <Footer/>
    </div>
  );
};

export default EventPage;
