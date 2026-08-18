export interface Customer {
  id: string;
  name: string;
  email: string;
  location: string;
  ordersCount: number;
  totalSpent: number;
  lastActive: string;
  tier: 'VIP' | 'Regular' | 'New';
}

export const mockCustomers: Customer[] = [
  { id: 'CUST-8492', name: 'Sarah Johnson', email: 'sarah.j@example.com', location: 'New York, US', ordersCount: 14, totalSpent: 2450.00, lastActive: '2 min ago', tier: 'VIP' },
  { id: 'CUST-8493', name: 'Michael Chen', email: 'mchen88@example.com', location: 'San Francisco, US', ordersCount: 3, totalSpent: 425.50, lastActive: '12 min ago', tier: 'Regular' },
  { id: 'CUST-8494', name: 'Emma Wilson', email: 'emma.w@example.com', location: 'London, UK', ordersCount: 1, totalSpent: 145.00, lastActive: '34 min ago', tier: 'New' },
  { id: 'CUST-8495', name: 'David Kim', email: 'dkim@example.com', location: 'Seoul, KR', ordersCount: 8, totalSpent: 1240.00, lastActive: '1 hour ago', tier: 'Regular' },
  { id: 'CUST-8496', name: 'Olivia Davis', email: 'olivia.d@example.com', location: 'Sydney, AU', ordersCount: 22, totalSpent: 5680.00, lastActive: '2 hours ago', tier: 'VIP' },
];
