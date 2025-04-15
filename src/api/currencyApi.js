
import axios from 'axios';

const API_KEY = 'ff10792be9c5fbbff751e8ac';


export const getExchangeRates = async (baseCurrency='USD') => {
  const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${baseCurrency}`;
  try {
    const response = await axios.get(API_URL);   
    return response.data;  
  } 
  catch (error) {    
    throw new Error("Failed to fetch exchange rates");
  }
};
