import { theme } from "@/theme/constants";
import React from "react";

interface CheckboxProps {
  label: string;
  selectedCheckboxes: string[];
  onChange: (label: string) => void;
}

export function Checkbox({
  label,
  selectedCheckboxes,
  onChange,
}: CheckboxProps) {
  const checked = selectedCheckboxes.includes(label);
  const handleChange = () => {
    onChange(label);
  };

  return (
    <>
      <div style={{ display: "flex", gap: 10 }}>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          id={label}
          style={{
            width: 20,
            height: 20,
          }}
        />
        <label
          style={{
            fontFamily: theme.text.secondary,
            fontSize: theme.text.medium,
          }}
          htmlFor={label}
        >
          {label}
        </label>
      </div>
    </>
  );
}
