
import React from "react";
import './../styles/App.css';
import Tabs from './Table.js';

const App = () => {
  const tabsData = [
    {
      title: 'Tab 1',
      content: 'This is the content of Tab 1.',
    },
    {
      title: 'Tab 2',
      content: 'This is the content of Tab 2.',
    },
    {
      title: 'Tab 3',
      content: 'This is the content of Tab 3.',
    },
  ];

  return (
    <div>
      <h1>Tabs Example</h1>
      <Tabs tabs={tabsData} />
    </div>
  );
};

export default App
