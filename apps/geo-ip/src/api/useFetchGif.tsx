import axios from 'axios';
import { useQuery } from 'react-query';

const useFetchGif = (searchKey: string) => {
  const BASE_URL = 'https://api.giphy.com/v1';

  return useQuery(
    ['searchKey', searchKey],
    async () => {
      const { data } = await axios.get(
        `${BASE_URL}/gifs/search?api_key=hIf8Orkj8zJNLoSSigelOoD2c8mpO0s0&q=${searchKey}&limit=3&offset=0&lang=en`
      );
      return data;
    },
    { refetchOnWindowFocus: false }
  );
};

export default useFetchGif;
