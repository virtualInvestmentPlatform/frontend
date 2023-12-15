import axios from 'axios';
import REGISTER_PATH from '../const/paths';

const registerUser = async (name, surname, email, password) => {
    const response = await axios.post(REGISTER_PATH, {
        email,
        password,
        name,
        surname
    });
};

export default registerUser;