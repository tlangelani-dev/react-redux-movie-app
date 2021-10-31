import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_APP_OMDB_BASE_URL
});
