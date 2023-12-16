import axios from 'axios';
import {USER_PATH } from '../const/paths';

const getUser = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer <${token}>`,
    },
  };
  try {
    const response = await axios.get(USER_PATH, config);
    return response;
  } catch (error) {
    return null;
  }
};

export { getUser };