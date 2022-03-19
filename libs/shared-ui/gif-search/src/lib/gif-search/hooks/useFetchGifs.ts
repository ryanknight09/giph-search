import { useState } from 'react';

import axios from 'axios';
import { useQuery } from 'react-query';

export const useFetchGifs = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const baseUrl = 'https://api.giphy.com/v1';

  return [
    setSearchPhrase,
    useQuery(
      'gifs',
      async () => {
        const { data } = await axios.get(
          `${baseUrl}gifs/search?api_key=hIf8Orkj8zJNLoSSigelOoD2c8mpO0s0&q=${searchPhrase}&limit=3&offset=0&lang=en`
        );
        return data;
      },
      { refetchOnWindowFocus: false }
    ),
  ];
};
