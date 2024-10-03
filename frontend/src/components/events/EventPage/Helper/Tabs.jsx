import { useState } from "react";

const Tabs = ({ tabs, onTabClick }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onTabClick(tab);
  };

  return (
    <div className="flex justify-center space-x-4 mx-auto mb-8 border-b-2 border-yellow-500 pb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-6 py-2 text-lg font-semibold transition-colors duration-300 ${
            activeTab === tab
              ? "bg-yellow-500 text-black rounded-t-md"
              : "bg-gray-900 text-yellow-500"
          } focus:outline-none hover:bg-yellow-400`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
