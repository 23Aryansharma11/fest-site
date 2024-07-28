import Section from "./Helper/Section";
import Tabs from "./Helper/Tabs";
import { useState } from "react";
import NFS from "../../../assets/nfs.jpeg"
import chess from "../../../assets/chess.jpg"
import pubg from "../../../assets/pubg.jpg"
const tabData = {
  "ATLANTUS Events": [
    {
      title: "NFS",
      prize: "4,00,000",
      image:"https://res.cloudinary.com/dofidva2t/image/upload/v1722049947/nfs_gbtjzc.jpg",
      description:
        "N.F.S. is a high-octane racing video game series developed by Electronic Arts (EA). Since its debut in 1994, the franchise has become a staple in the racing genre, known for its exhilarating gameplay, stunning graphics, and diverse range of customizable cars. Players can experience the thrill of illegal street racing, evade the police in high-speed pursuits, and compete in various racing modes, including circuit, sprint, and drift challenges. The game features a vast array of real-world cars from manufacturers like Ferrari, Lamborghini, and Porsche, each with detailed customization options for performance and aesthetics. With its compelling mix of arcade-style racing and immersive environments,  continues to captivate racing enthusiasts around the globe",
    },
    {
      title: "Chess",
      prize: "2,50,000",
      image:"https://res.cloudinary.com/dofidva2t/image/upload/v1722049946/chess_ctgg7z.jpg",description:
        "N.F.S. is a high-octane racing video game series developed by Electronic Arts (EA). Since its debut in 1994, the franchise has become a staple in the racing genre, known for its exhilarating gameplay, stunning graphics, and diverse range of customizable cars. Players can experience the thrill of illegal street racing, evade the police in high-speed pursuits, and compete in various racing modes, including circuit, sprint, and drift challenges. The game features a vast array of real-world cars from manufacturers like Ferrari, Lamborghini, and Porsche, each with detailed customization options for performance and aesthetics. With its compelling mix of arcade-style racing and immersive environments,  continues to captivate racing enthusiasts around the globe",
    },
    {
      title: "Clash Royale",
      prize: "4,00,000",
      image:
        "https://res.cloudinary.com/dofidva2t/image/upload/v1722050341/clash_royale-min_lpvhgw.jpg",description:
        "N.F.S. is a high-octane racing video game series developed by Electronic Arts (EA). Since its debut in 1994, the franchise has become a staple in the racing genre, known for its exhilarating gameplay, stunning graphics, and diverse range of customizable cars. Players can experience the thrill of illegal street racing, evade the police in high-speed pursuits, and compete in various racing modes, including circuit, sprint, and drift challenges. The game features a vast array of real-world cars from manufacturers like Ferrari, Lamborghini, and Porsche, each with detailed customization options for performance and aesthetics. With its compelling mix of arcade-style racing and immersive environments,  continues to captivate racing enthusiasts around the globe",
    },
    {
      title: "PUBG",
      prize: "2,50,000",
      image:
        pubg,
    },
    {
      title: "FREE FIRE",
      prize: "4,00,000",
      image:
        "https://res.cloudinary.com/dofidva2t/image/upload/v1722051300/free_fire_ymdzgx.jpg",description:
        "N.F.S. is a high-octane racing video game series developed by Electronic Arts (EA). Since its debut in 1994, the franchise has become a staple in the racing genre, known for its exhilarating gameplay, stunning graphics, and diverse range of customizable cars. Players can experience the thrill of illegal street racing, evade the police in high-speed pursuits, and compete in various racing modes, including circuit, sprint, and drift challenges. The game features a vast array of real-world cars from manufacturers like Ferrari, Lamborghini, and Porsche, each with detailed customization options for performance and aesthetics. With its compelling mix of arcade-style racing and immersive environments,  continues to captivate racing enthusiasts around the globe",
    },
    {
      title: "TEKKEN",
      prize: "2,50,000",
      image:
        "https://res.cloudinary.com/dofidva2t/image/upload/v1722051770/tekken7_on0j3i.jpg",description:
        "N.F.S. is a high-octane racing video game series developed by Electronic Arts (EA). Since its debut in 1994, the franchise has become a staple in the racing genre, known for its exhilarating gameplay, stunning graphics, and diverse range of customizable cars. Players can experience the thrill of illegal street racing, evade the police in high-speed pursuits, and compete in various racing modes, including circuit, sprint, and drift challenges. The game features a vast array of real-world cars from manufacturers like Ferrari, Lamborghini, and Porsche, each with detailed customization options for performance and aesthetics. With its compelling mix of arcade-style racing and immersive environments,  continues to captivate racing enthusiasts around the globe",
    },
    {
      title: "FIFA",
      prize: "2,50,000",
      image:
        "https://res.cloudinary.com/dofidva2t/image/upload/v1722051793/Fifa_1592566574619_1592566698613_ixsur1.png",description:
        "N.F.S. is a high-octane racing video game series developed by Electronic Arts (EA). Since its debut in 1994, the franchise has become a staple in the racing genre, known for its exhilarating gameplay, stunning graphics, and diverse range of customizable cars. Players can experience the thrill of illegal street racing, evade the police in high-speed pursuits, and compete in various racing modes, including circuit, sprint, and drift challenges. The game features a vast array of real-world cars from manufacturers like Ferrari, Lamborghini, and Porsche, each with detailed customization options for performance and aesthetics. With its compelling mix of arcade-style racing and immersive environments,  continues to captivate racing enthusiasts around the globe",
    },
  ],
  "DEXTERIA Events": [
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
  const [activeTab, setActiveTab] = useState("ATLANTUS Events");

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
