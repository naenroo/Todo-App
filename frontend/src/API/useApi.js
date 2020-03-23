import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAPI = endpoint => {
  const [loadData, setLoadData] = useState([]);

  useEffect(() => {
    getData();

    // eslint-disable-next-line
  }, []);

  const getData = async () => {
    const response = await axios.get(endpoint);
    setLoadData(response.data);
  };

  return loadData;
};
