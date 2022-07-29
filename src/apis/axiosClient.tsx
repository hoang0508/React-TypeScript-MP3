import axios from "axios";

const axiosClient = axios.create({
  baseURL: `https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records`,
  headers: {
    "Content-type": "application/json",
  },
});

export default axiosClient;
