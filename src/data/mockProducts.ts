export type StockStatus = 'Healthy' | 'Low Stock' | 'Critical';

export interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
  status: StockStatus;
  unitsSold: number;
  revenue: number;
  riskScore?: number; // v2.0
  reorderRecommendation?: number; // v2.0
}

export const mockProducts: Product[] = [
  { id: 'PRD-001', name: 'Air Max Pro', sku: 'SH-AMP-01', price: 189.00, stock: 45, status: 'Low Stock', unitsSold: 342, revenue: 64638, riskScore: 78, reorderRecommendation: 150 },
  { id: 'PRD-002', name: 'Runner X', sku: 'SH-RNX-02', price: 145.00, stock: 12, status: 'Critical', unitsSold: 512, revenue: 74240, riskScore: 92, reorderRecommendation: 300 },
  { id: 'PRD-003', name: 'Urban Essential Hoodie', sku: 'AP-UEH-01', price: 85.50, stock: 320, status: 'Healthy', unitsSold: 890, revenue: 76095, riskScore: 12, reorderRecommendation: 0 },
  { id: 'PRD-004', name: 'Aero Backpack', sku: 'AC-ABP-04', price: 120.00, stock: 85, status: 'Healthy', unitsSold: 215, revenue: 25800, riskScore: 34, reorderRecommendation: 50 },
  { id: 'PRD-005', name: 'Studio Wireless Headphones', sku: 'EL-SWH-01', price: 250.00, stock: 24, status: 'Low Stock', unitsSold: 128, revenue: 32000, riskScore: 65, reorderRecommendation: 100 },
  { id: 'PRD-006', name: 'Apex Smartwatch', sku: 'EL-ASW-02', price: 320.00, stock: 8, status: 'Critical', unitsSold: 95, revenue: 30400, riskScore: 88, reorderRecommendation: 50 },
];
