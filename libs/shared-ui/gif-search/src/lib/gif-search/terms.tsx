import { FC } from 'react';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

interface TermsProps {
  terms: string[];
  onTermDelete: (value: string) => void;
}

export const Terms: FC<TermsProps> = ({ terms, onTermDelete }) => (
  <Stack direction="row" spacing={1}>
    {terms.map((term) => (
      <Chip key={term} label={term} onDelete={() => onTermDelete(term)} />
    ))}
  </Stack>
);

export default Terms;
