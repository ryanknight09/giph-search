import { FC } from 'react';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

interface GifProps {
  image: string;
}

export const Gif: FC<GifProps> = ({ image }) => {
  return (
    <Card
      sx={{
        margin: 3,
        boxShadow: 'rgba(107, 95, 236, 0.2) 0px 8px 24px',
      }}
    >
      <CardMedia component="img" image={image} alt="a gif!" />
    </Card>
  );
};

export default Gif;
