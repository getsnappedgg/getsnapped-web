import axios from "axios";

const API_URL = "/api/users/";

type RegisterData = {
	username: string;
	email: string;
	password: string;
};
type LoginData = {
	email: string;
	password: string;
};
// Register user
const register = async (registerData: RegisterData): Promise<String> => {
	const response = await axios.post(API_URL, registerData);

	if (response.data) {
		localStorage.setItem("user", JSON.stringify(response.data));
	}

	return response.data || "";
};

// Login user
const login = async (loginData: LoginData): Promise<String> => {
	const response = await axios.post(API_URL + "login", loginData);

	if (response.data) {
		localStorage.setItem("user", JSON.stringify(response.data));
	}

	return response.data || "";
};

// Logout user
const logout = () => {
	localStorage.removeItem("user");
};

const authService = {
	register,
	logout,
	login,
};

export default authService;
