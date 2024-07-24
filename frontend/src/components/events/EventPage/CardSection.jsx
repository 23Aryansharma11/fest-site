import Section from "./Helper/Section"
import Tabs from "./Helper/Tabs"
import { useState } from "react";

const tabData = {
  'Centerstage Events': [
    { title: 'FLIGHTFURY', prize: '4,00,000', image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' },
    { title: 'SKY MANEUVER', prize: '2,50,000', image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' },
    { title: 'FLIGHTFURY', prize: '4,00,000', image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' },
    { title: 'SKY MANEUVER', prize: '2,50,000', image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' },
    { title: 'FLIGHTFURY', prize: '4,00,000', image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' },
    { title: 'SKY MANEUVER', prize: '2,50,000', image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' },
  ],
  'Departmental Events': [
    { title: 'ROBO RACE', prize: '1,00,000', image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' },
    { title: 'CIRCUIT DESIGN', prize: '50,000', image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' },
    { title: 'ROBO RACE', prize: '1,00,000', image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' },
    { title: 'CIRCUIT DESIGN', prize: '50,000', image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' },
    { title: 'ROBO RACE', prize: '1,00,000', image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' },
    { title: 'CIRCUIT DESIGN', prize: '50,000', image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' },
  ],
 
}
const CardSection = () => {
  const [activeTab, setActiveTab] = useState('Centerstage Events');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      
      <Tabs tabs={Object.keys(tabData)} onTabClick={handleTabClick} />
     
       <Section data={tabData[activeTab]} />
    </div>
  )
}

export default CardSection
