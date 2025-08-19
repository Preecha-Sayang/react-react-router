import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link, useNavigate} from "react-router-dom";



function HomePage() {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const getProducts = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const results = await axios("http://localhost:4001/products");
      setProducts(results.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const navigate= useNavigate()
  function createpro(){
    navigate("/CreateProductPage")
  }
  
  function viewpage(id){
  navigate(`/ViewProductPage/${id}`)
  
  }

    function edit(id){
  navigate(`/EditProductPage/${id}`)
  
  }

  async function Delete(id){
    await axios.delete(`http://localhost:4001/products/${id}`)
    setProducts(products.filter((x)=> x.id !== id))
  }


  return (
    <div>
      <div className="app-wrapper">
        <h1 className="app-title">Products</h1>
        <button onClick={createpro}>Create Product</button>
      </div>
      <div className="product-list">
        {products.map((product) => {
          return (
            <div className="product">
              <div className="product-preview">
                <img
                  src="https://via.placeholder.com/250/250"
                  alt="some product"
                  width="250"
                  height="250"
                />
              </div>
              <div className="product-detail">
                <h1>Product name: {product.name} </h1>
                <h2>Product price: {product.price}</h2>
                <p>Product description: {product.description} </p>
                <div className="product-actions">
                  <button className="view-button" onClick={()=> viewpage(product.id)}>View</button>
                  <button className="edit-button" onClick={()=> edit(product.id)}>Edit</button>
                </div>
              </div>

              <button className="delete-button" onClick={()=> Delete(product.id)}>x</button>
            </div>
          );
        })}
      </div>
      {isError ? <h1>Request failed</h1> : null}
      {isLoading ? <h1>Loading ....</h1> : null}
    </div>
  );
}

export default HomePage;
