'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronDown } from 'lucide-react';

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
  placeholder = 'クラス名を入力または選択... / Nhập hoặc chọn tên lớp...',
}) => {
  const [classes, setClasses] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/api/classes')
      .then(res => res.json())
      .then(data => {
        if (data.classes) {
          setClasses(data.classes);
        }
      })
      .catch(err => console.error('Failed to fetch classes:', err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredClasses = classes.filter(c => 
    c.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div ref={wrapperRef} className={`relative space-y-1 ${className}`}>
      <div 
        className=""
        onClick={() => setIsOpen(true)}
      >
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder={value || placeholder}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            className="w-full pl-10 pr-10 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 bg-white"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ChevronDown className="h-4 w-4 text-slate-400" />
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-xl shadow-lg max-h-48 overflow-y-auto">
          {loading ? (
            <div className="px-4 py-2 text-sm text-slate-500 animate-pulse">Loading...</div>
          ) : filteredClasses.length > 0 ? (
            filteredClasses.map(c => (
              <div
                key={c}
                onClick={() => {
                  onChange(c);
                  setSearchQuery('');
                  setIsOpen(false);
                }}
                className={`px-4 py-2 text-sm cursor-pointer hover:bg-orange-50 ${value === c ? 'bg-orange-100 text-orange-800 font-medium' : 'text-slate-700'}`}
              >
                {c}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-sm text-slate-500">No classes found</div>
          )}
        </div>
      )}
    </div>
  );
};
