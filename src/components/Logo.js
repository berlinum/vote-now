import React from "react";
import Vote from "./vote-now.png";
import styled from "@emotion/styled";

const Img = styled.img`
  height: 25vw;
`;

function Logo(props) {
  return <Img src={Vote} alt="Logo vote now" {...props} />;
}

export default Logo;
