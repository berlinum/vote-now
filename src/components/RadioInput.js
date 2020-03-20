import React from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  min-width: 310px;
  height: 45px;
  margin: 19px 32px 0 33px;
  border-radius: 23px;
  color: ${props =>
    props.checked
      ? props => props.theme.colors.bgSecondary
      : props => props.theme.colors.textSecondary};
  background: ${props =>
    props.checked
      ? props => props.theme.colors.textPrimary
      : props => props.theme.colors.bgSecondary};
  border: none;
  font-family: SF;
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

const RadioInput = ({ checked, label, ...inputProps }) => {
  return (
    <Label checked={checked}>
      <Input type="radio" checked={checked} {...inputProps} />
      {label}
    </Label>
  );
};

export default RadioInput;
