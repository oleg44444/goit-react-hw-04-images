import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '38612170-77e451be80bcbbe7a33b7fee0';
const params = {
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
  key: API_KEY,
};
const defParams = new URLSearchParams(params);

export const getImages = async (search, page) => {
  const { data } = await axios.get(`/?q=${search}&page=${page}&${defParams}`);
  return data;
};
