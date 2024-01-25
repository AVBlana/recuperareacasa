import React from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  style?: React.CSSProperties;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  loading = false,
  style,
}) => {
  const handleClick = () => {
    if (!disabled && !loading) {
      onClick();
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{
        ...style,
        pointerEvents: disabled || loading ? "none" : "auto",
        cursor: disabled || loading ? "not-allowed" : "pointer",
      }}
    >
      {loading ? "Loading..." : label}
    </div>
  );
};

export default Button;
