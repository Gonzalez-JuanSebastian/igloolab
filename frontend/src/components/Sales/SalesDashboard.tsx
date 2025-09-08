import React from 'react';
import { TrendingUp, Users, DollarSign, ShoppingCart } from 'lucide-react';
import './SalesDashboard.css';

const SalesDashboard: React.FC = () => {
  // Datos de ejemplo para el dashboard de ventas
  const salesData = {
    totalRevenue: 12543.67,
    totalOrders: 189,
    newCustomers: 34,
    popularProducts: [
      { name: 'Wooden Table', sales: 45, revenue: 8991 },
      { name: 'Leather Chair', sales: 32, revenue: 4798 },
      { name: 'Office Desk', sales: 28, revenue: 4197 },
      { name: 'Bookshelf', sales: 22, revenue: 3298 },
    ]
  };

  return (
    <div className="sales-dashboard">
      <h1>Sales Dashboard</h1>
      
      <div className="sales-stats-grid">
        <div className="stat-card">
          <div className="stat-icon revenue">
            <DollarSign size={24} />
          </div>
          <div className="stat-content">
            <h3>Total Revenue</h3>
            <p className="stat-value">${salesData.totalRevenue.toFixed(2)}</p>
            <p className="stat-trend positive">+12.5% from last month</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orders">
            <ShoppingCart size={24} />
          </div>
          <div className="stat-content">
            <h3>Total Orders</h3>
            <p className="stat-value">{salesData.totalOrders}</p>
            <p className="stat-trend positive">+8.3% from last month</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon customers">
            <Users size={24} />
          </div>
          <div className="stat-content">
            <h3>New Customers</h3>
            <p className="stat-value">{salesData.newCustomers}</p>
            <p className="stat-trend positive">+5.2% from last month</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon trend">
            <TrendingUp size={24} />
          </div>
          <div className="stat-content">
            <h3>Conversion Rate</h3>
            <p className="stat-value">4.7%</p>
            <p className="stat-trend positive">+1.2% from last month</p>
          </div>
        </div>
      </div>

      <div className="sales-content">
        <div className="popular-products">
          <h2>Popular Products</h2>
          <div className="products-list">
            {salesData.popularProducts.map((product, index) => (
              <div key={index} className="product-item">
                <div className="product-info">
                  <h4>{product.name}</h4>
                  <p>{product.sales} units sold</p>
                </div>
                <div className="product-revenue">
                  ${product.revenue.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon">🛒</div>
              <div className="activity-content">
                <p>New order #1234 placed</p>
                <span className="activity-time">2 minutes ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">💰</div>
              <div className="activity-content">
                <p>Payment received for order #1233</p>
                <span className="activity-time">15 minutes ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">👤</div>
              <div className="activity-content">
                <p>New customer registration</p>
                <span className="activity-time">1 hour ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">📦</div>
              <div className="activity-content">
                <p>Order #1232 shipped</p>
                <span className="activity-time">2 hours ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesDashboard;