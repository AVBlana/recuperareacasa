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

  useEffect(() => {
    const incrementValue = () => {
      if (count < targetValue) {
        setCount(count + 1);
      }
    };

    const intervalSpeed = targetValue > 10 ? 0.000001 : 1; // Adjusted interval speed
    const intervalId = setInterval(incrementValue, intervalSpeed);

    return () => {
      clearInterval(intervalId);
    };
  }, [count, targetValue]);

  return (
    <StyledCounterBox>
      <Text bold secondaryFont big style={{ color: theme.color.secondary }}>
        {title}
      </Text>
      <AnimatedNumber animate={count === targetValue}>+{count}</AnimatedNumber>
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
