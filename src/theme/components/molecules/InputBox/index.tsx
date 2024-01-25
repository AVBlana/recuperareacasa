import React from "react";

type InputProps = {
  type: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
};

export function InputBox({ type, label, value, onChange }: InputProps) {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
