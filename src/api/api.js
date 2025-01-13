import axios from "axios";

const API_URL = 'https://pixabay.com/api/?'
const API_KEY = '44360334-36ebf903b1de9e2c9dc7dfbf4'

export const fetchPhotos = async (searchQuery = '', page = 1) => {
    //console.log('searchQuery:',searchQuery);

    //const response = await axios.get(`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    const response = await axios.get(`${API_URL}image_type=photo&orientation=horizontal&per_page=12&q=${searchQuery}&page=${page}&key=${API_KEY}`);
    //console.log('response:', response.data);

    return response.data;
};

export const fetchPhotoById = async (photoId) => {
    const response = await axios.get(`${API_URL}&id=${photoId}&key=${API_KEY}`);
    //console.log('response:', response.data);

    return response.data;
}




const api = { fetchPhotos, fetchPhotoById }

export default api;