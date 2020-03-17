import React from "react";
import Bar from "./status-bar2.svg";
import styled from "@emotion/styled";

const Img = styled.img`
  height: 44px;
  margin: 0;
`;

function StatusBar(props) {
  return <Img src={Bar} alt="Status bar mobile" {...props} />;
}

export default StatusBar;
