import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate} from "react-router-dom";


function CreateProductForm() {

    const navigate= useNavigate()
    function backtohome(){
      navigate("/")
    }

    const [name,isname] =useState("")
    const [img,isimg] =useState("")
    const [price,isprice] =useState("")
    const [descrip,isdescrip] =useState("")
  async function create(e){
    e.preventDefault();
    const datas = await axios.post("http://localhost:4001/products",{
      "name": name,
      "img": img,
      "price": price,
      "description": descrip
    })
    backtohome()
  }

  return (
    <form className="product-form">
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={name}
            onChange={(e) => isname(e.target.value)}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={img}
            onChange={(e) => isimg(e.target.value)}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={price}
            onChange={(e) => isprice(e.target.value)}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value={descrip}
            onChange={(e) => isdescrip(e.target.value)}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit" onClick={create}>Create</button>
      </div>
    </form>
  );
}

export default CreateProductForm;
