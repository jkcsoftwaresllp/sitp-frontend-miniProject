import React, { useEffect, useState } from 'react';
import PieChart from './components/PieChart';
import Header from './components/Header';
import Balance from './components/Balance';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

const App = () => {
  const initialTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
  const [transactions, setTransactions] = useState(initialTransactions);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const balance = transactions.reduce((acc, t) => acc + t.amount, 0);


  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const income = transactions
  .filter((t) => t.amount > 0)
  .reduce((acc, t) => acc + t.amount, 0);

const expense = transactions
  .filter((t) => t.amount < 0)
  .reduce((acc, t) => acc + Math.abs(t.amount), 0);


  return (
  <div className="container">
    <Header />
    <Balance transactions={transactions} />
    <TransactionList transactions={transactions} onDelete={deleteTransaction} />
    <PieChart income={income} expense={expense} />
    <AddTransaction onAddTransaction={addTransaction} balance={balance} />
  </div>
);
};

export default App;
