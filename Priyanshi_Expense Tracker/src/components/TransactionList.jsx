import React from 'react';
import styles from './TransactionList.module.css';

const TransactionList = ({ transactions, onDelete }) => {
  return (
    <div>
      <h4>History</h4>
      <ul className={styles.list}>
        {transactions.map(t => (
          <li key={t.id} className={t.amount < 0 ? styles.minus : styles.plus}>
            {t.amount < 0 ? '−' : '+'} {t.text}
            <span>
              {t.amount < 0 ? '−' : '+'}₹{Math.abs(t.amount)}
            </span>
            <button className={styles.deleteBtn} onClick={() => onDelete(t.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;