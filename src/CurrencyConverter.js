import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField, Box } from "@mui/material";
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled';
import './style.css';
import { useCurrency } from './CurrencyContext';


const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const { baseCurrency, setBaseCurrency, currencyArray, isLoading, isError, error } = useCurrency();
  const [targetCurrency, setTargetCurrency] = useState('USD');
  const [targetRate, setTargetRate] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);
 

  useEffect(() => {
    if (currencyArray.length > 0) {
        const selectedTargetRate = currencyArray.find((item) => item.currency === targetCurrency)?.rate;
        if (selectedTargetRate) {
            setTargetRate(selectedTargetRate);
            setConvertedAmount(amount * selectedTargetRate);
        }
    }
}, [currencyArray, targetCurrency, amount]);


  

  const getBaseCurrencyRate = (e) => {
    const baseCurrency = e.target.value; 
    setBaseCurrency(baseCurrency); 
    
    const selectedTargetRate = currencyArray.find((item) => item.currency === targetCurrency)?.rate;
   
    if (selectedTargetRate) {
        setTargetRate(selectedTargetRate); 
        setConvertedAmount(amount * selectedTargetRate); 
    } else {
        console.warn('Target rate not found for:', targetCurrency);
    }
};

  const getTargetCurrencyRate = (e) => {
    const targetCurrency = e.target.value;
    setTargetCurrency(targetCurrency);
    const selectedTargetRate = currencyArray.find((item)=>(item.currency === targetCurrency))?.rate;
    setTargetRate(selectedTargetRate);
    
  }
  
  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className='outer-container'>
      <h2 >GLOBAL EXCHANGE</h2>
      <hr className='hr-line'/>
      <div className='currency-container'>      
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="from-label">From</InputLabel>
          <Select
            labelId="from-label"
            id="from-label"       
            autoWidth
            label="From"
            onChange={getBaseCurrencyRate}
            value={baseCurrency}
          >
            {currencyArray.map(({ currency, rate }) => (
              <MenuItem key={currency} value={currency} >
                {currency}
              </MenuItem>
            ))}         
          </Select>
        </FormControl>

        <ReplayCircleFilledIcon fontSize='large' />

        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="to-label">To</InputLabel>
          <Select
            labelId="to-label"
            id="to-label"       
            autoWidth
            label="To"
            onChange={getTargetCurrencyRate}
            value={targetCurrency}
          >
            {currencyArray.map(({ currency, rate }) => (
              <MenuItem key={currency} value={currency}>
                {currency}
              </MenuItem>
            ))}
          </Select>
        </FormControl>     
      </div>
      <div>
        <Box
          component="form"
          sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
          noValidate
          autoComplete="off"          
        >
          <TextField id="currency-amount" label="Amount" variant="standard" onChange={(e)=>setAmount(e.target.value)}/>
        </Box>
      </div>
      <label>1 {baseCurrency} = {targetRate.toFixed(2)} {targetCurrency}</label>
      <p><b>1 {baseCurrency} = </b></p>
     
      <h2>{convertedAmount.toFixed(2)} {targetCurrency}</h2>
    
    </div> 
  );
};

export default CurrencyConverter;
