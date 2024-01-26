"use client";

import styled, { css } from "styled-components";

export interface IText {
  secondaryFont?: boolean;
  lineHeight?: number | string;
  letterSpacing?: number;
  light?: boolean;
  semiBold?: boolean;
  bold?: boolean;
  bolder?: boolean;
  textAlign?: string;
  whiteSpace?: string;
  textOverflow?: string;
  ellipsis?: boolean;
  uppercase?: boolean;
  lowercase?: boolean;
  capitalize?: boolean;

  color?: string;
  primary?: boolean;
  red?: boolean;
  white?: boolean;
  black?: boolean;
  yellow?: boolean;

  size?: string | number;
  tiny?: boolean;
  smallest?: boolean;
  smaller?: boolean;
  small?: boolean;
  medium?: boolean;
  big?: boolean;
  bigger?: boolean;
  biggest?: boolean;
  huge?: boolean;
}

export const Text = styled.span<IText>`
  text-align: ${({ textAlign }) => textAlign || "left"};

  ${({ whiteSpace }) => {
    if (whiteSpace) {
      return css`
        white-space: ${whiteSpace};
      `;
    }
  }}

  ${({ textOverflow }) => {
    if (textOverflow) {
      return css`
        text-overflow: ${textOverflow};
      `;
    }
  }}

  ${({ ellipsis }) => {
    if (ellipsis)
      return css`
        text-overflow: ellipsis;
        white-space: nowrap;
      `;
  }}

  ${({ uppercase, lowercase, capitalize }) => {
    console.warn(uppercase);
    if (uppercase)
      return css`
        text-transform: uppercase;
      `;
    if (lowercase)
      return css`
        text-transform: lowercase;
      `;
    if (capitalize)
      return css`
        text-transform: capitalize;
      `;
  }};

  ${({ bold, bolder, semiBold }) => {
    if (bolder) {
      return css`
        font-weight: 900;
      `;
    }
    if (bold) {
      return css`
        font-weight: 700;
        /* Replace with your font family for bold */
      `;
    }
    if (semiBold) {
      return css`
        font-weight: 600;
        /* Replace with your font family for semiBold */
      `;
    }

    return css`
      /* Replace with your font family for regular */
      font-weight: 400;
    `;
  }};

  ${({ color, theme, primary, red, white, black, yellow }) => {
    if (color)
      return css`
        color: ${color};
      `;
    if (primary)
      return css`
        color: ${theme.color.primary};
      `;
    if (black)
      return css`
        color: ${theme.color.black};
      `;
    if (red)
      return css`
        color: ${theme.color.red};
      `;
    if (white)
      return css`
        color: ${theme.color.white};
      `;
    if (yellow)
      return css`
        color: ${theme.color.yellow};
      `;
    return css`
      color: ${theme.color.black};
    `;
  }};

  ${({
    theme,
    tiny,
    smallest,
    smaller,
    small,
    big,
    bigger,
    biggest,
    huge,
    size,
  }) => {
    if (size)
      return css`
        font-size: ${typeof size === "number" ? size + "px" : size};
      `;
    if (tiny)
      return css`
        font-size: ${theme.text.tiny}px;
      `;
    if (smallest)
      return css`
        font-size: ${theme.text.smallest}px;
      `;
    if (smaller)
      return css`
        font-size: ${theme.text.smaller}px;
      `;
    if (small)
      return css`
        font-size: ${theme.text.small}px;
      `;
    if (big)
      return css`
        font-size: ${theme.text.big}px;
      `;
    if (bigger)
      return css`
        font-size: ${theme.text.bigger}px;
      `;
    if (biggest)
      return css`
        font-size: ${theme.text.biggest}px;
      `;
    if (huge)
      return css`
        font-size: ${theme.text.huge}px;
      `;
    return css`
      font-size: ${theme.text.medium}px;
    `;
  }};
`;
