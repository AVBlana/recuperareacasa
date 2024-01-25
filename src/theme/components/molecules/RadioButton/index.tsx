import React from "react";

type RadioProps = {
  label: string;
  value: string;
  isSelected: boolean;
  onChange: (value: string) => void;
  groupName: string;
};

export function RadioButton({
  label,
  value,
  isSelected,
  onChange,
  groupName,
}: RadioProps) {
  const handleRadioChange = () => {
    onChange(value);
  };

  return (
    <div style={{ display: "flex", gap: 10 }}>
      <input
        type="radio"
        name={groupName}
        value={value}
        id={label}
        checked={isSelected}
        onChange={handleRadioChange}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}
