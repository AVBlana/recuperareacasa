// StyledFormBox.js
import styled from "styled-components";
import { theme } from "@/theme/constants";

const StyledFormSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-bottom: 20px;
  padding-top: ${({ theme }) => (theme.media.isMobile ? "0" : "20")}px;
  gap: 20px;
`;

export default StyledFormSection;
