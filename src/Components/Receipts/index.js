import React, { useState } from "react";

import "../../styles.css";

///////////////////////

const Receipts = (props) => {
  const [payStatus, setPayStatus] = useState(null);

  const receipts = props.data.map((item, index) => {
    const handleClick = () => {
      // console.log(item)
      props.payToggle(item);
    };

    // console.log(item.paid);
    return (
      <section className="receipt-container" key={index}>
        <h2>{item.person}</h2>
        <h3>{item.order.main}</h3>
        <ul>
          <li>
            <span>Protein</span>: {item.order.protein}
          </li>
          <li>
            <span>Rice</span>: {item.order.rice}
          </li>
          <li>
            <span>Sauce</span>: {item.order.sauce}
          </li>
          <li>
            <span>Drink</span>: {item.order.drink}
          </li>
          <li>
            <span>Price</span>: ${item.order.cost}
          </li>
        </ul>
        <span>Paid? </span>
        <button onClick={handleClick}>{item.paid.toString()}</button>
      </section>
    );
  });

  return <div className="receipts-div">{receipts}</div>;
};

export default Receipts;
