import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: block;
  max-width: 15rem;
  width: ${props => (props.width ? props.width : "100%")};
  margin: ${props => (props.margin ? props.margin : "0")};
  padding: ${props => (props.spacing ? props.spacing : "0")};

  border: none;
  border-radius: 10rem;

  background: #40ce93;
`;

export default Button;
