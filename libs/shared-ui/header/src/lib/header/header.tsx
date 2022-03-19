import { FC } from 'react';

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

/* eslint-disable-next-line */
export interface HeaderProps {
  logo: string;
}

export const Header: FC<HeaderProps> = ({ logo }) => {
  return (
    <AppBar position="static">
      <Container
        maxWidth="xl"
        sx={{
          margin: 0,
        }}
      >
        <Toolbar disableGutters>
          <Typography variant="h4" noWrap>
            {logo}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
