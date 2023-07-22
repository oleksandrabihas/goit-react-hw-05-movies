import styled from 'styled-components';

export const HeaderComponent = styled.header`
  margin: 0 auto;
  padding: 14px 0;
  box-shadow: 0px 5px 4px rgba(85 40 104 / 51%);
  margin-bottom: 30px;
`;
export const Navigation = styled.nav`
  display: flex;
  gap: 20px;

  a {
    font-size: 20px;
    font-weight: 400;
    color: black;
    padding: 5px;
    transition: transform 300ms ease;
    &.active {
      color: #8e26bb82;
    }
    &:hover {
      transform: scale(1.1);
      color: #8e26bb82;
    }
  }
`;