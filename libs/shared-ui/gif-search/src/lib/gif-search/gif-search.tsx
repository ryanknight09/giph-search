import { FC, KeyboardEvent } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';

const phraseValidationSchema = Yup.object().shape({
  searchPhrase: Yup.string().max(5, 'term must not exceed 40 characters'),
});

export const GifSearch: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(phraseValidationSchema),
  });

  const onSearchEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (e.key === 'Enter') {
      console.log(target.value);
    }
  };

  return (
    <>
      <h2>Lets, find some gifs...</h2>
      <Controller
        name="searchPhrase"
        defaultValue=""
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          console.log('spec input:', error);

          return (
            <TextField
              onKeyDown={onSearchEnter}
              error={!!error}
              onChange={onChange}
              value={value}
              label={'Search...'}
              helperText="Hint: hit enter to filter up to 3 search terms"
            />
          );
        }}
      />
    </>
  );
};

export default GifSearch;
