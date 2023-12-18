import axios from 'axios';
import { TRANSACTION_PATH, GET_ITEM_COUNT_PATH } from '../const/paths';

const getUserItemCount = async (token, investmentCode, investmentType) => {
    const config = {
        headers: {
          Authorization: `Bearer <${token}>`,
        },
    };

    try {
        const response = await axios.get(GET_ITEM_COUNT_PATH, {
            headers: config.headers,
            params: {
                investmentCode,
                investmentType
            }
        });
        return response;
    } catch (error) {
        return null;
    }
};

export { getUserItemCount};