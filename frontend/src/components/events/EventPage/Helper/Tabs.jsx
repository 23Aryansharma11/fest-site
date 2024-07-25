
import { useState } from 'react';

const Tabs = ({ tabs, onTabClick }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onTabClick(tab);
  };

  return (
    <div className="flex justify-center space-x-4  mx-20 ">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`w-1/2 px-6 py-2 font-bold ${activeTab === tab ? 'bg-yellow-500 text-black rounded-md'  : 'bg-black text-yellow-500'} rounded-md focus:outline-none`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
