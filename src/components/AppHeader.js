import React from 'react';
import styled from '@emotion/styled';
import StatusBar from './StatusBar';
import Logo from './Logo';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 160px;
  margin-bottom: 32px;
`;

const SwitchColorButton = styled.button`
  border: none;
  background: white;
  border-radius: 50%;
  font-size: 30px;
`;

function AppHeader({ onSwitchButtonClick }) {
  return (
    <Header>
      <StatusBar />
      <Logo />
      <SwitchColorButton onClick={onSwitchButtonClick}>
        <span role="img" aria-label="switch">
          🌗
        </span>
      </SwitchColorButton>
    </Header>
  );
}

export default AppHeader;
