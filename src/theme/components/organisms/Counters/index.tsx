import styled from "styled-components";
import Counter from "../../atoms/Counter";
import Flex from "../../atoms/Flex";

const Counters = () => {
  return (
    <>
      <StyledCountersBox>
        <Counter targetValue={12} title="Ani de experiență" />
        <Counter targetValue={12500} title="Cazuri rezolvate" />
        <Counter targetValue={2500} title="Cazuri speciale" />
        <Counter targetValue={11900} title="Clienți mulțumiți" />
      </StyledCountersBox>
    </>
  );
};

const StyledCountersBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 100px 80px;
  gap: 40;
`;

export default Counters;
