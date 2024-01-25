import React, { ReactElement, useState } from "react";
import TabTitle from "../../atoms/TabTitle";

type Props = {
  children: ReactElement[];
};

const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          listStyleType: "none",
        }}
      >
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </ul>
      {children[selectedTab]}
    </div>
  );
};

export default Tabs;
