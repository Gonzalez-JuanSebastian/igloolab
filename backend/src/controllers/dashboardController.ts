import { Request, Response } from 'express';
import Product from '../models/Product';
import sequelize from '../config/database';

export const getDashboardStats = async (req: Request, res: Response) => {
  try {
    // Obtener estadísticas generales
    const totalProducts = await Product.count();
    const totalValue = await Product.sum('price');
    
    const avgPriceResult: any = await Product.findOne({
      attributes: [[sequelize.fn('AVG', sequelize.col('price')), 'avgPrice']],
    });

    const avgPrice = avgPriceResult ? parseFloat(avgPriceResult.get('avgPrice')) : 0;

    // Productos más caros y más baratos
    const mostExpensive = await Product.findOne({
      order: [['price', 'DESC']],
    });

    const cheapest = await Product.findOne({
      order: [['price', 'ASC']],
    });

    // Productos recientes
    const recentProducts = await Product.findAll({
      order: [['createdAt', 'DESC']],
      limit: 5,
    });

    res.json({
      totalProducts,
      totalValue: totalValue || 0,
      avgPrice,
      mostExpensive: mostExpensive || null,
      cheapest: cheapest || null,
      recentProducts: recentProducts || [],
    });
  } catch (error) {
    console.error('Error al obtener estadísticas del dashboard:', error);
    res.status(500).json({ 
      error: 'Error al obtener estadísticas del dashboard',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

export const getSalesData = async (req: Request, res: Response) => {
  try {
    // Datos de ventas simulados (en una aplicación real, esto vendría de una tabla de ventas)
    const salesData = [
      { month: 'Ene', sales: 12500 },
      { month: 'Feb', sales: 18900 },
      { month: 'Mar', sales: 15800 },
      { month: 'Abr', sales: 21700 },
      { month: 'May', sales: 24300 },
      { month: 'Jun', sales: 19500 },
    ];

    res.json(salesData);
  } catch (error) {
    console.error('Error al obtener datos de ventas:', error);
    res.status(500).json({ 
      error: 'Error al obtener datos de ventas',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

export const getProductStats = async (req: Request, res: Response) => {
  try {
    // Estadísticas de productos por categoría (simuladas)
    const productStats = [
      { category: 'Muebles', count: 15, value: 12500 },
      { category: 'Electrónicos', count: 8, value: 18900 },
      { category: 'Ropa', count: 23, value: 8500 },
      { category: 'Hogar', count: 12, value: 6700 },
    ];

    res.json(productStats);
  } catch (error) {
    console.error('Error al obtener estadísticas de productos:', error);
    res.status(500).json({ 
      error: 'Error al obtener estadísticas de productos',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};