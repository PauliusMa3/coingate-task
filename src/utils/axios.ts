import axios from 'axios';
import { API_GIFT_CARD_URL } from 'src/config';

const axiosInstance = axios.create({
	baseURL: API_GIFT_CARD_URL,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
});

export const axiosFetch = async (endpoint: string) => {
	try {
		return (await axiosInstance.get(endpoint)).data;
	} catch (error) {
		console.error(error);
	}
};

export default axiosInstance;
