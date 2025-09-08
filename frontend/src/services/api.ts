import axios from 'axios';
import { Product, ProductFormData } from '../types/Product';

const API_BASE_URL = 'http://localhost:5000/api';

export const productAPI = {
  getProducts: (): Promise<Product[]> => 
    axios.get(`${API_BASE_URL}/products`).then(response => response.data),

  createProduct: (product: ProductFormData): Promise<Product> => 
    axios.post(`${API_BASE_URL}/products`, product).then(response => response.data),

  updateProduct: (id: number, product: ProductFormData): Promise<Product> =>
    axios.put(`${API_BASE_URL}/products/${id}`, product).then(response => response.data),

  deleteProduct: (id: number): Promise<void> => 
    axios.delete(`${API_BASE_URL}/products/${id}`)
};