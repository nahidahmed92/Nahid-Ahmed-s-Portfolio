export const fetcher = (url, method = 'GET', data = null) => {
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify(data) : null,
  }).then((response) => {
    if (!response.ok) {
      throw new Error('An error occurred while fetching the data.');
    }
    return response.json();
  });
};
