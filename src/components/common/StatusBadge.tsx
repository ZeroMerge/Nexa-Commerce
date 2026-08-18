import React from 'react';
import { clsx } from 'clsx';
import type { OrderStatus } from '../../data/mockOrders';
import type { StockStatus } from '../../data/mockProducts';

type BadgeType = OrderStatus | StockStatus | 'Info' | 'Warning' | 'New' | 'VIP' | 'Regular';

interface StatusBadgeProps {
  status: BadgeType;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className }) => {
  let badgeColorClass = 'badge-neutral';

  switch (status) {
    case 'Completed':
    case 'Healthy':
    case 'Shipped':
      badgeColorClass = 'badge-green';
      break;
    case 'Processing':
    case 'Low Stock':
    case 'Warning':
      badgeColorClass = 'badge-amber';
      break;
    case 'Pending':
    case 'Info':
    case 'New':
    case 'VIP':
      badgeColorClass = 'badge-blue';
      break;
    case 'Critical':
      badgeColorClass = 'badge-red';
      break;
    default:
      badgeColorClass = 'badge-neutral';
  }

  return (
    <span className={clsx('badge', badgeColorClass, className)}>
      {status}
    </span>
  );
};
