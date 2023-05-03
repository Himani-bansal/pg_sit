import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React from 'react'
import BuyCards from "./Related";
import Related from "./BuyCard";
import Qualities from "./Qualities";
import UseStateDesc from "./UseStateDesc";

import Header from './Header';
const product = () => {
  return (
    <div>
        <Header/>
        <Qualities/>
        <BuyCards/>
        <UseStateDesc/>
        <Related/>
      
    </div>
  )
}

export default product
