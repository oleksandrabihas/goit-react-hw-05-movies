import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  gap: 10px;

  li {
    width: 120px;
    height: auto;
  }
`;
export const ImageThumb = styled.div`
  width: 120px;
  height: 160px;
  overflow: hidden;
  flex: 0 0 120px;
`;

export const ActorPoster = styled.img`
  flex: 1;
  object-fit: cover;
`;
export const ActorName = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
export const Character = styled.p`
color: gray;

span {
color: black;
}
`
