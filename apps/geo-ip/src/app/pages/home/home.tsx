import { FC } from 'react';

// import { GifSearch } from '@geo-ip/shared-ui/gif-search';
import { GifSearch } from '@geo-ip/geo-ip/ui-shared';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export const Home: FC = () => {
  return (
    <HomeWrapper>
      <Typography variant="h2">Welcome to Giphy Search!</Typography>
      <Box width={600} pt={16}>
        <Typography variant="h6">Lets find some gifs...</Typography>
        <GifSearch />
      </Box>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper: FC = ({ children }) => (
  <Stack
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 6,
    }}
  >
    {children}
  </Stack>
);
