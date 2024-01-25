import React, { useState } from "react";

// Define the type for AccordionProps
interface AccordionProps {
  title: string;
  children?: React.ReactNode;
}

// Accordion component
const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  console.log(`Rendering ${title}`);

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={handleToggle}>
        <h2>{title}</h2>
        {/* Add an icon or text to indicate the accordion state (open/closed) */}
        {isOpen ? "[-]" : "[+]"}
      </div>
      {/* Conditionally render the content based on the accordion state */}
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
