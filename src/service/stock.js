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

export { getAllStocks };