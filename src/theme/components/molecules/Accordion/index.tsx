import React, { useEffect, useRef, useState } from "react";
import { SvgIcon, Text } from "../..";
import Box from "../../atoms/Box";
import styled, { useTheme } from "styled-components";
import Flex from "../../atoms/Flex";
import { PlusIcon } from "../Icons/PlusIcon";
import { MinusIcon } from "../Icons/MinusIcon";
import { rgba } from "polished";

interface AccordionProps {
  data: {
    title: string;
    content?: string;
    renderContent?: JSX.Element;
  }[];
}

interface AccordionItemProps {
  title: string;
  content?: string;
  renderContent?: JSX.Element;
  isOpen: boolean;
  onClick: () => void;
}

const Accordion = ({ data }: AccordionProps) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  return (
    <Box>
      {data.map((item, index) => {
        return (
          <AccordionItem
            key={item.title}
            title={item.title}
            content={item.content}
            renderContent={item.renderContent}
            isOpen={currentIndex === index}
            onClick={() => {
              if (currentIndex === index) {
                setCurrentIndex(null);
              } else {
                setCurrentIndex(index);
              }
            }}
          />
        );
      })}
    </Box>
  );
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  renderContent,
  isOpen,
  onClick,
}) => {
  const theme = useTheme();
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    setContentHeight(
      contentRef.current
        ? contentRef?.current?.getBoundingClientRect().height
        : 0
    );
  }, [isOpen]);

  return (
    <Box
      style={{
        backgroundColor: rgba(0, 0, 0, isOpen ? 0.05 : 0),
        borderBottomWidth: 1.5,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderColor: theme.color.primary,
        borderStyle: "solid",
        transition: "background-color 0.3s ease",
      }}
    >
      <Box
        onClick={onClick}
        style={{
          cursor: "pointer",
        }}
      >
        <Flex
          style={{
            justifyContent: "space-between",
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <Text
            bigger
            semiBold
            style={{
              lineHeight: "150%",
              color: theme.color.secondary,
              fontSize: theme.media.isMobile
                ? theme.text.small
                : theme.text.bigger,
            }}
          >
            {title}
          </Text>
          {isOpen ? (
            <Box>
              <MinusIcon size={20} fill={theme.color.secondary} />
            </Box>
          ) : (
            <Box>
              <PlusIcon size={20} fill={theme.color.secondary} />
            </Box>
          )}
        </Flex>
      </Box>

      <Box
        style={{
          transition: "height 0.3s ease",
          height: isOpen ? contentHeight : 0,
          overflow: "hidden",
        }}
      >
        <Box ref={contentRef}>
          <Box style={{ padding: 20, paddingTop: 0 }}>
            {content ? (
              <Text
                style={{
                  lineHeight: "150%",
                  fontSize: theme.media.isMobile
                    ? theme.text.small
                    : theme.text.medium,
                }}
              >
                {content}
              </Text>
            ) : (
              renderContent
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Accordion;
