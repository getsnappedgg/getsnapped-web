import axios from "axios";
const API_URL = import.meta.env.VITE_SERVER_URL + `/api/cards`;

const getCards = async (): Promise<any> => {
	try {
		console.log("apiurl: ", API_URL);
		const response = await axios.get(API_URL);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
const cardsService = {
	getCards,
};

export default cardsService;
