import axios from "axios";
const API_URL = 'http://localhost:8080'
export const requestAPI = async (url: string) => {
    try {
        const {data} = await axios.get(`${API_URL}${url}`, {
            headers: {},
            params: {}
        });
        return data
    } catch (err) {
        console.log('requestAPI error', err);
    }
}
