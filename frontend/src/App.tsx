import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import { Product, ProductFormData } from './types/Product';
import { productAPI } from './services/api';
import './App.css';


function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
      setError('Error al cargar los productos');
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
      setError('Error al agregar el producto');
      console.error(err);
    }
  };

  const handleDeleteProduct = async (id: number) => {
    try {
      await productAPI.deleteProduct(id);
      setProducts(prev => prev.filter(product => product.id !== id));
      setError(null);
    } catch (err) {
      setError('Error al eliminar el producto');
      console.error(err);
    }
  };

  return (
    <div className="App">
      <h1>Sistema de Gestión de Productos</h1>
      
      {error && <div className="error-message">{error}</div>}
      
      <ProductForm onSubmit={handleAddProduct} />
      
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ProductList products={products} onDelete={handleDeleteProduct} />
      )}
    </div>
  );
}

export default App;