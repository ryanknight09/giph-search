import { FC } from 'react';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

interface TermsProps {
  tags: string[];
  onTermDelete: (value: string) => void;
}

export const Tags: FC<TermsProps> = ({ tags, onTermDelete }) => (
  <Stack direction="row" spacing={1}>
    {tags.map((tag) => (
      <Chip
        sx={{
          color: 'white',
          backgroundColor: '#6b5fec',
        }}
        key={tag}
        label={tag}
        onDelete={() => onTermDelete(tag)}
      />
    ))}
  </Stack>
);

export default Tags;
