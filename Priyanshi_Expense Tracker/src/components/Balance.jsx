import React from 'react';
import styles from './Balance.module.css';

const Balance = ({ transactions }) => {
  const amounts = transactions.map(t => t.amount);
  const total = amounts.reduce((acc, item) => acc + item, 0);
  const income = amounts.filter(val => val > 0).reduce((acc, val) => acc + val, 0);
  const expense = amounts.filter(val => val < 0).reduce((acc, val) => acc + val, 0);

  return (
    <div className={styles.balanceBox}>
      <div className={styles.total}>₹{total}</div>
      <div className={styles.breakdown}>
        <div>
          <h4>INCOME</h4>
          <p className={styles.income}>₹{income}</p>
        </div>
        <div>
          <h4>EXPENSE</h4>
          <p className={styles.expense}>₹{Math.abs(expense)}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
