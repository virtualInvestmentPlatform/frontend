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

const buyTransaction = async (token, investmentCode, investmentType, amount) => {
    const config = {
        headers: {
          Authorization: `Bearer <${token}>`,
        },
    };

    try {
        const response = await axios.post(TRANSACTION_PATH,{
            investmentCode,
            investmentType,
            "transactionType" : "BUY",
            amount
        },{
            headers: config.headers,
        });
        return response;
    } catch (error) {
        return error;
    }
};

const sellTransaction = async (token, investmentCode, investmentType, amount) => {
    const config = {
        headers: {
          Authorization: `Bearer <${token}>`,
        },
    };

    try {
        const response = await axios.post(TRANSACTION_PATH,{
            investmentCode,
            investmentType,
            "transactionType" : "SELL",
            amount
        },{
            headers: config.headers,
        });
        return response;
    } catch (error) {
        return error;
    }
};


export { getUserItemCount , buyTransaction, sellTransaction};