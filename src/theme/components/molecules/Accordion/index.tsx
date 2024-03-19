import React, { useState } from "react";
import { Text } from "../..";
import Box from "../../atoms/Box";

interface AccordionProps {
  data: { title: string; content: string | JSX.Element }[];
}

interface AccordionItemProps {
  title: string;
  content: string | JSX.Element;
  isOpen: boolean;
  onClick: () => void;
}

const Accordion = ({ data }: AccordionProps) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  return (
    <Box>
      <Text>{currentIndex}</Text>
      {data.map((item, index) => {
        return (
          <AccordionItem
            title={item.title}
            content={item.content}
            isOpen={currentIndex === index}
            onClick={() => setCurrentIndex(index)}
          />
        );
      })}
    </Box>
  );
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  onClick,
}) => {
  return (
    <Box>
      <Box onClick={onClick}>
        <Text>{title}</Text>
      </Box>
      {isOpen ? (
        typeof content === "string" ? (
          <Text>{content}</Text>
        ) : (
          content
        )
      ) : null}
    </Box>
  );
};

export default Accordion;
