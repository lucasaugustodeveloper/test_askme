import React from "react";
import styled from "styled-components";

const HightLight = styled.span`
  color: #39e49f;
`;

const Text = styled.p`
  font-size: ${props => (props.size ? props.size : "1rem")};
  font-weight: ${props => (props.weight ? props.weight : "400")};
  text-align: center;
  text-transform: ${props => (props.upper ? "uppercase" : "none")};

  margin: ${props => (props.margin ? props.margin : "0")};

  color: ${props => (props.color ? props.color : "#adacae")};
`;

export { Text, HightLight };
