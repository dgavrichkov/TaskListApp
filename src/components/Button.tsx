import React, { FC } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 12px 18px;
  border-radius: 20.3736px;
  border: none;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.shadows.button || `0 0 0 3px #000`};
  background: ${(props) => props.theme.colors.primary || `#000`};
  color: inherit;
  &:active {
    box-shadow: ${(props) => props.theme.shadows.buttonInset};
  }
`;

interface ButtonProps {
  className?: string;
  buttonType?: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  buttonType = "button",
  onClick
}) => {
  return (
    <StyledButton
      className={className}
      type={buttonType}
      onClick={() => onClick()}
    >
      {children}
    </StyledButton>
  );
};

export const BoldButton = styled(Button)`
  font-weight: 700;
`;
