export const searchingFor = search => x => {
  return x.text.toLowerCase().includes(search.toLowerCase()) || !search;
};
