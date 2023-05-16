import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React from 'react'
import Header from "./Header";
import Reviews from "./ReviewForm"

const product = () => {
  return (
    <div>
        <Header/>
        
      <Reviews/>
    </div>
  )
}

export default product
