import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface GifSearchProps {}

const StyledGifSearch = styled.div`
  color: pink;
`;

export function GifSearch(props: GifSearchProps) {
  return (
    <StyledGifSearch>
      <h1>Welcome to GifSearch!</h1>
    </StyledGifSearch>
  );
}

export default GifSearch;
