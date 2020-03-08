import axios from 'axios';

const apiList = axios.create({ baseURL: "https://api.openbrewerydb.org"});

export default apiList;
