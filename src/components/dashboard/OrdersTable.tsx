import React from 'react';
import { mockOrders } from '../../data/mockOrders';
import { StatusBadge } from '../common/StatusBadge';

export const OrdersTable: React.FC = () => {
  const displayOrders = mockOrders.slice(0, 5); // v1.4 shows fewer

  return (
    <div className="surface-card w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-base">Recent Orders</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="data-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {displayOrders.map(order => (
              <tr key={order.id} className="cursor-pointer">
                <td className="font-medium text-sm text-text-primary">{order.id}</td>
                <td>
                  <div className="flex flex-col">
                    <span className="text-sm text-text-primary">{order.customerName}</span>
                  </div>
                </td>
                <td className="text-sm text-text-secondary">{order.productName}</td>
                <td className="text-sm text-text-muted">
                  {new Date(order.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                </td>
                <td className="text-sm font-semibold text-text-primary">${order.amount.toFixed(2)}</td>
                <td>
                  <StatusBadge status={order.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
