import axios from 'axios';
import { useQuery } from 'react-query';

const API_KEY = process.env['NX_REACT_APP_API_KEY'];

const useFetchGif = (searchKey: string) => {
  let safeKey = '';
  if (searchKey.length < 50) safeKey = searchKey;

  const BASE_URL = 'https://api.giphy.com/v1';

  return useQuery(
    ['searchKey', searchKey],
    async () => {
      const { data } = await axios.get(
        `${BASE_URL}/gifs/search?api_key=${API_KEY}&q=${safeKey}&limit=3&offset=0&lang=en`
      );
      return data;
    },
    { refetchOnWindowFocus: false }
  );
};

export default useFetchGif;
