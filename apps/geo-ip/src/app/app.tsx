import { FC } from 'react';

import { Header } from '@geo-ip/shared-ui/header';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { QueryClient, QueryClientProvider } from 'react-query';

import AppRoutes from './app-routes/app-routes';

const queryClient = new QueryClient();

export const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Header logo="Giphy Search" />
        <MainContentWrapper>
          <AppRoutes />
        </MainContentWrapper>
      </Stack>
    </QueryClientProvider>
  );
};

export default App;

const MainContentWrapper: FC = ({ children }) => (
  <Box
    sx={{
      backgroundColor: '#36393f',
      color: 'white',
      height: 'calc(100vh - 64px)',
    }}
  >
    {children}
  </Box>
);
