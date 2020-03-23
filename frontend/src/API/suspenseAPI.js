import axios from 'axios';

export const fetchDataSuspense = () => {
  const dataPromise = getData();

  return {
    data: wrapPromise(dataPromise)
  };
};

const wrapPromise = promise => {
  //Set initial Status
  let status = 'waiting';
  //Store Default
  let result;
  //Wait for Promise
  let suspender = promise.then(
    response => {
      status = 'success';
      result = response;
    },
    err => {
      status = 'error';
      result = err;
    }
  );

  return {
    read() {
      if (status === 'waiting') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    }
  };
};

const getData = async () => {
  try {
    return await axios
      .get(process.env.REACT_APP_LINK)
      .then(response => response.data.data);
  } catch (error) {
    alert(error, 'Failed Fetching Data');
    console.error(error, 'Failed Fetching Data');
  }
};
