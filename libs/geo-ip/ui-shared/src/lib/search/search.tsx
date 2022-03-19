import { useState, KeyboardEvent, FC, useEffect } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Tags from './tags';

const MAX_SEARCH_LENGTH = 50;

interface SearchProps {
  onInputChange: (value: string) => void;
}

export const Search: FC<SearchProps> = ({ onInputChange }) => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const getFinalPhrase = () => {
      if (tags.join('+').length) {
        let tagsWithoutPhrase = tags.join('+');
        if (searchPhrase) tagsWithoutPhrase += `+${searchPhrase}`;

        return tagsWithoutPhrase;
      }

      return searchPhrase;
    };

    onInputChange(getFinalPhrase());
  }, [searchPhrase, onInputChange, tags]);

  const isInputValid = () => {
    if (tags.join('+').length + searchPhrase.length > MAX_SEARCH_LENGTH)
      return true;

    return (
      tags.join('+').length > MAX_SEARCH_LENGTH ||
      searchPhrase.length > MAX_SEARCH_LENGTH
    );
  };

  const onTermDelete = (value: string) => {
    setTags(tags.filter((tag) => tag !== value));
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

  return (
    <Box>
      <TextField
        sx={TextFielSx}
        fullWidth
        variant="outlined"
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
      <Tags tags={tags} onTermDelete={onTermDelete} />
    </Box>
  );
};

export default Search;

const TextFielSx = {
  marginBottom: 2,
  marginRight: 2,
  '& .MuiFormLabel-root': {
    color: '#B9BBBE',
  },
  '& .MuiInputBase-root': {
    color: 'white',
    backgroundColor: '#303030',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#B9BBBE',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#303030',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#303030',
  },
  '& .MuiFormHelperText-root': {
    color: '#B9BBBE',
  },
};
