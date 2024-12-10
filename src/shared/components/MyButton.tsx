import React from "react";
import { Button } from "react-bootstrap";

interface IButtonProps {
  text: String;
  onClick?: () => void;
  variant?: string;
}


export const MyButton: React.FC<IButtonProps> = ({text, onClick, variant}) => {
  return (
    <Button variant={variant} onClick={onClick}>
      {text}
    </Button>
  );
};

export default Button;
