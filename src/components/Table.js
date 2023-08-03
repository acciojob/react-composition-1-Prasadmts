import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <ul className="tab-list">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={index === activeTab ? 'active-tab' : ''}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={index === activeTab ? 'active-content' : 'hidden-content'}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
