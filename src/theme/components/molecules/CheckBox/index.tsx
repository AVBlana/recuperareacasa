import React, { CSSProperties } from "react";
import { theme } from "@/theme/constants";
import { useTheme } from "styled-components";

type CheckboxProps = {
  label: string;
  id: string;
  selectedCheckboxes: string[];
  style?: CSSProperties;
  onChange: (label: string) => void;
};

export function Checkbox({
  label,
  id,
  selectedCheckboxes,
  style,
  onChange,
}: CheckboxProps) {
  const theme = useTheme();
  const checked = selectedCheckboxes?.includes(id);

  const handleChange = () => {
    onChange(id);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, ...style }}>
      <div
        style={{
          width: 20,
          height: 20,
        }}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          id={id}
          style={{
            width: 20,
            height: 20,
          }}
        />
      </div>
      <label
        style={{
          fontFamily: theme.text.secondary,
          fontSize: theme.media.isMobile ? theme.text.small : theme.text.medium,
          flex: 1,
        }}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}
