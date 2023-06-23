import axios from "axios";

export const fetchUsers = async () => {
	const response = await axios.get('https://run.mocky.io/v3/93d1b949-480e-40e4-bf30-d58d60392c20');
	return response?.data;
}
