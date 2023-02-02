
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget, currency } = useContext(AppContext);


    const totExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const alertType = totExpenses > budget ? 'alert-danger' : 'alert-success';

    if (totExpenses > budget) {
        alert(
          "Budget cannot be less than the expenses " +
          currency +
            totExpenses
        );
      } 


    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency}{budget - totExpenses}</span>
        </div>
    );
};

export default Remaining;