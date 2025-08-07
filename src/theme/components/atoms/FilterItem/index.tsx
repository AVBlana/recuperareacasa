import styled, { useTheme } from "styled-components";
import { theme } from "@/theme/constants";
import { Text, StyledText } from "..";

const FilterItem = ({
  label,
  onClick,
  selected,
}: {
  label: string;
  onClick: () => void;
  selected: boolean;
}) => {
  const theme = useTheme();
  return (
    <>
      <StyledFilterItem onClick={onClick} selected={selected}>
        <StyledFilterText
          $primary
          $semiBold
          style={{
            fontSize: theme.media.isMobile
              ? theme.text.smaller
              : theme.text.bigger,
          }}
        >
          {label}
        </StyledFilterText>
      </StyledFilterItem>
    </>
  );
};

const StyledFilterText = styled(StyledText)`
  transition: color 0.2s ease;
`;

const StyledFilterItem = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding: 8px 24px;
  &:hover {
    background: ${theme.color.primary};
    ${StyledFilterText} {
      color: ${theme.color.white};
    }
  }
  ${({ selected }) =>
    selected &&
    `
    background: ${theme.color.primary};
    ${StyledFilterText} {
      color: ${theme.color.white};
    }
  `}
`;

export default FilterItem;
