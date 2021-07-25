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
      <section key={index}>
        <h3>{item.person}</h3>
        <h2>{item.order.main}</h2>
        <ul>
          <li>{item.order.protein}</li>
          <li>{item.order.rice}</li>
          <li>{item.order.sauce}</li>
          <li>{item.order.drink}</li>
          <li>${item.order.cost}</li>
        </ul>
        <button onClick={handleClick}>{item.paid.toString()}</button>
      </section>
    );
  });

  return <div>{receipts}</div>;
};

export default Receipts;
