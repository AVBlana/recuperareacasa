import styled from "styled-components";
import Counter from "../../atoms/Counter";
import Flex from "../../atoms/Flex";
import Box from "../../atoms/Box";

const Counters = () => {
  return (
    <>
      <Box style={{ alignItems: "center", justifyContent: "center" }}>
        <StyledCountersBox>
          <Counter targetValue={7} title="Ani de experiență" />
          <Counter targetValue={12500} title="Cazuri rezolvate" />
          <Counter targetValue={2500} title="Cazuri speciale" />
          <Counter targetValue={8600} title="Clienți fideli" />
        </StyledCountersBox>
      </Box>
    </>
  );
};

const StyledCountersBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 100px 80px;
  gap: 40;
  max-width: 1440px;
`;

export default Counters;
