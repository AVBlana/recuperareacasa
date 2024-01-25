import React from "react";

type TextAreaProps = {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
};

export function SimpleTextArea({
  placeholder,
  value,
  onChange,
}: TextAreaProps) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
