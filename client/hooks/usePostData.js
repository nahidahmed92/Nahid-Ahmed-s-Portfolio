import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';

const usePostData = (url, data) => {
  const {
    data: responseData,
    error,
    mutate,
  } = useSWR(url, (url) => fetcher(url, 'POST', data), {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });

  return {
    data: responseData,
    error,
    mutate, // for manual revalidation or state updates
  };
};

export default usePostData;
