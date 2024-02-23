import { theme } from "@/theme/constants";
import React from "react";

type TextAreaProps = {
  id: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
};

export function TextArea({ id, placeholder, value, onChange }: TextAreaProps) {
  return (
    <textarea
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        padding: 10,
        borderRadius: 10,
        background: theme.color.white,
        color: theme.color.black,
        minHeight: 70,
      }}
    />
  );
}
