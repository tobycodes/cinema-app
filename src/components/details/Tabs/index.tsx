import React, { FC, useState, ReactElement } from 'react';

import './index.scss';
import Tab from './Tab';

interface IProps {
  children: ReactElement[];
}

const Tabs: FC<IProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const currentActiveChild = children.filter(({ props: { label } }) => label === activeTab)[0];

  return (
    <div className="tabs">
      <ul className="tab-list">
        {children.map(({ props: { label } }) => (
          <Tab
            key={label}
            isActive={label === activeTab}
            label={label}
            onTabClick={(label) => setActiveTab(label)}
          />
        ))}
      </ul>
      <div className="tab-content">{currentActiveChild.props.children}</div>
    </div>
  );
};

export default Tabs;
