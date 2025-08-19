import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

function CreateProductForm() {
  const [formData, setFormData] = useState({ name: "", image: "", price: "", description: "", });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      const payload = {
        name: formData.name.trim(),
        image: formData.image.trim(),
        price: Number(formData.price),
        description: formData.description.trim(),
      };
      await axios.post("http://localhost:4001/products", payload);
      navigate("/");
    } catch (err) {
      setError("Failed to create product.");
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      {error && <p className="error">{error}</p>}
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={formData.name}
            onChange={handleChange}
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
            value={formData.image}
            onChange={handleChange}
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
            value={formData.price}
            onChange={handleChange}
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
            value={formData.description}
            onChange={handleChange}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default CreateProductForm;
