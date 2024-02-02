import styled from "styled-components";
import { Text } from "..";

const NavItem = ({
  onClick,
  label,
}: {
  onClick: () => void;
  label: string;
}) => {
  return (
    <>
      <StyledNavItem
        onClick={onClick}
        style={{
          cursor: "pointer",
          paddingLeft: 20,
          paddingRight: 20,
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Text primary big semiBold secondaryFont>
          {label}
        </Text>
      </StyledNavItem>
    </>
  );
};

const StyledNavItem = styled.div`
  &:hover ${Text} {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

export default NavItem;
