import styled from "styled-components";
import { SvgIcon, Text } from "../..";
import Flex from "../../atoms/Flex";
import Box from "../../atoms/Box";

const StyledSvgIcon = styled(SvgIcon)`
  transition: transform 0.3s ease-in-out;
`;

const CTA = () => {
  return (
    <>
      <StyledCtaContainer>
        <StyledImageBox>
          <StyledCtaBox>
            <StyledSvgIcon size={250} src="/assets/CTAtext.svg" />
            <Box>
              <Text
                huge
                white
                secondaryFont
                style={{ textAlign: "right", lineHeight: "140%" }}
              >
                Ne pasă de starea ta de bine !
              </Text>
              <Text
                huge
                white
                secondaryFont
                style={{ textAlign: "right", lineHeight: "140%" }}
              >
                Poți face o evaluare online gratuită !
              </Text>
            </Box>
          </StyledCtaBox>
          <StyledGradientBox />
        </StyledImageBox>
      </StyledCtaContainer>
    </>
  );
};

const StyledCtaBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  z-index: 3;

  &:hover {
    ${StyledSvgIcon} {
      transform: scale(1.5) rotate(20deg); /* Increase the scale and add a 20-degree rotation on hover */
    }
  }
`;

const StyledCtaContainer = styled.div`
  position: relative;
  height: 300px;
  cursor: pointer;
`;

const StyledImageBox = styled.div`
  display: flex;
  align-items: center;
  background-image: url(./assets/img7.jpg);
  background-size: cover;
  background-position: 50% 75%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`;

const StyledGradientBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to left, #2a5550, rgba(255, 69, 0, 0));
  z-index: 1;
`;

export default CTA;
