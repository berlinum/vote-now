import React from 'react';
import styled from '@emotion/styled';
import StatusBar from './StatusBar';
import Logo from './Logo';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 190px;
  margin-bottom: 32px;
`;

function AppHeader({ onSwitchButtonClick }) {
  return (
    <Header>
      <StatusBar />
      <button onClick={onSwitchButtonClick}>
        <Logo />
      </button>
    </Header>
  );
}

export default AppHeader;
