import React, { createContext, useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getExchangeRates } from './api/currencyApi';

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
    const [baseCurrency, setBaseCurrency] = useState('USD');
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['exchangeRates', baseCurrency],
        queryFn: () => getExchangeRates(baseCurrency),
    });

    const exchangeRates = data?.conversion_rates || {};
    const currencyArray = Object.entries(exchangeRates).map(([currency, rate]) => ({
        currency,
        rate,
    }));

    return (
        <CurrencyContext.Provider value={{
            baseCurrency,
            setBaseCurrency,
            currencyArray,
            isLoading,
            isError,
            error,
        }}>
            {children}
        </CurrencyContext.Provider>
    );
};

export const useCurrency = () => useContext(CurrencyContext);
