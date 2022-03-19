import { FC, useState } from 'react';

import { Search, Gif } from '@geo-ip/geo-ip/ui-shared';
import { CircularProgress, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import useFetchGif from '../../api/useFetchGif';
import { useDebounce } from '../../utility/useDebounce';

export const Home: FC = () => {
  const [searchKey, setSearchKey] = useState('');
  const debouncedSearch = useDebounce(searchKey, 1000);
  const { data, isFetching } = useFetchGif(debouncedSearch);

  const results = data?.data || [];

  const gifs = results.map((gif: any) => {
    return {
      image: gif.images['fixed_height'].url,
      id: gif.id,
    };
  });

  return (
    <HomeWrapper>
      <Typography mt={16} variant="h2">
        Welcome to Giphy Search!
      </Typography>
      <Box width={600} pt={16}>
        <Typography mb={2}>
          <strong>Search Key:</strong> {searchKey}
        </Typography>
        <Search onInputChange={(key) => setSearchKey(key)} />
      </Box>
      <Box display="flex" mt={8}>
        {isFetching ? (
          <CircularProgress />
        ) : (
          gifs.map(({ id, image }: any) => <Gif key={id} image={image} />)
        )}
      </Box>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper: FC = ({ children }) => (
  <Stack
    sx={{
      height: '100%',
      display: 'flex',
      alignItems: 'center',
    }}
  >
    {children}
  </Stack>
);
