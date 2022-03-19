import { useState, KeyboardEvent, FC } from 'react';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Tags from './tags';

const MAX_SEARCH_LENGTH = 50;

export const GifSearch: FC = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const isInputValid = () => {
    console.log(tags.join('+').length + searchPhrase.length);
    if (tags.join('+').length + searchPhrase.length > MAX_SEARCH_LENGTH)
      return true;

    return (
      tags.join('+').length > MAX_SEARCH_LENGTH ||
      searchPhrase.length > MAX_SEARCH_LENGTH
    );
  };

  const onSearchEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    const valueIsNotDuplicate = !tags.includes(value);

    if (
      e.key === 'Enter' &&
      value !== '' &&
      valueIsNotDuplicate &&
      !isInputValid()
    ) {
      if (tags.length === 2) {
        const termsCopy = tags;
        termsCopy[termsCopy.length - 1] = value;
      } else {
        setTags((prevTerms) => [...prevTerms, value]);
      }

      setSearchPhrase('');
    }
  };

  const onTermDelete = (value: string) => {
    setTags(tags.filter((tag) => tag !== value));
  };

  const finalPhrase = () => {
    if (tags.join('+').length) {
      let tagsWithoutPhrase = tags.join('+');
      if (searchPhrase) tagsWithoutPhrase += `+${searchPhrase}`;
      return tagsWithoutPhrase;
    }

    return searchPhrase;
  };

  return (
    <Box>
      <Box display="flex">
        <TextField
          sx={{ marginBottom: 2, marginRight: 2 }}
          fullWidth
          onKeyDown={onSearchEnter}
          onChange={(e) => setSearchPhrase(e.target.value)}
          value={searchPhrase}
          error={isInputValid()}
          label="Search..."
          helperText={
            isInputValid()
              ? 'must be 50 or less characters'
              : 'Hint: hit enter to add up to 2 adjacent terms'
          }
        />
      </Box>
      <Tags tags={tags} onTermDelete={onTermDelete} />
      <Typography variant="h6">{finalPhrase()}</Typography>
    </Box>
  );
};

export default GifSearch;
