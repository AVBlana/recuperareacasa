import styled, { useTheme } from "styled-components";
import { SvgIcon, Text } from "../..";
import Flex from "../../atoms/Flex";
import Box from "../../atoms/Box";
import FullScreenModal from "../../molecules/FullscreenModal";
import { useContext, useState } from "react";
import Button from "../../atoms/Button";
import StepsForm from "../StepsForm";
import { StepsContext, StepsProvider } from "../StepsForm/context";

const StyledSvgIcon = styled(SvgIcon)`
  transition: transform 0.3s ease-in-out;
`;

const CTA = () => {
  const theme = useTheme();

  const { handleOpenModal, handleCloseModal, isModalVisible } =
    useContext(StepsContext);

  return (
    <>
      <StyledCtaContainer>
        <StyledImageBox>
          <StyledCtaBox>
            <Button
              label=""
              onClick={handleOpenModal}
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 2,
              }}
            ></Button>
            <StyledSvgIcon
              size={theme.media.isMobile ? 200 : 250}
              src="/assets/CTAtext.svg"
              style={{
                position: theme.media.isMobile ? "absolute" : "unset",
                top: 110,
              }}
            />
            <FullScreenModal
              key={isModalVisible ? "cta-modal-key" : "cta-no-modal-key"}
              isVisible={isModalVisible}
              onClose={handleCloseModal}
            >
              {isModalVisible && (
                <StepsProvider>
                  <StepsForm onClose={handleCloseModal} />
                </StepsProvider>
              )}
            </FullScreenModal>
            <Box>
              <Text
                white
                secondaryFont
                style={{
                  textAlign: theme.media.isMobile ? "center" : "right",
                  lineHeight: "140%",
                  fontSize: theme.media.isMobile
                    ? theme.text.bigger
                    : theme.text.huge,
                }}
              >
                Ne pasă de starea ta de bine !
              </Text>
              <Text
                white
                secondaryFont
                style={{
                  textAlign: theme.media.isMobile ? "center" : "right",
                  lineHeight: "140%",
                  fontSize: theme.media.isMobile
                    ? theme.text.biggest
                    : theme.text.huge,
                }}
              >
                Hai la o evaluare online !
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
  flex-direction: ${({ theme }) => (theme.media.isMobile ? "column" : "row")};
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) =>
    theme.media.isMobile
      ? "0px 20px"
      : theme.media.isTablet
      ? "0px 40px"
      : "40px 80px"};
  z-index: 3;

  &:hover {
    ${StyledSvgIcon} {
      transform: scale(1.5) rotate(20deg);
    }
  }
`;

const StyledCtaContainer = styled.div`
  position: relative;
  min-height: ${({ theme }) => (theme.media.isMobile ? "220" : "300")}px;
  cursor: pointer;
`;

const StyledImageBox = styled.div`
  display: flex;
  align-items: ${({ theme }) =>
    theme.media.isMobile ? "flex-start" : "center"};
  padding-top: ${({ theme }) => (theme.media.isMobile ? "40" : "0")}px;
  background-image: url(./assets/planRecuperare3.jpg);
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
  background: linear-gradient(${({ theme }) =>
    theme.media.isMobile
      ? "to right, #2a5550, rgba(255, 69, 0, 0) 150%)"
      : "to left, #2a5550, rgba(255, 69, 0, 0))"};
  z-index: 1;
`;

export default CTA;
