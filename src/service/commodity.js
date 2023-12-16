import axios from 'axios';
import { COMMODITY_PATH } from '../const/paths';

const getAllCommodities = async () => {
    try {
        const response = await axios.get(COMMODITY_PATH);
        console.log(response);
        return response;
    } catch (error) {
        return null;
    }
};

export { getAllCommodities };