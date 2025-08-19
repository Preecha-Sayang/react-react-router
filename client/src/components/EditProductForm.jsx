import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditProductForm() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setError(null);
        setIsLoading(true);
        const res = await axios.get(`http://localhost:4001/products/${productId}`);
        const { name, image, price, description } = res.data.data || {};
        console.log(res)
        setFormData({
          name: name ?? "",
          image: image ?? "",
          price: (price ?? "").toString(),
          description: description ?? "",
        });
      } catch (err) {
        setError("Failed to load product.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      setError(null);
      const payload = {
        name: formData.name,
        price: Number(formData.price),
        image: formData.image,
        description: formData.description,
      };
      await axios.put(`http://localhost:4001/products/${productId}`, payload);
      navigate("/");
    } catch (err) {
      setError("Failed to update product.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Edit Product Form</h1>
      {error ? <p>{error}</p> : null}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
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
                rows={4}
                cols={30}
                value={formData.description}
                onChange={handleChange}
              />
            </label>
          </div>
        </>
      )}
      <div className="form-actions">
        <button type="submit" disabled={isSubmitting || isLoading}>Update</button>
      </div>
    </form>
  );
}

export default EditProductForm;
