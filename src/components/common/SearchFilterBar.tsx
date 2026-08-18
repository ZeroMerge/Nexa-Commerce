import React from 'react';
import { Search, Filter } from 'lucide-react';
import { clsx } from 'clsx';

interface SearchFilterBarProps {
  placeholder?: string;
  filters?: string[];
  activeFilter?: string;
  onFilterChange?: (filter: string) => void;
  onSearch?: (term: string) => void;
}

export const SearchFilterBar: React.FC<SearchFilterBarProps> = ({
  placeholder = 'Search...',
  filters = [],
  activeFilter,
  onFilterChange,
  onSearch
}) => {
  return (
    <div className="flex items-center justify-between gap-4 mb-4">
      <div className="flex-1 max-w-md relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={16} />
        <input 
          type="text" 
          placeholder={placeholder}
          className="w-full bg-surface-elevated border border-border-color rounded-md py-2 pl-9 pr-4 text-sm focus:outline-none focus-visible:outline-2 focus-visible:outline-border-focus"
          onChange={(e) => onSearch && onSearch(e.target.value)}
        />
      </div>

      {filters.length > 0 && (
        <div className="flex items-center gap-2">
          <Filter className="text-muted mr-2" size={16} />
          <div className="flex bg-surface-elevated rounded-md border border-border-color p-1">
            {filters.map(filter => (
              <button
                key={filter}
                className={clsx(
                  'px-3 py-1 text-sm rounded-sm transition-colors',
                  activeFilter === filter ? 'bg-surface-subtle text-primary font-medium' : 'text-secondary hover:text-primary hover:bg-surface-subtle'
                )}
                onClick={() => onFilterChange && onFilterChange(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
