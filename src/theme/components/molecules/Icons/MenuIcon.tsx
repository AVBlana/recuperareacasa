import { SVGIconProps, SvgIcon } from "../..";

export const MenuIcon = (props: SVGIconProps) => {
  return (
    <SvgIcon viewBox="0 0 20 20" {...props}>
      <path
        d="M1 18.5L19 18.5M1 10L19 10M1 1.5L19 1.5"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SvgIcon>
  );
};
