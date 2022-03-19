import { FC } from 'react';

import { GifSearch } from '@geo-ip/shared-ui/gif-search';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export const Home: FC = () => {
  return (
    <HomeWrapper>
      <Typography variant="h2">Welcome to Giphy Search!</Typography>
      <Box pt={16}>
        <GifSearch />
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
      padding: 6,
    }}
  >
    {children}
  </Stack>
);
