import { useState } from "react";

const Tabs = ({ tabs, onTabClick }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onTabClick(tab);
  };

  return (
    <div className="flex flex-wrap justify-center space-x-4 mx-auto mb-8 border-b-2   pb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-6 py-2 text-lg font-semibold transition-colors duration-300 ${
            activeTab === tab
              ? "bg text-black rounded-t-md"
              : "bg-gray-900 gradient-text"
          } focus:outline-none hover:bg`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
