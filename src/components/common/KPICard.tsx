import React from 'react';
import { clsx } from 'clsx';
import { TrendingUp, TrendingDown, Users } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string | number;
  trend?: number; // percentage
  trendLabel?: string;
  prefix?: string;
  suffix?: string;
  className?: string;
  isForecast?: boolean; // v2.0 specific styling
}

export const KPICard: React.FC<KPICardProps> = ({ title, value, prefix = '', suffix = '', trend }) => {
  const isPositive = trend !== undefined && trend > 0;
  const isNegative = trend !== undefined && trend < 0;

  return (
    <div className="surface-card flex flex-col justify-center">
      <span className="text-xs font-semibold text-text-muted flex items-center gap-2 mb-1">
        <Users size={12} className="text-text-muted" />
        {title}
      </span>
      <div className="flex items-baseline gap-2">
        <span className="text-h1 font-bold tracking-tight text-text-primary">
          {prefix}{value}
        </span>
        {suffix && <span className="text-h3 font-bold text-text-primary">{suffix}</span>}
        {trend !== undefined && (
          <span className={clsx(
            "text-xs font-bold flex items-center ml-1",
            isPositive ? 'text-primary-green' : isNegative ? 'text-primary-red' : 'text-text-secondary'
          )}>
            {isPositive ? <TrendingUp size={12} className="mr-0.5" /> : isNegative ? <TrendingDown size={12} className="mr-0.5" /> : null}
            {isPositive ? '+' : ''}{trend}%
          </span>
        )}
      </div>
    </div>
  );
};
