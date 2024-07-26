import Section from "./Helper/Section";
import Tabs from "./Helper/Tabs";
import { useState } from "react";

const tabData = {
  "Centerstage Events": [
    {
      title: "FLIGHTFURY",
      prize: "4,00,000",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      description:
        "N.F.S. is a high-octane racing video game series developed by Electronic Arts (EA). Since its debut in 1994, the franchise has become a staple in the racing genre, known for its exhilarating gameplay, stunning graphics, and diverse range of customizable cars. Players can experience the thrill of illegal street racing, evade the police in high-speed pursuits, and compete in various racing modes, including circuit, sprint, and drift challenges. The game features a vast array of real-world cars from manufacturers like Ferrari, Lamborghini, and Porsche, each with detailed customization options for performance and aesthetics. With its compelling mix of arcade-style racing and immersive environments,  continues to captivate racing enthusiasts around the globe",
    },
    {
      title: "SKY MANEUVER",
      prize: "2,50,000",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",description:
        "N.F.S. is a high-octane racing video game series developed by Electronic Arts (EA). Since its debut in 1994, the franchise has become a staple in the racing genre, known for its exhilarating gameplay, stunning graphics, and diverse range of customizable cars. Players can experience the thrill of illegal street racing, evade the police in high-speed pursuits, and compete in various racing modes, including circuit, sprint, and drift challenges. The game features a vast array of real-world cars from manufacturers like Ferrari, Lamborghini, and Porsche, each with detailed customization options for performance and aesthetics. With its compelling mix of arcade-style racing and immersive environments,  continues to captivate racing enthusiasts around the globe",
    },
    {
      title: "FLIGHTFURY",
      prize: "4,00,000",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",description:
        "N.F.S. is a high-octane racing video game series developed by Electronic Arts (EA). Since its debut in 1994, the franchise has become a staple in the racing genre, known for its exhilarating gameplay, stunning graphics, and diverse range of customizable cars. Players can experience the thrill of illegal street racing, evade the police in high-speed pursuits, and compete in various racing modes, including circuit, sprint, and drift challenges. The game features a vast array of real-world cars from manufacturers like Ferrari, Lamborghini, and Porsche, each with detailed customization options for performance and aesthetics. With its compelling mix of arcade-style racing and immersive environments,  continues to captivate racing enthusiasts around the globe",
    },
    {
      title: "SKY MANEUVER",
      prize: "2,50,000",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",description:
        "N.F.S. is a high-octane racing video game series developed by Electronic Arts (EA). Since its debut in 1994, the franchise has become a staple in the racing genre, known for its exhilarating gameplay, stunning graphics, and diverse range of customizable cars. Players can experience the thrill of illegal street racing, evade the police in high-speed pursuits, and compete in various racing modes, including circuit, sprint, and drift challenges. The game features a vast array of real-world cars from manufacturers like Ferrari, Lamborghini, and Porsche, each with detailed customization options for performance and aesthetics. With its compelling mix of arcade-style racing and immersive environments,  continues to captivate racing enthusiasts around the globe",
    },
    {
      title: "FLIGHTFURY",
      prize: "4,00,000",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",description:
        "N.F.S. is a high-octane racing video game series developed by Electronic Arts (EA). Since its debut in 1994, the franchise has become a staple in the racing genre, known for its exhilarating gameplay, stunning graphics, and diverse range of customizable cars. Players can experience the thrill of illegal street racing, evade the police in high-speed pursuits, and compete in various racing modes, including circuit, sprint, and drift challenges. The game features a vast array of real-world cars from manufacturers like Ferrari, Lamborghini, and Porsche, each with detailed customization options for performance and aesthetics. With its compelling mix of arcade-style racing and immersive environments,  continues to captivate racing enthusiasts around the globe",
    },
    {
      title: "SKY MANEUVER",
      prize: "2,50,000",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",description:
        "N.F.S. is a high-octane racing video game series developed by Electronic Arts (EA). Since its debut in 1994, the franchise has become a staple in the racing genre, known for its exhilarating gameplay, stunning graphics, and diverse range of customizable cars. Players can experience the thrill of illegal street racing, evade the police in high-speed pursuits, and compete in various racing modes, including circuit, sprint, and drift challenges. The game features a vast array of real-world cars from manufacturers like Ferrari, Lamborghini, and Porsche, each with detailed customization options for performance and aesthetics. With its compelling mix of arcade-style racing and immersive environments,  continues to captivate racing enthusiasts around the globe",
    },
  ],
  "Departmental Events": [
    {
      title: "ROBO RACE",
      prize: "1,00,000",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",description:
        "N.F.S. is a high-octane racing video game series developed by Electronic Arts (EA). Since its debut in 1994, the franchise has become a staple in the racing genre, known for its exhilarating gameplay, stunning graphics, and diverse range of customizable cars. Players can experience the thrill of illegal street racing, evade the police in high-speed pursuits, and compete in various racing modes, including circuit, sprint, and drift challenges. The game features a vast array of real-world cars from manufacturers like Ferrari, Lamborghini, and Porsche, each with detailed customization options for performance and aesthetics. With its compelling mix of arcade-style racing and immersive environments,  continues to captivate racing enthusiasts around the globe",
    },
    {
      title: "CIRCUIT DESIGN",
      prize: "50,000",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",description:
        "N.F.S. is a high-octane racing video game series developed by Electronic Arts (EA). Since its debut in 1994, the franchise has become a staple in the racing genre, known for its exhilarating gameplay, stunning graphics, and diverse range of customizable cars. Players can experience the thrill of illegal street racing, evade the police in high-speed pursuits, and compete in various racing modes, including circuit, sprint, and drift challenges. The game features a vast array of real-world cars from manufacturers like Ferrari, Lamborghini, and Porsche, each with detailed customization options for performance and aesthetics. With its compelling mix of arcade-style racing and immersive environments,  continues to captivate racing enthusiasts around the globe",
    },
    {
      title: "ROBO RACE",
      prize: "1,00,000",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",description:
        "N.F.S. is a high-octane racing video game series developed by Electronic Arts (EA). Since its debut in 1994, the franchise has become a staple in the racing genre, known for its exhilarating gameplay, stunning graphics, and diverse range of customizable cars. Players can experience the thrill of illegal street racing, evade the police in high-speed pursuits, and compete in various racing modes, including circuit, sprint, and drift challenges. The game features a vast array of real-world cars from manufacturers like Ferrari, Lamborghini, and Porsche, each with detailed customization options for performance and aesthetics. With its compelling mix of arcade-style racing and immersive environments,  continues to captivate racing enthusiasts around the globe",
    },
    {
      title: "CIRCUIT DESIGN",
      prize: "50,000",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",description:
        "N.F.S. is a high-octane racing video game series developed by Electronic Arts (EA). Since its debut in 1994, the franchise has become a staple in the racing genre, known for its exhilarating gameplay, stunning graphics, and diverse range of customizable cars. Players can experience the thrill of illegal street racing, evade the police in high-speed pursuits, and compete in various racing modes, including circuit, sprint, and drift challenges. The game features a vast array of real-world cars from manufacturers like Ferrari, Lamborghini, and Porsche, each with detailed customization options for performance and aesthetics. With its compelling mix of arcade-style racing and immersive environments,  continues to captivate racing enthusiasts around the globe",
    },
    {
      title: "ROBO RACE",
      prize: "1,00,000",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",description:
        "N.F.S. is a high-octane racing video game series developed by Electronic Arts (EA). Since its debut in 1994, the franchise has become a staple in the racing genre, known for its exhilarating gameplay, stunning graphics, and diverse range of customizable cars. Players can experience the thrill of illegal street racing, evade the police in high-speed pursuits, and compete in various racing modes, including circuit, sprint, and drift challenges. The game features a vast array of real-world cars from manufacturers like Ferrari, Lamborghini, and Porsche, each with detailed customization options for performance and aesthetics. With its compelling mix of arcade-style racing and immersive environments,  continues to captivate racing enthusiasts around the globe",
    },
    {
      title: "CIRCUIT DESIGN",
      prize: "50,000",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",description:
        "N.F.S. is a high-octane racing video game series developed by Electronic Arts (EA). Since its debut in 1994, the franchise has become a staple in the racing genre, known for its exhilarating gameplay, stunning graphics, and diverse range of customizable cars. Players can experience the thrill of illegal street racing, evade the police in high-speed pursuits, and compete in various racing modes, including circuit, sprint, and drift challenges. The game features a vast array of real-world cars from manufacturers like Ferrari, Lamborghini, and Porsche, each with detailed customization options for performance and aesthetics. With its compelling mix of arcade-style racing and immersive environments,  continues to captivate racing enthusiasts around the globe",
    },
  ],
};
const CardSection = () => {
  const [activeTab, setActiveTab] = useState("Centerstage Events");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <Tabs tabs={Object.keys(tabData)} onTabClick={handleTabClick} />

      <Section data={tabData[activeTab]} />
    </div>
  );
};

export default CardSection;
