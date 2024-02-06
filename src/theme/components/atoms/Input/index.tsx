import { theme } from "@/theme/constants";
import React, { ChangeEvent, FC, InputHTMLAttributes } from "react";

const _inputTypes = ["text", "email", "password", "checkbox"];

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "checkbox";
}

const Input: FC<InputProps> = ({
  id,
  name,
  placeholder,
  type = "text",
  value,
  onChange,
  ...rest
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      className="a-input"
      value={value}
      onChange={onChange}
      style={{
        padding: 10,
        borderRadius: 10,
        background: theme.color.white,
      }}
      {...rest}
    />
  );
};

export default Input;
