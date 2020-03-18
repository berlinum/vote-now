import React from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  display: flex;
  box-sizing: border-box;
  min-width: 310px;
  height: 45px;
  margin: 19px 32px 0 33px;
  border-radius: 23px;
  color: ${props => props.theme.colors.textSecondary};
  background: ${props => props.theme.colors.bgPrimary};
  border: none;
  font-family: 'SF italic';
  font-size: 20px;
  padding-left: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:focus {
    outline: ${props => props.theme.colors.bgShadow};
    box-shadow: 0 0 3px 2px ${props => props.theme.colors.bgShadow};
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;
`;

const Checkmark = styled.div`
  border-radius: 50%;
  border: 1px solid #111;
  background: ${props =>
    props.checked
      ? props => props.theme.colors.bgActive
      : props => props.theme.colors.bgPrimary};
  height: 18px;
  width: 18px;
  margin-right: 8px;
`;

const RadioInput = ({ checked, label, ...inputProps }) => {
  return (
    <Label>
      <Input type="radio" checked={checked} {...inputProps} />
      <Checkmark checked={checked} />
      {label}
    </Label>
  );
};

export default RadioInput;
