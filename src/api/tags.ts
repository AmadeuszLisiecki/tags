export const getTags = (url: string) => {
  return fetch(url)
    .then(response => response.json());
};
