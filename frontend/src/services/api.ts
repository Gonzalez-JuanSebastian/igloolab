import axios from 'axios';

// Definiciones locales de tipos
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  createdAt?: string;
  updatedAt?: string;
}

interface ProductFormData {
  name: string;
  description: string;
  price: string;
}

const API_BASE_URL = 'http://localhost:5000/api';

export const productAPI = {
  getProducts: (): Promise<Product[]> => 
    axios.get(`${API_BASE_URL}/products`).then(response => response.data),

  createProduct: (product: ProductFormData): Promise<Product> => 
    axios.post(`${API_BASE_URL}/products`, product).then(response => response.data),

  deleteProduct: (id: number): Promise<void> => 
    axios.delete(`${API_BASE_URL}/products/${id}`)
};