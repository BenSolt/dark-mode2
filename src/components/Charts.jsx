import React from "react";
import Chart from "./Chart";

const Charts = ({ coinData1 }) => {

    // const coinBit = coinData1.filter(str => (str.id === "bitcoin"))
    // const coinEth = coinData1.filter(str => (str.id === "ethereum"))
    // const coinXpr = coinData1.filter(str => (str.id === "xpr"))

  return (
    <div className="charts">
      {coinData1.map(coin => (
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
export default Charts;
