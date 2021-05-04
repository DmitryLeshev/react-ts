import React from "react";
import styled from "styled-components";

interface Props {}

const Styled = styled.h1`
  color: red;
`;

export default function Title(props: Props) {
  return <Styled {...props} />;
}
