import React, { useState, useEffect } from 'react';
import MainLayout from './components/Layout/MainLayout';
import ProductForm from './components/Products/ProductForm';
import ProductTable from './components/Products/ProductTable';
import SalesDashboard from './components/Sales/SalesDashboard';
import Dashboard from './components/Dashboard/Dashboard'; 
import { Product, ProductFormData } from './types/Product';
import { productAPI } from './services/api';
import './App.css';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('dashboard'); 
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await productAPI.getProducts();
      setProducts(data);
      setError(null);
    } catch (err) {
      setError('Error loading products');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddProduct = async (productData: ProductFormData) => {
    try {
      const newProduct = await productAPI.createProduct(productData);
      setProducts(prev => [...prev, newProduct]);
      setError(null);
    } catch (err) {
      setError('Error adding product');
      console.error(err);
    }
  };

  const handleEditProduct = async (id: number, productData: ProductFormData) => {
    try {
      const updatedProduct = await productAPI.updateProduct(id, productData);
      setProducts(prev => prev.map(product => 
        product.id === id ? updatedProduct : product
      ));
      setError(null);
    } catch (err) {
      setError('Error updating product');
      console.error(err);
    }
  };

  const handleDeleteProduct = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await productAPI.deleteProduct(id);
        setProducts(prev => prev.filter(product => product.id !== id));
        setError(null);
      } catch (err) {
        setError('Error deleting product');
        console.error(err);
      }
    }
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  return (
    <MainLayout activeSection={activeSection} onSectionChange={handleSectionChange}>
      <div className="app-content">
        {error && (
          <div className="error-message">
            {error}
            <button onClick={() => setError(null)} className="error-close">
              ×
            </button>
          </div>
        )}

        {activeSection === 'dashboard' && (
          <Dashboard />
        )}

        {activeSection === 'products' && (
          <>
            <ProductForm onSubmit={handleAddProduct} />
            
            {loading ? (
              <div className="loading">Loading products...</div>
            ) : (
              <ProductTable 
                products={products}
                onEdit={handleEditProduct}
                onDelete={handleDeleteProduct}
              />
            )}
          </>
        )}

        {activeSection === 'sales' && (
          <SalesDashboard />
        )}
      </div>
    </MainLayout>
  );
}

export default App;