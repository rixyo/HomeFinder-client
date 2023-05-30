
import axios, { AxiosRequestConfig } from 'axios';

const fetcher = async (url: string) => {
   const token = localStorage.getItem('token');
 
 
  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${token}` ,
      // Other headers...
    },
  };

  const res = await axios.get(url, config);
  return res.data;
};

export default fetcher;
