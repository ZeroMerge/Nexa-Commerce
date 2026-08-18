import React from 'react';
import { User, Package, CreditCard, Bell, Database } from 'lucide-react';

export const CustomerActivity: React.FC = () => {
  const activities = [
    { id: 1, type: 'order', text: 'Sarah Johnson placed an order', time: '2 min ago', icon: <Package size={14} /> },
    { id: 2, type: 'user', text: 'Michael Chen created an account', time: '12 min ago', icon: <User size={14} /> },
    { id: 3, type: 'shipping', text: 'Order #1042 was shipped', time: '34 min ago', icon: <Package size={14} /> },
    { id: 4, type: 'alert', text: 'Inventory alert triggered for Air Max Pro', time: '1 hr ago', icon: <Bell size={14} /> },
  ];

  return (
    <div className="surface-card w-full">
      <h3 className="font-semibold text-base mb-4">Customer Activity</h3>
      <div className="flex flex-col gap-4">
        {activities.map(act => (
          <div key={act.id} className="flex gap-3">
            <div className="mt-0.5 w-6 h-6 rounded-full bg-surface-elevated border border-border-color flex items-center justify-center text-muted">
              {act.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-sm">{act.text}</span>
              <span className="text-xs text-secondary">{act.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const SystemActivity: React.FC = () => {
  const activities = [
    { id: 1, type: 'db', text: 'Product catalog updated (v2.4.1)', time: '1 hr ago', icon: <Database size={14} /> },
    { id: 2, type: 'payment', text: 'Stripe webhook payment processed', time: '2 hrs ago', icon: <CreditCard size={14} /> },
    { id: 3, type: 'system', text: 'Nightly inventory sync completed', time: '8 hrs ago', icon: <Database size={14} /> },
  ];

  return (
    <div className="surface-card w-full">
      <h3 className="font-semibold text-base mb-4">System Activity</h3>
      <div className="flex flex-col gap-4">
        {activities.map(act => (
          <div key={act.id} className="flex gap-3">
            <div className="mt-0.5 w-6 h-6 rounded-full bg-surface-elevated border border-border-color flex items-center justify-center text-muted">
              {act.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-sm">{act.text}</span>
              <span className="text-xs text-secondary">{act.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
