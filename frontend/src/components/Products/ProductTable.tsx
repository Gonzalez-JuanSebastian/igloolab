import React, { useState } from 'react';
import { Product } from '../../types/Product';
import { Edit, Trash2 } from 'lucide-react';
import EditProductModal from './EditProductModal';
import './ProductTable.css';

interface ProductTableProps {
  products: Product[];
  onEdit: (id: number, productData: any) => void;
  onDelete: (id: number) => void;
}

const ProductTable: React.FC<ProductTableProps> = ({ products, onEdit, onDelete }) => {
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = (product: Product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  const handleUpdate = (id: number, productData: any) => {
    onEdit(id, productData);
  };

  return (
    <>
      <div className="product-table-card">
        <h2 className="table-title">Product List</h2>
        
        {products.length === 0 ? (
          <p className="no-products">No products available</p>
        ) : (
          <div className="table-container">
            <table className="product-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="product-name">{product.name}</td>
                    <td className="product-description">{product.description}</td>
                    <td className="product-price">${product.price}</td>
                    <td className="product-actions">
                      <button 
                        onClick={() => handleEditClick(product)}
                        className="action-button edit-button"
                        title="Edit product"
                      >
                        <Edit size={16} />
                      </button>
                      <button 
                        onClick={() => onDelete(product.id)}
                        className="action-button delete-button"
                        title="Delete product"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <EditProductModal
        product={editingProduct}
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onUpdate={handleUpdate}
      />
    </>
  );
};

export default ProductTable;