import React, { useState } from 'react';
import { View, Text, FlatList, TextInput } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';
import ProductItem from './ProductItem';
import { products } from '../data/products';

const ProductList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.headerContainer}>
        <Text style={GlobalStyles.headerTitle}>Catálogo de Productos Farmacéuticos</Text>
      </View>
      
      <View style={GlobalStyles.searchContainer}>
        <TextInput
          style={GlobalStyles.searchInput}
          placeholder="Buscar productos..."
          value={searchQuery}
          onChangeText={handleSearch}
          placeholderTextColor="#9ca3af"
        />
      </View>

      {filteredProducts.length > 0 ? (
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ProductItem product={item} />}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      ) : (
        <Text style={GlobalStyles.emptyState}>
          No se encontraron productos que coincidan con "{searchQuery}"
        </Text>
      )}
    </View>
  );
};

export default ProductList;
