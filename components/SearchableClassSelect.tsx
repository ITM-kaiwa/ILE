'use client';

import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

interface SearchableClassSelectProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
}

export const SearchableClassSelect: React.FC<SearchableClassSelectProps> = ({
  value,
  onChange,
  className = '',
  placeholder = 'Search or select class...',
}) => {
  const [classes, setClasses] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/classes')
      .then(res => res.json())
      .then(data => {
        if (data.classes) {
          setClasses(data.classes);
          // If the current value is empty and classes are loaded, we shouldn't auto-select to force user choice
          // or we can auto-select the first one. Let's leave it as is so user must select or it defaults from parent.
        }
      })
      .catch(err => console.error('Failed to fetch classes:', err))
      .finally(() => setLoading(false));
  }, []);

  const filteredClasses = classes.filter(c => 
    c.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-slate-400" />
        </div>
        <input
          type="text"
          placeholder="クラス名を検索... / Tìm kiếm tên lớp..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 bg-slate-50"
        />
      </div>
      
      {loading ? (
        <div className="w-full px-4 py-2 rounded-xl border border-slate-200 text-sm bg-slate-50 text-slate-500 animate-pulse">
          Loading classes...
        </div>
      ) : (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 bg-white"
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {filteredClasses.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
          {filteredClasses.length === 0 && (
            <option value="" disabled>No classes found</option>
          )}
        </select>
      )}
    </div>
  );
};
