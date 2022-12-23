import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '214d6711e68bd393d38010aaa630428f',
    language: 'ko-KR',
  },
});

export default instance;
