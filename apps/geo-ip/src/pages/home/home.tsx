import { FC, useState } from 'react';

import { Search, Gif } from '@geo-ip/geo-ip/ui-shared';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import useFetchGif from '../../api/useFetchGif';
import { useDebounce } from '../../utility/useDebounce';

export const Home: FC = () => {
  const [searchKey, setSearchKey] = useState('');
  const debouncedSearch = useDebounce(searchKey, 1000);
  const { data } = useFetchGif(debouncedSearch);

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
        <Gif image="https://media4.giphy.com/media/3osxYoufeOGOA7xiX6/200.gif?cid=6565a9c407gidsqc4iqbwa3msf8ddsx3ny1j7s2enlc5osk1&rid=200.gif&ct=g" />
        <Gif image="https://media2.giphy.com/media/jn2iXu2HRpMuovBrrV/200.gif?cid=6565a9c407gidsqc4iqbwa3msf8ddsx3ny1j7s2enlc5osk1&rid=200.gif&ct=g" />
        <Gif image="https://media0.giphy.com/media/4ayiIWaq2VULC/200.gif?cid=6565a9c407gidsqc4iqbwa3msf8ddsx3ny1j7s2enlc5osk1&rid=200.gif&ct=g" />
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
