export const mockAnalytics = {
  v1: {
    totalRevenue: 128430,
    revenueGrowth: 12.4,
    totalOrders: 1284,
    ordersGrowth: 8.2,
    activeCustomers: 8492,
    customersGrowth: 5.7,
    conversionRate: 4.82,
    conversionGrowth: 0.6
  },
  revenueChartData: [
    { date: 'Oct 10', current: 8200, previous: 7100 },
    { date: 'Oct 11', current: 8900, previous: 7300 },
    { date: 'Oct 12', current: 9500, previous: 7600 },
    { date: 'Oct 13', current: 10200, previous: 8100 },
    { date: 'Oct 14', current: 9800, previous: 8500 },
    { date: 'Oct 15', current: 11500, previous: 8900 },
    { date: 'Oct 16', current: 12400, previous: 9200 },
    { date: 'Oct 17', current: 13100, previous: 9800 },
    { date: 'Oct 18', current: 12800, previous: 9500 },
    { date: 'Oct 19', current: 14200, previous: 10100 },
    { date: 'Oct 20', current: 15600, previous: 10800 },
    { date: 'Oct 21', current: 14900, previous: 11200 },
    { date: 'Oct 22', current: 16500, previous: 11800 },
    { date: 'Oct 23', current: 18200, previous: 12500 }
  ],
  forecastData: [ // v2.0 specific projection
    { date: 'Oct 24', predicted: 18500, lowerBound: 17800, upperBound: 19200 },
    { date: 'Oct 25', predicted: 19100, lowerBound: 18200, upperBound: 20000 },
    { date: 'Oct 26', predicted: 19800, lowerBound: 18700, upperBound: 20900 },
    { date: 'Oct 27', predicted: 20500, lowerBound: 19200, upperBound: 21800 },
    { date: 'Oct 28', predicted: 21200, lowerBound: 19600, upperBound: 22800 },
  ]
};
