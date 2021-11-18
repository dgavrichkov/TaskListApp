import React from "react";
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

export const Button = (props: any) => {
  return <StyledButton {...props} />;
};

export const BoldButton = styled(StyledButton)`
  font-weight: 700;
`;
