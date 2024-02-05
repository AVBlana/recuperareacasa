// MovingText.tsx
import React from "react";
import styled, { keyframes, css } from "styled-components";
import { Text } from "../..";

const moveTextAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const MovingText: React.FC = () => {
  const numberOfSpans = 12; // Adjust based on the number of spans

  return (
    <Container>
      <TextComponent>
        {Array.from({ length: numberOfSpans }).map((_, index) => (
          <TextSpan key={index}>
            Recuperare Acasă
            <LogoImage src="/assets/logoRecuperareAcasa.png" alt="" />
          </TextSpan>
        ))}
      </TextComponent>
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  width: 100%; /* Adjust as needed */
`;

const TextComponent = styled.div`
  white-space: nowrap;
  display: inline-block; /* Make the text and logos inline */
  animation: ${({ theme }) =>
    theme &&
    css`
      ${moveTextAnimation} 180s linear infinite
    `}; /* Adjust the animation duration based on your preference */
  color: rgba(42, 85, 80, 0.4);
  font-family: ${({ theme }) => theme && theme.text.secondary};
  font-size: 140px;
`;

const TextSpan = styled.span`
  position: relative; /* Ensure relative positioning for child elements */
  margin-right: 160px; /* Adjust the spacing between text and logos */
`;

const LogoImage = styled.img`
  position: absolute;
  top: 50%;
  left: -130px; /* Adjust the left position of the image */
  transform: translateY(-50%);
  width: 110px; /* Adjust the width of the image */
  opacity: 0.4;
`;

export default MovingText;
