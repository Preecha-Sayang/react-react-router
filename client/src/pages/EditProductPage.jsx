import EditProductForm from "../components/EditProductForm";
import { useNavigate } from "react-router-dom";





function EditProductPage() {
const navigate= useNavigate()
  function backtohome(){
    navigate("/")
  }
  return (
    <div>
      <h1>Edit Product Page</h1>
      <EditProductForm />
      <button onClick={backtohome}>Back to Home</button>
    </div>
  );
}

export default EditProductPage;
