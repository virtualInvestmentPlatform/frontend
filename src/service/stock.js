import axios from 'axios';
import { STOCK_PATH } from '../const/paths';


const getAllStocks = async () => {
    try {
        const response = await axios.get(STOCK_PATH);
        return response;
    } catch (error) {
        return null;
    }
};

const getStock = async (code) => {
    try {
        const response = await axios.get(STOCK_PATH + "/" + code);
        if (response != null) {
            const stockText = response.data.text;
            const stockCode = response.data.code;
            const codeLength = stockCode.length;
            if (stockText.indexOf(stockCode) === 0) {
                const remainingText = stockText.substring(codeLength);
                const firstHalf = remainingText.slice(0, (remainingText.length / 2) + 1);
                response.data.text = firstHalf;
            }
        }
        return response;
    } catch (error) {
        return null;
    }
};

export { getAllStocks , getStock};