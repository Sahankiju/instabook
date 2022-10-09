import React from "react";
import styled from "styled-components";

const Button = ({ title }) => {
  return <StyledButton>{title}</StyledButton>;
};

const StyledButton = styled.button`
  background-color: #141313;
  color: #fff;
  padding: .75rem 1.5rem;
  
  &:hover{
    cursor: pointer;
    background-color: #fff;
    color: #141313;
    transition: 1s all ease;

  }
`;

export default Button;
