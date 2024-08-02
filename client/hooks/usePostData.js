import useSWRMutation from 'swr/mutation';

async function postData(url, { arg }) {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(arg),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}

export default function usePostData(url) {
  const { data, error, trigger } = useSWRMutation(url, postData);

  const submitData = (form) => trigger({ arg: form });

  return { data, error, submitData, isSubmitting: !data && !error };
}
