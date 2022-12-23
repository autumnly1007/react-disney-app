import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';

const banner = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const response = axios.get(request.fetchNowPlaying);
    console.log(object);
  };
  return <div></div>;
};

export default banner;
