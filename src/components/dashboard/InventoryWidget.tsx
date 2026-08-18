import React from 'react';
import { mockProducts } from '../../data/mockProducts';
import { StatusBadge } from '../common/StatusBadge';

export const InventoryWidget: React.FC = () => {
  // Filter only items that need attention
  const inventoryIssues = mockProducts.filter(p => p.status !== 'Healthy').slice(0, 4);

  return (
    <div className="surface-card w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-base">Inventory Alerts</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="data-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Stock</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {inventoryIssues.map(product => (
              <tr key={product.id}>
                <td className="text-sm font-medium">{product.name}</td>
                <td className="text-sm">{product.stock}</td>
                <td><StatusBadge status={product.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
