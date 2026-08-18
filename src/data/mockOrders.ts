export type OrderStatus = 'Completed' | 'Processing' | 'Shipped' | 'Pending';

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  productName: string;
  amount: number;
  status: OrderStatus;
  date: string;
}

export const mockOrders: Order[] = [
  { id: 'ORD-1042', customerName: 'Sarah Johnson', customerEmail: 'sarah.j@example.com', productName: 'Air Max Pro', amount: 189.00, status: 'Completed', date: '2023-10-24T10:23:00Z' },
  { id: 'ORD-1043', customerName: 'Michael Chen', customerEmail: 'mchen88@example.com', productName: 'Urban Essential Hoodie', amount: 85.50, status: 'Processing', date: '2023-10-24T11:45:00Z' },
  { id: 'ORD-1044', customerName: 'Emma Wilson', customerEmail: 'emma.w@example.com', productName: 'Runner X', amount: 145.00, status: 'Shipped', date: '2023-10-24T09:12:00Z' },
  { id: 'ORD-1045', customerName: 'David Kim', customerEmail: 'dkim@example.com', productName: 'Aero Backpack', amount: 120.00, status: 'Pending', date: '2023-10-24T14:30:00Z' },
  { id: 'ORD-1046', customerName: 'Olivia Davis', customerEmail: 'olivia.d@example.com', productName: 'Studio Wireless Headphones', amount: 250.00, status: 'Completed', date: '2023-10-23T16:20:00Z' },
  { id: 'ORD-1047', customerName: 'James Wilson', customerEmail: 'j.wilson@example.com', productName: 'Air Max Pro', amount: 189.00, status: 'Processing', date: '2023-10-23T14:10:00Z' },
  { id: 'ORD-1048', customerName: 'Sophia Taylor', customerEmail: 'staylor@example.com', productName: 'Apex Smartwatch', amount: 320.00, status: 'Shipped', date: '2023-10-22T08:45:00Z' },
  { id: 'ORD-1049', customerName: 'Lucas Moore', customerEmail: 'lucas.m@example.com', productName: 'Runner X', amount: 145.00, status: 'Completed', date: '2023-10-22T11:30:00Z' },
];
