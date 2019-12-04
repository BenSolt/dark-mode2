import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Charts from "./components/Charts";

import Navbar from "./components/Navbar";
import Charts2 from "./components/Charts2";
import Charts3 from "./components/Charts3";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  
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
    <div className="App">
      <Navbar />
      
      <Route path="/ether" component={Charts2}/>
      <Route path="/xrp" component={Charts3}/>

      <Charts coinData1={coinData} />
      <Charts2 coinData1={coinData} />
      <Charts3 coinData1={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
<Router>
    <App />
</Router>
  , rootElement);
