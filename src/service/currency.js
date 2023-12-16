import axios from 'axios';
import { CURRENCY_PATH } from '../const/paths';

const getAllCurrencies = async () => {
    try {
        const response = await axios.get(CURRENCY_PATH);
        console.log(response);
        return response;
    } catch (error) {
        return null;
    }
};

export { getAllCurrencies };