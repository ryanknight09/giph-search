import { FC } from 'react';

import { Header } from '@geo-ip/shared-ui/header';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import AppRoutes from './app-routes/app-routes';

export const App: FC = () => {
  return (
    <Stack>
      <Header logo="Giphy Search" />
      <MainContentWrapper>
        <AppRoutes />
      </MainContentWrapper>
    </Stack>
  );
};

export default App;

const MainContentWrapper: FC = ({ children }) => (
  <Box
    sx={{
      height: 'calc(100vh - 64px)',
    }}
  >
    {children}
  </Box>
);
