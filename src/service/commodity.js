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

const getCommodity = async (code) => {
    try {
        const response = await axios.get(COMMODITY_PATH + "/" + code);
        return response;
    } catch (error) {
        return null;
    }
};

export { getAllCommodities, getCommodity };