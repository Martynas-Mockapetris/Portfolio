import { useState } from 'react';
import './Tabs.css';

export default function Tabs({ tabs, defaultTab = 0 }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="tabs">
      {/* Tab Buttons */}
      <div className="tabs-buttons">
        {tabs.map((tab, index) => (
          <button key={index} className={`tab-button ${activeTab === index ? 'tab-button--active' : ''}`} onClick={() => setActiveTab(index)}>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tabs-content">{tabs[activeTab].content}</div>
    </div>
  );
}
