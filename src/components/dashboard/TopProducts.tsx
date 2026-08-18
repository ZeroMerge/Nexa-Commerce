import React from 'react';
import { mockProducts } from '../../data/mockProducts';

export const TopProducts: React.FC = () => {
  // Sort by revenue descending and take top 4
  const topProducts = [...mockProducts].sort((a, b) => b.revenue - a.revenue).slice(0, 4);

  return (
    <div className="surface-card w-full">
      <h3 className="font-semibold text-base mb-4">Top Products</h3>
      <div className="flex flex-col gap-4">
        {topProducts.map(product => (
          <div key={product.id} className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-medium">{product.name}</span>
              <span className="text-xs text-secondary">{product.unitsSold} units sold</span>
            </div>
            <div className="text-sm font-semibold text-primary">
              ${product.revenue.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
