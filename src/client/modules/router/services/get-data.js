import axios from 'axios';

const getData = match => {
  return axios.get('')
    .then(resp => resp.data);
};

export default getData;
