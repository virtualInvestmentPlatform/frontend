import axios from 'axios';
import {USER_PATH } from '../const/paths';

const getUser = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer <${token}>`,
    },
  };
  try {
    const request = axios.get(USER_PATH, config);
    const response = await request;
    return response;
  } catch (error) {
    return null;
  }
};

export { getUser };