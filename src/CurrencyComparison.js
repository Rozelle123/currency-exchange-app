import React from 'react';
import { useState } from 'react';
import { useCurrency } from './CurrencyContext';
import './style.css';

const CurrencyComparisonTable = () => {
    const { currencyArray, baseCurrency } = useCurrency();
    
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20; 

    // Calculate data for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = currencyArray.slice(indexOfFirstItem, indexOfLastItem);

    // Split items into two groups for the two sets of columns
    const firstGroup = currentItems.slice(0, 10); // First 10 items
    const secondGroup = currentItems.slice(10, 20); // Next 10 items

    // Calculate total number of pages
    const totalPages = Math.ceil(currencyArray.length / itemsPerPage);

    // Pagination handlers
    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    if (!currencyArray || currencyArray.length === 0) {
        return <p>No currency data available.</p>;
    }
       
    return (
        <div className="comparison-table-container">
            <table>
                <thead>
                    <tr>
                        <th>Currency</th>
                        <th>Rate (1 {baseCurrency})</th>
                        <th>Currency</th>
                        <th>Rate (1 {baseCurrency})</th>
                    </tr>
                </thead>
                <tbody>

                    {firstGroup.map((item, index) => (
                        <tr key={item.currency}>
                            <td>{item.currency}</td>
                            <td>{item.rate.toFixed(2)}</td>
                            <td>
                                {secondGroup[index]
                                    ? secondGroup[index].currency
                                    : 'N/A'}
                            </td>
                            <td>
                                {secondGroup[index]
                                    ? secondGroup[index].rate.toFixed(2)
                                    : 'N/A'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button onClick={goToNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default CurrencyComparisonTable;
