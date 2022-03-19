import { FC, KeyboardEvent, useState, useEffect } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import Typography from '@mui/material/Typography';
import { useForm, FormProvider } from 'react-hook-form';
import * as Yup from 'yup';

import ControlledTextField from './controlled-text-field';
import Terms from './terms';

const phraseValidationSchema = Yup.object().shape({
  searchPhrase: Yup.string().max(5, 'term must not exceed 50 characters'),
});

interface GifSearch {
  onInputChange: (newValue: string) => void;
}

export const GifSearch: FC<GifSearch> = ({ onInputChange }) => {
  const [terms, setTerms] = useState<string[]>([]);

  const validationMethods = useForm({
    mode: 'all',
    resolver: yupResolver(phraseValidationSchema),
  });

  const {
    watch,
    reset,
    formState: { errors },
  } = validationMethods;

  useEffect(() => {
    const subscription = watch(({ searchPhrase }) => {
      if (searchPhrase) onInputChange(`${searchPhrase}+${terms.join('+')}`);
    });
    return () => subscription.unsubscribe();
  }, [watch, onInputChange, terms]);

  const onTermDelete = (value: string) => {
    setTerms(terms.filter((term) => term !== value));
  };

  const onSearchEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    const valueIsNotDuplicate = !terms.includes(value);

    if (
      e.key === 'Enter' &&
      value !== '' &&
      !errors['searchPhrase'] &&
      valueIsNotDuplicate
    ) {
      if (terms.length === 2) {
        const termsCopy = terms;
        termsCopy[termsCopy.length - 1] = value;
      } else {
        setTerms((prevTerms) => [...prevTerms, value]);
      }

      reset();
    }
  };

  return (
    <FormProvider {...validationMethods}>
      <Typography variant="h6">Lets find some gifs...</Typography>
      <ControlledTextField
        label="Search..."
        helperText="Hint: hit enter to add up to 2 adjacent terms"
        onKeyDown={onSearchEnter}
      />
      <Terms terms={terms} onTermDelete={onTermDelete} />
    </FormProvider>
  );
};

export default GifSearch;

//  const fetchGifs = async (searchPhrase: string) => {
//    const { data } = await axios.get(
//      `${baseUrl}gifs/search?api_key=hIf8Orkj8zJNLoSSigelOoD2c8mpO0s0&q=pizza&limit=3&offset=0&lang=en`
//    );
//    return data;
//  };

//  const { data } = useQuery(
//    ['gifs', terms.join('+')],
//    () => fetchGifs(terms.join('+')),
//    {
//      refetchOnWindowFocus: false,
//    }
//  );

//  const debounceCb = useCallback(
//    debounce((newValue) => console.log(newValue), 500),
//    []
//  );

//  useEffect(() => {
//    const subscription = watch((value) => debounceCb(value));
//    return () => subscription.unsubscribe();
//  }, [watch, debounceCb]);
