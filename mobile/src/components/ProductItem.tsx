import React from 'react';
import { View, Text } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';
import { Product } from '../data/products';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <View style={GlobalStyles.productCard}>
      <Text style={GlobalStyles.productName}>{product.name}</Text>
      <Text style={GlobalStyles.productDescription}>{product.description}</Text>
      <Text style={GlobalStyles.productPrice}>${product.price.toFixed(2)}</Text>
      <Text style={GlobalStyles.productCategory}>{product.category}</Text>
    </View>
  );
};

export default ProductItem;
