import React, { useState } from 'react';
import { ProductFormData } from '../../types/Product';
import './ProductForm.css';

interface ProductFormProps {
  onSubmit: (product: ProductFormData) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    description: '',
    price: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', description: '', price: '' });
  };

  return (
    <div className="product-form-card">
      <h2 className="form-title">Add New Product</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
            placeholder="Enter product name"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-textarea"
            required
            placeholder="Enter product description"
            rows={4}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="price" className="form-label">Price:</label>
          <div className="price-input-container">
            <span className="currency-symbol">$</span>
            <input
              type="number"
              id="price"
              name="price"
              step="0.01"
              min="0"
              value={formData.price}
              onChange={handleChange}
              className="form-input price-input"
              required
              placeholder="0.00"
            />
          </div>
        </div>
        
        <button type="submit" className="submit-button">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;