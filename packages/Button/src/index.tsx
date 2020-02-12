import React from "react";
import styled from "styled-components";

export interface ButtonProps {
  selected?: boolean;
  children: React.ReactNode;
}

const StyledCodefiButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  border: none;
`;

export const CodefiButton = (props: ButtonProps) => {
  return <StyledCodefiButton>{props.children}</StyledCodefiButton>;
};

export default CodefiButton;
