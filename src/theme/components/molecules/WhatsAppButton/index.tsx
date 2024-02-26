import React from "react";
import Button from "../../atoms/Button";
import { theme } from "@/theme/constants";
import { SvgIcon } from "../..";
import Box from "../../atoms/Box";
import Link from "next/link";

const WhatsAppButton = () => {
  return (
    <>
      <Link href={"https://wa.me/+40767825269"} target="_blank">
        <Box
          style={{
            borderRadius: 100,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: theme.color.primary,
            padding: 10,
            transition: "transform 0.3s",
            cursor: "pointer",
          }}
        >
          <SvgIcon src="/assets/whatsappSVG.svg" size={20} />
        </Box>
      </Link>
    </>
  );
};

export default WhatsAppButton;
