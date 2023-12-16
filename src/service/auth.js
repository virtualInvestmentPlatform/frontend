import axios from 'axios';
import { REGISTER_PATH, LOGIN_PATH } from '../const/paths';

// Function to register a user
const registerUser = async (name, surname, email, password) => {
    try {
        const response = await axios.post(REGISTER_PATH, {
            email,
            password,
            name,
            surname
        });
        return response;
    } catch (error) {
        return null;
    }
};
  
// Function to log in a user
const loginUser = async (email, password) => {
    try {
        const response = await axios.post(LOGIN_PATH, {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export { registerUser, loginUser };