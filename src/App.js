import { useState } from "react";

import SearchForm from "./Components/SearchForm";
import Receipts from "./Components/Receipts";
import NewReceiptsForm from "./Components/newReceiptForm";

import dataArray from "./ReceiptData";

import "./styles.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [paid, setPaid] = useState(0);
  const [addReceipt, setAddReceipt] = useState(0);

  const receiveSearch = (entry) => {
    setSearch(entry);
  };

  let filteredArr = dataArray;

  // My favourite thing that I've writting so far vvv
  filteredArr = dataArray.filter((entry) => {
    return entry.person.toLowerCase().startsWith(search.toLowerCase());
  });

  const payToggle = (event) => {
    setPaid(paid + 1);
    switch (event.paid) {
      case true:
        dataArray[event.id - 1].paid = false;
        break;
      default:
        dataArray[event.id - 1].paid = true;
    }
  };

  const newReceipt = (receipt) => {
    setAddReceipt(addReceipt + 1);
    dataArray.push(receipt);
    console.log(dataArray);
  };

  return (
    <div className="App">
      <h1>
        Korilla Receipts <span>(by Noam)</span>
      </h1>
      <SearchForm value={search} receiveSearch={receiveSearch} />
      <NewReceiptsForm newReceipt={newReceipt} />
      <Receipts data={filteredArr} payToggle={payToggle} />
    </div>
  );
}
