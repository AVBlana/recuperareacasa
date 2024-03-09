import React from "react";

export const SvgIcon = ({
  width,
  height,
  size,
  viewBox,
  children,
  src, // Added src prop
  ...props
}: SVGIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox || "0 0 24 24"}
      width={size || width || "100%"}
      height={size || height || "100%"}
      {...props}
    >
      {/* Use the src prop to dynamically load the SVG file */}
      {src && <image href={src} width="100%" height="100%" />}
      {children}
    </svg>
  );
};

export interface SVGIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  src?: string;
}

export default SvgIcon;
