// NavItem.tsx
import styled from "styled-components";
import { Text } from "..";

interface NavItemProps {
  onClick: () => void;
  label: string;
  alignLeft?: boolean;
}

const NavItem = ({ onClick, label, alignLeft = false }: NavItemProps) => {
  return (
    <StyledNavItem alignLeft={alignLeft} onClick={onClick}>
      <Text primary big semiBold secondaryFont>
        {label}
      </Text>
    </StyledNavItem>
  );
};

interface StyledNavItemProps {
  alignLeft?: boolean;
}

const StyledNavItem = styled.div<StyledNavItemProps>`
  cursor: pointer;
  padding-left: ${({ alignLeft }) => (alignLeft ? "0" : "20px")};
  padding-right: 20px;
  height: 100%;
  display: flex;
  align-items: ${({ alignLeft }) => (alignLeft ? "flex-start" : "center")};

  &:hover ${Text} {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

export default NavItem;
