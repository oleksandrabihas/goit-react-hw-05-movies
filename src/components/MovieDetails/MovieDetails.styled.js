import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkGoBack = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  font-size: 20px;
  background-color: rgb(198 151 206 / 40%);
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const SectionContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 10px;
  margin-bottom: 30px;
`;

export const PosterContainer = styled.div`
  width: 280px;
  height: 420px;
  overflow: hidden;
  flex: 0 0 280px;
`;

export const Poster = styled.img`
  object-fit: contain;
`;

export const MovieInfo = styled.div`
  flex: 1;
  h2 {
    margin-bottom: 15px;
  }
  p {
    margin-bottom: 15px;
  }
`;
export const MovieAdditionalInfo = styled.h2`
  margin-bottom: 10px;
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  margin-right: 20px;
  font-size: 20px;
  margin-bottom: 10px;
  padding: 10px;

  &.active {
    color: #8e26bb82;
  }
  
  &:hover {
    transform: scale(1.1);
    color: #8e26bb82;
  }
`;
