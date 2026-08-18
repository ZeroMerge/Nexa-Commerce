export interface Insight {
  id: string;
  type: 'opportunity' | 'warning' | 'info';
  message: string;
  metric?: string;
  actionLabel?: string;
}

export const mockInsights: Insight[] = [
  {
    id: 'INS-01',
    type: 'opportunity',
    message: 'Running shoes are generating 24% more revenue this week. Consider increasing inventory before the weekend.',
    metric: '+24%',
    actionLabel: 'Review Inventory'
  },
  {
    id: 'INS-02',
    type: 'warning',
    message: 'High cart abandonment detected in EMEA checkout funnel. Conversion dropped 2.1% in the last 48 hours.',
    metric: '-2.1%',
    actionLabel: 'Analyze Funnel'
  },
  {
    id: 'INS-03',
    type: 'info',
    message: 'Aero Backpack repeat purchases spiked +38% following the new email campaign.',
    metric: '+38%',
    actionLabel: 'View Campaign'
  }
];
