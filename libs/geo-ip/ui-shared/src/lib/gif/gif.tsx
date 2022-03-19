import { FC } from 'react';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

interface GifProps {
  image: string;
}

export const Gif: FC<GifProps> = ({ image }) => {
  return (
    <Card sx={{ margin: 3 }}>
      <CardMedia
        component="img"
        sx={{ height: 200 }}
        image={image}
        alt="green iguana"
      />
    </Card>
  );
};

export default Gif;
