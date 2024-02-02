import dynamic from "next/dynamic";

const Portal = dynamic(() => import("./Portal"), {
  ssr: false,
});

export default Portal;
