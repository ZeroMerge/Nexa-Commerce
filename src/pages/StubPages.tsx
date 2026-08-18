import React from 'react';

export const OrdersPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-h2 mb-1">Orders Management</h2>
          <p className="text-secondary text-sm">View and manage all customer orders.</p>
        </div>
      </div>
      <div className="surface-card flex flex-col items-center justify-center py-20">
        <h3 className="text-lg font-medium mb-2">Orders Module Loading</h3>
        <p className="text-secondary text-sm">Please navigate to Overview dashboard for operations.</p>
      </div>
    </div>
  );
};

export const ProductsPage: React.FC = () => (
  <div className="flex flex-col gap-6">
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-h2 mb-1">Product Catalog</h2>
        <p className="text-secondary text-sm">Manage inventory and product details.</p>
      </div>
    </div>
    <div className="surface-card py-20 flex justify-center text-secondary text-sm">Product module not fully implemented.</div>
  </div>
);

export const CustomersPage: React.FC = () => (
  <div className="flex flex-col gap-6">
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-h2 mb-1">Customer Directory</h2>
        <p className="text-secondary text-sm">View customer profiles and tier information.</p>
      </div>
    </div>
    <div className="surface-card py-20 flex justify-center text-secondary text-sm">Customer module not fully implemented.</div>
  </div>
);

export const AnalyticsPage: React.FC = () => (
  <div className="flex flex-col gap-6">
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-h2 mb-1">Advanced Analytics</h2>
        <p className="text-secondary text-sm">Deep dive into operational metrics.</p>
      </div>
    </div>
    <div className="surface-card py-20 flex justify-center text-secondary text-sm">Analytics module not fully implemented.</div>
  </div>
);
