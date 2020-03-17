import styled from '@emotion/styled';

const Button = styled.button`
  min-width: 178px;
  height: 45px;
  margin: 90px 0;
  padding: 0 44px;
  font-size: 20px;
  border: none;
  border-radius: 23px;
  background-color: #ff3b30;
  color: #fffdfd;
  font-family: SF;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  &:focus {
    outline: #007aff;
    box-shadow: 0 0 3px 2px #007aff;
  }
  &:hover {
    color: #ff3b30;
    background-color: #fffdfd;
    cursor: pointer;
  }
`;

export default Button;
