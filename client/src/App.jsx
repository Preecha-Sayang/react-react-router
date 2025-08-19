import "./App.css";
import CreateProductForm from "./components/CreateProductForm";
import EditProductPage from "./pages/EditProductPage"
import Homepage from "./pages/HomePage"
import ViewProductPage from "./pages/ViewProductPage"
import { BrowserRouter, Routes, Route, Link, useNavigate} from "react-router-dom";
import axios from "axios";
import CreateProductPage from "./pages/CreateProductPage";


function App() {
  

  return <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/CreateProductPage" element={<CreateProductPage/>}/>
      <Route path="/ViewProductPage/:productID" element={<ViewProductPage/>}/>
      <Route path="/EditProductPage/:editID" element={<EditProductPage/>}/>
    </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
