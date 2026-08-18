import React from 'react';
import { mockAnalytics } from '../../data/mockAnalytics';

export const RevenueChart: React.FC = () => {
  const data = mockAnalytics.revenueChartData;
  const maxVal = Math.max(...data.map(d => Math.max(d.current, d.previous)));
  
  // SVG Dimensions
  const width = 800;
  const height = 240;
  const paddingX = 40;
  const paddingY = 20;
  
  const drawWidth = width - paddingX * 2;
  const drawHeight = height - paddingY * 2;
  
  const getX = (index: number) => paddingX + (index / (data.length - 1)) * drawWidth;

  return (
    <div className="surface-card w-full mt-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-base font-bold text-text-primary">Product sales</h3>
        <div className="flex items-center gap-4 text-sm font-medium">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary-blue"></span>
            <span className="text-text-secondary">Gross margin</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary-orange"></span>
            <span className="text-text-secondary">Revenue</span>
          </div>
        </div>
      </div>
      
      <div className="w-full overflow-x-auto">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full min-w-[600px] h-auto text-xs">
          {/* Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
            const y = height - paddingY - ratio * drawHeight;
            return (
              <g key={i}>
                <line x1={paddingX} y1={y} x2={width - paddingX} y2={y} stroke="var(--border-color)" strokeWidth="1" strokeDasharray={ratio === 0 ? "" : "4 4"} />
                <text x={paddingX - 10} y={y + 4} textAnchor="end" fill="var(--text-muted)">
                  {Math.round((ratio * maxVal) / 1000)} K
                </text>
              </g>
            );
          })}

          {/* Bar Chart Representation for "Flup" look */}
          {data.map((d, i) => {
            const x = getX(i);
            const currentH = (d.current / maxVal) * drawHeight;
            const previousH = (d.previous / maxVal) * drawHeight;
            return (
              <g key={i} className="group cursor-crosshair">
                <rect x={x - 6} y={height - paddingY - previousH} width="4" height={previousH} fill="var(--primary-blue)" rx="2" />
                <rect x={x + 2} y={height - paddingY - currentH} width="4" height={currentH} fill="var(--primary-orange)" rx="2" />
                
                {/* Hover target */}
                <rect x={x - 15} y={0} width="30" height={height} fill="transparent" />
                <text x={x} y={height - 4} textAnchor="middle" fill="var(--text-muted)" className="opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                  {d.date}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};
