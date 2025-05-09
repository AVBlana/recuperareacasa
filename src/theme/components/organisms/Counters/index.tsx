import styled from "styled-components";
import Counter from "../../atoms/Counter";
import Flex from "../../atoms/Flex";
import Box from "../../atoms/Box";

const Counters = () => {
  return (
    <>
      <Box style={{ alignItems: "center", justifyContent: "center" }}>
        <StyledCountersBox>
          <Box
            style={{
              flex: 1,
            }}
          >
            <Counter
              targetValue={7}
              title="Ani de experiență"
              delay={1000}
              speed={100}
            />
          </Box>
          <Box
            style={{
              flex: 1,
            }}
          >
            <Counter
              targetValue={12500}
              title="Cazuri rezolvate"
              delay={1000}
              speed={0.0001}
            />
          </Box>
          <Box
            style={{
              flex: 1,
            }}
          >
            <Counter
              targetValue={2500}
              title="Cazuri speciale"
              delay={2000}
              speed={10}
            />
          </Box>
          <Box
            style={{
              flex: 1,
            }}
          >
            <Counter
              targetValue={8600}
              title="Clienti fideli"
              delay={3000}
              speed={0.1}
            />
          </Box>
        </StyledCountersBox>
      </Box>
    </>
  );
};

const StyledCountersBox = styled.div`
  display: flex;
  flex-wrap: ${({ theme }) =>
    theme.media.isMobile ? "wrap" : theme.media.isTablet ? "wrap" : "nowrap"};
  justify-content: center;
  padding: ${({ theme }) =>
    theme.media.isMobile
      ? "40px 0px"
      : theme.media.isTablet
      ? "100px 40px"
      : "100px 80px"};
  max-width: 1440px;
  gap: ${({ theme }) =>
    theme.media.isMobile ? "20px" : theme.media.isTablet ? "20px" : 0};
`;

export default Counters;
