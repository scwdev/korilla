import React, { useRef } from "react";

import data from "../../ReceiptData";
import "../../styles.css";

const NewReceiptForm = (props) => {
  const inputRefPerson = useRef();
  const inputRefMain = useRef();
  const inputRefProtein = useRef();
  const inputRefRice = useRef();
  const inputRefSauce = useRef();
  const inputRefDrink = useRef();
  const inputRefCost = useRef();
  const inputRefPaid = useRef(false);

  const handleSubmit = (event) => {
    console.log("event, ", document.getElementById("new-receipts-form"));
    event.preventDefault();
    const newSubmit = {
      id: data.length + 1,
      person: inputRefPerson.current.value,
      order: {
        main: inputRefMain.current.value,
        protein: inputRefProtein.current.value,
        rice: inputRefRice.current.value,
        sauce: inputRefSauce.current.value,
        drink: inputRefDrink.current.value,
        cost: inputRefCost.current.value
      },
      paid: false
    };
    document.getElementById("new-receipts-form").reset();
    props.newReceipt(newSubmit);
  };

  return (
    <section id="new-receipts-section">
      <form id="new-receipts-form">
        <label for="person">Name: </label>
        <input ref={inputRefPerson} type="text" id="person" />
        <br />
        <div>
          <label for="main">Main: </label>
          <input ref={inputRefMain} type="text" id="main" />
          <br />
          <label for="protein">Protein: </label>
          <input ref={inputRefProtein} type="text" id="protein" />
          <br />
          <label for="rice">Rice: </label>
          <input ref={inputRefRice} type="text" id="rice" />
          <br />
          <label for="sauce">Sauce: </label>
          <input ref={inputRefSauce} type="text" id="sauce" />
          <br />
          <label for="drink">Drink: </label>
          <input ref={inputRefDrink} type="text" id="drink" />
          <br />
          <label for="cost">Cost: $</label>
          <input ref={inputRefCost} type="number" id="cost" min="0" />
          <br />
        </div>
        {/* <p>Payment Status</p>
        <label for="false">Pending</label>
        <input ref={inputRefPaid} type="radio" id="false" name="paid" checked />
        <label for="true">Paid in full</label>
        <input ref={inputRefPaid} type="radio" id="true" name="paid" />
        <br /> */}
        <input onClick={handleSubmit} type="submit" value="Log New Receipt" />
      </form>
    </section>
  );
};

export default NewReceiptForm;
