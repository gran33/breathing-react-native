import axios from 'axios';

const BASE_URL = 'https://www.noshmim.app/';
const FUNCTIONS = '/_functions';
const UrlBuilder = {
  Checklist: `${FUNCTIONS}/checklist`,
};

const HttpService = (baseURL: string) => {
  const axiosInstance = axios.create({
    baseURL,
    headers: {'Content-Type': 'application/json' }
  });

  const getCheckList = async () => {
    const {data} = await axiosInstance.get(UrlBuilder.Checklist);
    return data.items;
  };


  return {
    getCheckList,
  };
};


export default HttpService(BASE_URL);
