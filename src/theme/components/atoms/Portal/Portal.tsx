import { PortalProps, Portal as ReactPortal } from "react-portal";

const Portal = ({ children, ...props }: PortalProps) => {
  return <ReactPortal {...props}>{children}</ReactPortal>;
};

export default Portal;
