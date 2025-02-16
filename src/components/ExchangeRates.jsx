import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ExchangeRates() {
  const { base } = useParams();
  const [rates, setRates] = useState({});
  const [date, setDate] = useState("");

  useEffect(() => {
    if (!base) return;
    fetch(`https://api.vatcomply.com/rates?base=${base}`)
      .then((res) => res.json())
      .then((data) => {
        setRates(data.rates);
        setDate(data.date);
      })
      .catch((error) => console.error("Error fetching exchange rates:", error));
  }, [base]);


  return (
    <div>
      <h3>Exchange Rates for {base} (Date: {date})</h3>
      <ul>
        {Object.entries(rates).map(([currency, rate]) => (
          <li key={currency} style={{color:currency==base?"red":""}}>
            {currency}: {rate.toFixed(2)} 
          </li>
        ))}
      </ul>
      <Link to="/">Back</Link>
    </div>
  );
}

export default ExchangeRates;
