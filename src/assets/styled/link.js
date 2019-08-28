import styled from "styled-components";

const Link = styled.a`
  font-size: 1.2rem;
  text-decoration: none;

  position: relative;

  color: ${props => (props.color ? props.color : "#40ce93")};

  &::after {
    content: "";
    clear: both;
    display: block;
  }
  &:hover {
    text-decoration: underline;
    color: #000;
  }
`;

export default Link;
