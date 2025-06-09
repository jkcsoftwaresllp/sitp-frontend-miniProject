import styles from './AddTransaction.module.css';
import { useState } from 'react';

const AddTransaction = ({ onAddTransaction, balance }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const numAmount = Number(amount);
    if (!text || !amount) return alert('Both fields are required');

    if (numAmount < 0 && Math.abs(numAmount) > balance) {
      return alert("You don't have enough balance to make this expense.");
    }

    onAddTransaction({
      id: Date.now(),
      text,
      amount: numAmount,
    });
    setText('');
    setAmount('');
  };

  return (
    <div className={styles.transactionContainer}>
      <h3>Add Transaction</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} placeholder="Text" onChange={(e) => setText(e.target.value)} />
        <input type="number" value={amount} placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTransaction;
