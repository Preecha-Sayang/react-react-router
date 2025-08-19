import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";  
import axios from "axios";
import ButtonHome from "../components/ui/Button";

function ViewProductPage() {
  const [products, setProducts] = useState([]);
  const { productId} = useParams();
  
  const [isLoading,setIsLoading] = useState(true);

  const getProducts = async () => {
    try {
     
      setIsLoading(true);
      const results = await axios.get(`http://localhost:4001/products/${productId}`);
      console.log(results)
      setProducts(results.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching product:", error);
      setIsLoading(false);
    }
  };
  console.log(productId)
  useEffect(() => {
    if(productId){
      getProducts();
    }
  }, [productId]);

  
  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>{products.name}</h2>
        <p>{products.description}</p>
      </div>
      <ButtonHome/>
    </div>
  );
}

export default ViewProductPage;
