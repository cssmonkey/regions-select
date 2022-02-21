import axios from 'axios';

const regionApi = {
  searchByRegion: async (region: string) => {
    return await axios.get(`https://restcountries.com/v3.1/region/${region}`);
  },
};

export default regionApi;
