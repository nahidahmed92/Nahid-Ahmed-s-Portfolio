import useSWR from 'swr';
import { useState } from 'react';

import { fetcher } from '../utils/fetcher';

export default function usePostData(url, formData) {
  // const {
  //   data: responseData,
  //   error,
  //   mutate,
  // } = useSWR(url, (url) => fetcher(url, 'POST', data), {
  //   revalidateOnFocus: false,
  //   shouldRetryOnError: false,
  // });

  // return {
  //   data: responseData,
  //   error,
  //   mutate, // for manual revalidation or state updates
  // };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const { data, mutate } = useSWR(
    isSubmitting
      ? [url, { method: 'POST', body: JSON.stringify(formData), headers: { 'Content-Type': 'application/json' } }]
      : null,
    fetcher,
    { revalidateOnFocus: false }
  );
  console.log(`usepostdata: ${data}`);

  const submitData = async () => {
    setIsSubmitting(true);
    try {
      await mutate();
    } catch (error) {
      setError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { data, error, isSubmitting, submitData };
}
