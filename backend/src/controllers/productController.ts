import { Request, Response } from 'express';
import Product from '../models/Product';

export const getProducts = async (req: Request, res: Response) => {
  try {
    console.log('Obteniendo productos...');
    const products = await Product.findAll();
    console.log('Productos encontrados:', products);
    res.json(products);
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    res.status(500).json({ 
      error: 'Error al obtener los productos',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  const { name, description, price } = req.body;

  // Validación
  if (!name || !description || !price) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  if (isNaN(parseFloat(price)) || parseFloat(price) <= 0) {
    return res.status(400).json({ error: 'El precio debe ser un número válido mayor que 0' });
  }

  try {
    console.log('Creando producto:', { name, description, price });
    const product = await Product.create({ 
      name, 
      description, 
      price: parseFloat(price) 
    });
    console.log('Producto creado:', product);
    res.status(201).json(product);
  } catch (error) {
    console.error('Error al crear el producto:', error);
    res.status(500).json({ 
      error: 'Error al crear el producto',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    console.log('Eliminando producto con ID:', id);
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    await product.destroy();
    console.log('Producto eliminado:', id);
    res.status(204).send();
  } catch (error) {
    console.error('Error al eliminar el producto:', error);
    res.status(500).json({ 
      error: 'Error al eliminar el producto',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};