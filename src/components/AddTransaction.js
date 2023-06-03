import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Name of Transaction: </label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Text..." />
        </div>
        <div className="form-control">
          <p htmlFor="amount"
            >Amount:<br />
        *insert negative sign (-) for expenses and positive sign (+) for income* </p>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}