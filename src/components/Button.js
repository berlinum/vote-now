import styled from '@emotion/styled';

const Button = styled.button`
  min-width: 178px;
  height: 45px;
  margin: 90px 0;
  padding: 0 44px;
  font-size: 20px;
  border: none;
  border-radius: 23px;
  background-color: ${props => props.theme.colors.bgElement};
  color: ${props => props.theme.colors.textElement};
  font-family: SF;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  &:focus {
    outline: ${props => props.theme.colors.bgShadow};
    box-shadow: 0 0 3px 2px ${props => props.theme.colors.bgShadow};
  }
  &:hover {
    color: ${props => props.theme.colors.bgElement};
    background-color: ${props => props.theme.colors.textElement};
    cursor: pointer;
  }
`;

export default Button;
