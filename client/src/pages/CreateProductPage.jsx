import CreateProductForm from "../components/CreateProductForm";
import { BrowserRouter, Routes, Route, Link, useNavigate} from "react-router-dom";

function CreateProductPage() {

   const navigate= useNavigate()
    function backtohome(){
      navigate("/")
    }




  return (
    <div>
      <h1>Create Product Page</h1>
      <CreateProductForm />
      <button onClick={backtohome}>Back to Home</button>
    </div>
  );
}

export default CreateProductPage;
