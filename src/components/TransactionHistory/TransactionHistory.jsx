
import React from 'react';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (  <table  className={css.table}>
  <thead>
    <tr>
      <th  className={css.thead}>Type</th>
      <th  className={css.thead}>Amount</th>
      <th className={css.thead}>Currency</th>
    </tr>
  </thead>

  <tbody>
            {
                items.map(item => {
                    return (
            <tr className={css.thread} key={item.id}>
              <td className={css.threadItem}>{item.type}</td>
              <td className={css.threadItem}>{item.amount}</td>
              <td className={css.threadItem}>{item.currency}</td>
            </tr>
          );
                } )
    }
  </tbody>
</table>
)
};


export default TransactionHistory;