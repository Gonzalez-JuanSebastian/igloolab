import React, { useState, useEffect } from 'react';
import { Package, DollarSign, TrendingUp, BarChart3 } from 'lucide-react';
import './Dashboard.css';

interface Product {
  id: number;
  name: string;
  price: number;
  createdAt: string;
}

interface DashboardStats {
  totalProducts: number;
  totalValue: number;
  avgPrice: number;
  mostExpensive: Product | null;
  cheapest: Product | null;
  recentProducts: Product[];
}

interface SalesData {
  month: string;
  sales: number;
}

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [salesData, setSalesData] = useState<SalesData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDashboardData();
    
    const interval = setInterval(fetchDashboardData, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      try {
        const [statsResponse, salesResponse] = await Promise.all([
          fetch('http://localhost:5000/api/dashboard/stats'),
          fetch('http://localhost:5000/api/dashboard/sales-data')
        ]);

        if (statsResponse.ok && salesResponse.ok) {
          const [statsData, salesData] = await Promise.all([
            statsResponse.json(),
            salesResponse.json()
          ]);

          // Asegurarnos de que todos los valores numéricos sean números
          const processedStats = {
            ...statsData,
            totalProducts: Number(statsData.totalProducts) || 0,
            totalValue: Number(statsData.totalValue) || 0,
            avgPrice: Number(statsData.avgPrice) || 0,
            mostExpensive: statsData.mostExpensive ? {
              ...statsData.mostExpensive,
              price: Number(statsData.mostExpensive.price) || 0
            } : null,
            cheapest: statsData.cheapest ? {
              ...statsData.cheapest,
              price: Number(statsData.cheapest.price) || 0
            } : null,
            recentProducts: statsData.recentProducts ? statsData.recentProducts.map((product: any) => ({
              ...product,
              price: Number(product.price) || 0
            })) : []
          };

          setStats(processedStats);
          setSalesData(salesData);
          setError(null);
          return;
        }
      } catch (err) {
        console.log('Error fetching from backend, using mock data');
      }

      // Datos mock para cuando el backend no está disponible
      const mockStats: DashboardStats = {
        totalProducts: 0,
        totalValue: 0,
        avgPrice: 0,
        mostExpensive: null,
        cheapest: null,
        recentProducts: []
      };

      const mockSalesData: SalesData[] = [
        { month: 'Ene', sales: 12500 },
        { month: 'Feb', sales: 18900 },
        { month: 'Mar', sales: 15800 },
        { month: 'Abr', sales: 21700 },
        { month: 'May', sales: 24300 },
        { month: 'Jun', sales: 19500 },
      ];

      setStats(mockStats);
      setSalesData(mockSalesData);
      setError(null);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading dashboard data...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      
      {stats && (
        <>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon total">
                <Package size={24} />
              </div>
              <div className="stat-content">
                <h3>Total Products</h3>
                <p className="stat-value">{stats.totalProducts}</p>
                <p className="stat-desc">Products in inventory</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon value">
                <DollarSign size={24} />
              </div>
              <div className="stat-content">
                <h3>Total Value</h3>
                <p className="stat-value">${stats.totalValue.toFixed(2)}</p>
                <p className="stat-desc">Inventory value</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon avg">
                <TrendingUp size={24} />
              </div>
              <div className="stat-content">
                <h3>Average Price</h3>
                <p className="stat-value">${stats.avgPrice.toFixed(2)}</p>
                <p className="stat-desc">Per product</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon high">
                <BarChart3 size={24} />
              </div>
              <div className="stat-content">
                <h3>Highest Price</h3>
                <p className="stat-value">
                  {stats.mostExpensive ? `$${stats.mostExpensive.price.toFixed(2)}` : '$0.00'}
                </p>
                <p className="stat-desc">{stats.mostExpensive?.name || 'N/A'}</p>
              </div>
            </div>
          </div>

          <div className="dashboard-content">
            <div className="recent-products">
              <h2>Recently Added Products</h2>
              {stats.recentProducts.length === 0 ? (
                <p>No recent products</p>
              ) : (
                <div className="products-list">
                  {stats.recentProducts.map((product) => (
                    <div key={product.id} className="product-item">
                      <div className="product-info">
                        <h4>{product.name}</h4>
                        <p>Added: {new Date(product.createdAt).toLocaleDateString()}</p>
                      </div>
                      <div className="product-price">
                        ${product.price.toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="sales-data">
              <h2>Monthly Sales</h2>
              <div className="sales-chart">
                {salesData.map((item, index) => (
                  <div key={index} className="sales-bar">
                    <div 
                      className="bar-fill" 
                      style={{ height: `${(item.sales / 25000) * 100}%` }}
                    ></div>
                    <span className="bar-label">{item.month}</span>
                    <span className="bar-value">${item.sales.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;