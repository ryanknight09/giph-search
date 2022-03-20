import { useState, KeyboardEvent, FC, useEffect } from 'react';

import Box from '@mui/material/Box';

import Tags from './tags';
import TextInput from './text-input';

const MAX_SEARCH_LENGTH = 50;

interface SearchProps {
  onInputChange: (value: string) => void;
}

export const Search: FC<SearchProps> = ({ onInputChange }) => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const joinedTags = tags.join('+');

  useEffect(() => {
    const combineTagsWithSearchPhrase = () => {
      if (joinedTags.length) {
        let tagsWithoutPhrase = joinedTags;
        if (searchPhrase) tagsWithoutPhrase += `+${searchPhrase}`;

        return tagsWithoutPhrase;
      }

      return searchPhrase;
    };

    onInputChange(combineTagsWithSearchPhrase());
  }, [searchPhrase, onInputChange, tags, joinedTags]);

  const isJoinedTagsValid = () => joinedTags.length > MAX_SEARCH_LENGTH;
  const isSearchPhraseValid = () => searchPhrase.length > MAX_SEARCH_LENGTH;
  const isCombinedInputValid = () =>
    joinedTags.length + searchPhrase.length > MAX_SEARCH_LENGTH;

  const isInputValid = () =>
    isCombinedInputValid() || isSearchPhraseValid() || isJoinedTagsValid();

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
    <Box data-testid="custom-search">
      <TextInput
        fullWidth
        variant="outlined"
        onKeyDown={onSearchEnter}
        onChange={(e) => setSearchPhrase(e.target.value)}
        value={searchPhrase}
        error={isInputValid()}
        label="Search..."
        helperText={
          isCombinedInputValid()
            ? 'must be 50 or less characters'
            : 'Hint: hit enter to add up to 2 adjacent terms'
        }
      />
      <Tags tags={tags} onTermDelete={onTermDelete} />
    </Box>
  );
};

export default Search;
