import styled, { useTheme } from "styled-components";
import { theme } from "@/theme/constants";
import { Text } from "..";

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
        <Text
          primary
          semiBold
          style={{
            fontSize: theme.media.isMobile
              ? theme.text.smaller
              : theme.text.bigger,
          }}
        >
          {label}
        </Text>
      </StyledFilterItem>
    </>
  );
};

const StyledFilterItem = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding: 8px 24px;
  &:hover {
    background: ${theme.color.primary};
    ${Text} {
      color: ${theme.color.white};
    }
  }
  ${({ selected }) =>
    selected &&
    `
    background: ${theme.color.primary};
    ${Text} {
      color: ${theme.color.white};
    }
  `}
`;

export default FilterItem;
