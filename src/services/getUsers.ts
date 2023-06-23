import axios from "axios";

export const fetchUsers = async () => {
	const response = await axios.get('https://run.mocky.io/v3/e7035b01-2b3e-4b77-ab48-aaa0d3aade0e');
	return response?.data;
}
