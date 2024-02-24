import { theme } from "@/theme/constants";
import React, { ChangeEvent, FC, InputHTMLAttributes, forwardRef } from "react";

const _inputTypes = ["text", "email", "password", "checkbox"];

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "checkbox";
}

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, placeholder, type = "text", value, onChange, ...rest }, ref) => {
    return (
      <input
        ref={ref}
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
          color: theme.color.black,
        }}
        {...rest}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
