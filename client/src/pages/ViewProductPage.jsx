import { BrowserRouter, Routes, Route, Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function ViewProductPage() {
  const {productID}  = useParams();
  const [data, isdata] =useState([])
  


  const navigate= useNavigate()
  function backtohome(){
    navigate("/")
  }
  
  async function getdata() {
    
    const newdata= await axios.get(`http://localhost:4001/products/${productID}`)
    isdata(newdata.data.data)
  }

useEffect(() => {
  getdata()
  }, []);


console.log(data)
  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>Product Title: {data.name}</h2>
        <p>price: {data.price}</p>
        <img src={data.image} alt="img-view" />

      </div>

      <button onClick={backtohome}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
