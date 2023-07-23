import styled from 'styled-components';

export const StyledForm = styled.form`
  margin-bottom: 20px;
`;
export const Input = styled.input`
  height: 25px;
  width: 400px;
  font-size: 16px;
  &:focus {
    outline-color: #8e26bb82;
  }
`;
export const BtnSearch = styled.button`
  height: 30px;
  font-size: 16px;
  margin-left: 5px;
  background-color: #8e26bb59;
  border: none;
  border-radius: 2px;
`;