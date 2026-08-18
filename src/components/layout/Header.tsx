import React from 'react';
import { Calendar } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="app-header bg-transparent pt-8 pb-4">
      <div className="flex items-center flex-1">
        <h2 className="text-h1 font-bold text-text-primary">Dashboard</h2>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 text-xs font-semibold text-text-secondary bg-surface-color border border-border-color px-3 py-1.5 rounded-md hover:bg-surface-subtle transition-colors shadow-sm">
          <Calendar size={14} className="text-text-muted" /> Time period: <span className="text-text-primary">Last 30 days</span>
        </button>
      </div>
    </header>
  );
};
