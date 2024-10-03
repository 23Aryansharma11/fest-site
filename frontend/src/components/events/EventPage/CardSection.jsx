import Section from "./Helper/Section";
import Tabs from "./Helper/Tabs";
import { useState } from "react";
import data from "../../../Data/EventsData.json";

const CardSection = () => {
  const [activeTab, setActiveTab] = useState("ATLANTUS Events");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-7xl mx-auto py-12">
      {/* Tabs Section */}
      <Tabs tabs={Object.keys(data)} onTabClick={handleTabClick} />

      {/* Cards Section */}
      <Section data={data[activeTab]} />
    </div>
  );
};

export default CardSection;
