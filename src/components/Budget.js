import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const BUDGET_MAX = 20000;

const Budget = () => {
  const { budget, totExpenses, currency, dispatch } = useContext(AppContext);

  ////////////------ Update budget--------/////////////
  const updateBudget = (event) => {
    const inputVal = Number(event.target.value);

    if (!Number.isInteger(inputVal) || (Number.isNaN(inputVal))) {
        alert('Please only use numbers');
        return;
        }

    if (inputVal < totExpenses) {
      alert(
        "Budget cannot be less than the expenses " +
        currency +
          totExpenses
      );
    } 

    if (inputVal > BUDGET_MAX) {
        alert('Please enter a value less that ' + BUDGET_MAX);
        return;
    }

    dispatch({
        type: 'SET_BUDGET',
        payload: inputVal,
    });
  };
////////////////////////////
  return (
    <div
      className="alert alert-secondary"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
    >
      <div>
        <label htmlFor="budget"> Budget:</label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>{currency}</span>
        <input
          required="required"
          type="number"
          id="budget"
          value={budget}
          step="10"
          style={{ marginLeft: '2rem' , size: 10, width:100}}
          onChange={updateBudget}
        ></input>
      </div>
    </div>
  );
};

export default Budget;