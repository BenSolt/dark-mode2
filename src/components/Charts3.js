import React, { useState, useEffect } from "react";
import Chart from "./Chart";

import axios from "axios";

const Charts3 = ({ }) => {

    const [coinData, setCoinData] = useState([]);
    // const coinBit = coinData1.filter(str => (str.id === "bitcoin"))
    // const coinEth = coinData2.filter(str => (str.id === "ethereum"))
    const coinXpr = coinData.filter(str => (str.id === "ripple"))


    useEffect(() => {
        axios
          .get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
          )
          .then(res => {
            setCoinData(res.data)
          console.log(res.data)
        
        })
          .catch(err => console.log(err));
      }, []);


  return (
    <div className="charts">
      {coinXpr.map(coin => (
        <div className="chart__container" key={coin.name}>
          <h2 className="coin__title">{coin.name}</h2>
          <h4 className="coin__symbol">{coin.symbol}</h4>
          <div className="coin__logo">
            <img src={coin.image} height="40" alt={coin.name} />
          </div>
          <Chart sparklineData={coin.sparkline_in_7d.price} />
        </div>
      ))}
    </div>
  );
};
export default Charts3;