// Counter.tsx
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { SvgIcon, Text } from "..";
import { theme } from "@/theme/constants";

interface CounterProps {
  targetValue: number;
  title: string;
  delay: number;
  speed: number;
}

const Counter: React.FC<CounterProps> = ({
  targetValue,
  title,
  delay = 0,
  speed = 0.5,
}) => {
  const count = useRef(0);
  const [displayedValue, setDisplayedValue] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const interval = setInterval(() => {
        if (count.current < targetValue) {
          count.current += 1;

          setDisplayedValue(count.current);
        } else {
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);
  }, [count, targetValue, delay, speed]);

  return (
    <StyledCounterBox>
      <Text bold secondaryFont big style={{ color: theme.color.secondary }}>
        {title}
      </Text>
      <AnimatedNumber animate={displayedValue >= targetValue}>
        +
        {`${
          displayedValue > 1000
            ? `${(displayedValue / 1000).toFixed(1)}K`
            : displayedValue
        }`}
      </AnimatedNumber>
      <SvgIcon
        size={24}
        fill={theme.color.secondary}
        src="/assets/checkedSVG.svg"
      />
    </StyledCounterBox>
  );
};

const StyledCounterBox = styled.div`
  display: flex;

  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;
  padding: ${({ theme }) => (theme.media.isMobile ? "0 20px" : "0 40px")};
  min-width: ${({ theme }) => (theme.media.isMobile ? "auto" : "270px")};
`;

const AnimatedNumber = styled.span<{ animate: boolean }>`
  transition: color ${(props) => (props.animate ? "0.05s" : "0.2s")} ease-in-out;
  color: ${(props) =>
    props.animate
      ? ({ theme }) => theme.color.primary
      : ({ theme }) => theme.color.secondary};
  font-size: ${({ theme }) => (theme.media.isMobile ? "50" : "100")}px;
  font-family: ${({ theme }) => theme.text.secondary};
`;

export default Counter;
