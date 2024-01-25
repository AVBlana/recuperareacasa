import React, { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

const Tab: React.FC<Props> = ({ title, children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default Tab;
