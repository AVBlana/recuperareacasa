import { SVGIconProps, SvgIcon } from "../..";

export const CloseIcon = (props: SVGIconProps) => {
  return (
    <SvgIcon viewBox="0 0 20 20" {...props}>
      <path
        d="M2 20L0 18L8 10L0 2L2 0L10 8L18 0L20 2L12 10L20 18L18 20L10 12L2 20Z"
        fill="white"
      />
    </SvgIcon>
  );
};
