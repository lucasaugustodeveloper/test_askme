import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: ${props => (props.size ? props.size : "2rem")};
  text-align: center;

  color: ${props => (props.color ? props.color : "#6029ea")};
`;

export default Title;
