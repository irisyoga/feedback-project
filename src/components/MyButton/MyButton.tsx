


import React from "react";

interface MyButtonProps {
  variant?: "primary" | "success" | "danger" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
  className?: string;
}

function MyButton({
  variant = "primary",
  children,
  onClick,
  disabled = false,
  type = "button",
  style,
  className = "",
}: MyButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={style}
      className={`btn btn-${variant} ${className}`}
    >
      {children}
    </button>
  );
}

export default MyButton;
