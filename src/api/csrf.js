import axios from 'axios';

axios.defaults.withCredentials = true;

const getCsrfToken = async () => {
    try {
        await axios.get('http://localhost:8000/csrf/');
    } catch (error) {
        console.error("Failed to get CSRF token:", error.message);
    }
};

export default getCsrfToken;