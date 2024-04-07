import React from 'react';
import { Link } from 'react-router-dom';
import classes from './orderItemsList.module.css';

export default function OrderItemsList({ order }) {
  return (
    <table className={classes.table}>
      <tbody>
        <tr>
          <td colSpan="5">
            <h3>Order Items:</h3>
          </td>
        </tr>
        {order.items.map(item => (
          <tr key={item.food.id}>
            <td>
              <Link to={`/food/${item.food.id}`}>
                <img src={item.food.image} alt=' '/>
              </Link>
            </td>
            <td>{item.food.name}</td>
            <td>
            ৳ {item.food.price}
            </td>
            <td>x{item.quantity}</td>
            <td>
            ৳ {item.price}
            </td>
          </tr>
        ))}

        <tr>
          <td colSpan="3"></td>
          <td>
            <strong>Total :</strong>
          </td>
          <td>
          ৳ {order.totalPrice}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
