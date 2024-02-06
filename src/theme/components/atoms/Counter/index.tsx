// Counter.tsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SvgIcon, Text } from "..";
import { theme } from "@/theme/constants";

interface CounterProps {
  targetValue: number;
  title: string;
}

const Counter: React.FC<CounterProps> = ({ targetValue, title }) => {
  const [count, setCount] = useState(0);
  const [displayedValue, setDisplayedValue] = useState<number | string>(0);

  useEffect(() => {
    const countUpInterval = setInterval(() => {
      if (count < targetValue) {
        setCount((prevCount) => prevCount + 1);
      }
    }, 0.0000000000000001);

    if (count >= 1000) {
      const displayKValue = Math.floor(count / 1000);
      setDisplayedValue(`${displayKValue}K`);
    } else {
      setDisplayedValue(count);
    }

    if (count === targetValue) {
      clearInterval(countUpInterval);
    }

    return () => clearInterval(countUpInterval);
  }, [count, targetValue]);

  return (
    <StyledCounterBox>
      <Text bold secondaryFont big style={{ color: theme.color.secondary }}>
        {title}
      </Text>
      <AnimatedNumber animate={count === targetValue}>
        +{displayedValue}
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
  gap: 16;
  padding: 0 40px;
  width: 360px;
`;

const AnimatedNumber = styled.span<{ animate: boolean }>`
  transition: color ${(props) => (props.animate ? "0.05s" : "0.2s")} ease-in-out;
  color: ${(props) =>
    props.animate
      ? ({ theme }) => theme.color.primary
      : ({ theme }) => theme.color.secondary};
  font-size: 100px;
  font-family: ${({ theme }) => theme.text.secondary};
`;

export default Counter;
