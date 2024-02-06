import { theme } from "@/theme/constants";
import React from "react";

type CheckboxProps = {
  label: string;
  selectedCheckboxes: string[];
  setSelectedCheckboxes: React.Dispatch<React.SetStateAction<string[]>>;
};

export function Checkbox({
  label,
  selectedCheckboxes,
  setSelectedCheckboxes,
}: CheckboxProps) {
  const checked = selectedCheckboxes.includes(label);

  const handleCheckboxChange = () => {
    if (checked) {
      setSelectedCheckboxes((prevSelected) =>
        prevSelected.filter((item) => item !== label)
      );
    } else {
      setSelectedCheckboxes((prevSelected) => [...prevSelected, label]);
    }
  };

  return (
    <>
      <div style={{ display: "flex", gap: 10 }}>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
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
