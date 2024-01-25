import React from "react";
import styled from "styled-components";

interface ISpacer {
  height?: number;
  hasLine?: boolean;
  tiny?: boolean;
  smallest?: boolean;
  smaller?: boolean;
  small?: boolean;
  medium?: boolean;
  big?: boolean;
  bigger?: boolean;
  biggest?: boolean;
  huge?: boolean;
  padding?: number;
  horizontal?: boolean;
}

export const Spacer: React.FC<ISpacer> = (props) => (
  <StyledSpacer {...props}>
    {props.hasLine && <StyledSpacerLine />}
  </StyledSpacer>
);

const StyledSpacer = styled.div<ISpacer>`
  height: ${({
    theme,
    hasLine,
    tiny,
    small,
    smaller,
    smallest,
    medium,
    big,
    bigger,
    biggest,
    huge,
    height,
  }) => {
    if (height) return `${height}px`;
    if (tiny) return `${theme.spacings.tiny}px`;
    if (smallest) return `${theme.spacings.smallest}px`;
    if (smaller) return `${theme.spacings.smaller}px`;
    if (small) return `${theme.spacings.small}px`;
    if (medium) return `${theme.spacings.medium}px`;
    if (big) return `${theme.spacings.big}px`;
    if (bigger) return `${theme.spacings.bigger}px`;
    if (biggest) return `${theme.spacings.biggest}px`;
    if (huge) return `${theme.spacings.huge}px`;
    if (hasLine) return "1px";
    return "0";
  }};
  width: ${({
    theme,
    horizontal,
    tiny,
    small,
    smaller,
    smallest,
    medium,
    big,
    bigger,
    biggest,
    huge,
    height,
  }) => {
    if (horizontal) {
      return height
        ? `${height}px`
        : `${
            tiny
              ? theme.spacings.tiny
              : smallest
              ? theme.spacings.smallest
              : smaller
              ? theme.spacings.smaller
              : small
              ? theme.spacings.small
              : medium
              ? theme.spacings.medium
              : big
              ? theme.spacings.big
              : bigger
              ? theme.spacings.bigger
              : biggest
              ? theme.spacings.biggest
              : huge
              ? theme.spacings.huge
              : "0"
          }px`;
    }
    return "100%";
  }};
`;

const StyledSpacerLine = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.color.white};
`;

export default Spacer;
