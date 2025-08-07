// NavItem.tsx
import styled from "styled-components";
import { Text, StyledText } from "..";

interface NavItemProps {
  onClick: () => void;
  label: string;
  alignLeft?: boolean;
}

const NavItem = ({ onClick, label, alignLeft = false }: NavItemProps) => {
  return (
    <StyledNavItem alignLeft={alignLeft} onClick={onClick}>
      <StyledNavText $primary $big $semiBold $secondaryFont>
        {label}
      </StyledNavText>
    </StyledNavItem>
  );
};

interface StyledNavItemProps {
  alignLeft?: boolean;
}

const StyledNavText = styled(StyledText)`
  transition: color 0.1s ease, transform 0.1s ease;
`;

const StyledNavItem = styled.div<StyledNavItemProps>`
  cursor: pointer;
  padding-left: ${({ alignLeft }) => (alignLeft ? "0" : "20px")};
  padding-right: 20px;
  height: 100%;
  display: flex;
  align-items: ${({ alignLeft }) => (alignLeft ? "flex-start" : "center")};
  transition: transform 0.1s ease;

  &:hover ${StyledNavText} {
    color: ${({ theme }) => theme.color.secondary} !important;
    transform: scale(1.5);
  }
`;

export default NavItem;
