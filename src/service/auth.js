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

/*
import axios from 'axios';
import { useAuth } from './authContext';

function makeApiRequest() {
  const { token } = useAuth();

  // Include the JWT token in the request headers
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  axios.get('/api/some-endpoint', config)
    .then((response) => {
      // Handle the API response
    })
    .catch((error) => {
      // Handle API errors
    });
}*/