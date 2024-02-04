import styled from "styled-components";
import { SvgIcon, Text, YtIcon } from "../..";
import Box from "../../atoms/Box";
import Flex from "../../atoms/Flex";
import Image from "../../atoms/Image";
import { theme } from "@/theme/constants";

const ServiceCard = () => {
  return (
    <>
      <StyledServiceCard>
        {/* <StyledGradientBox> */}
        <Flex style={{ alignItems: "center", justifyContent: "space-between" }}>
          <Box>
            <Text>Diathermy</Text>
            <Text white>Strains and sprains</Text>
          </Box>
          <Box>
            <YtIcon size={50} fill={theme.color.white} />
          </Box>
        </Flex>
        {/* </StyledGradientBox> */}
      </StyledServiceCard>
    </>
  );
};

const StyledServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 310px;
  padding: 20px;
  justify-content: flex-end;
  background-image: url(./assets/review-bg.jpg);
  background-size: cover;
  background-position: center;
`;

// const StyledGradientBox = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background: linear-gradient(to right, #2a5550, rgba(255, 69, 0, 0));
//   z-index: 1;
// `;

export default ServiceCard;
