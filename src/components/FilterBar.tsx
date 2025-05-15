
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface FilterBarProps {
  categories: string[];
  onCategoryChange: (category: string) => void;
  onSearchChange: (search: string) => void;
  selectedCategory: string;
}

const FilterBar: React.FC<FilterBarProps> = ({ 
  categories, 
  onCategoryChange, 
  onSearchChange,
  selectedCategory 
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearchChange(query);
  };

  return (
    <div className="bg-white shadow-sm py-3 sticky top-14 z-10 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="relative mb-3">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search rides by name"
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-[#0066b3] focus:border-[#0066b3] outline-none text-sm"
          />
        </div>
        <div className="flex overflow-x-auto pb-1 gap-2 no-scrollbar">
          <Button
            size="sm"
            className={`rounded-full text-sm whitespace-nowrap py-1 px-4 ${
              selectedCategory === 'All'
                ? 'bg-[#0066b3] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => onCategoryChange('All')}
          >
            All Rides
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              size="sm"
              className={`rounded-full text-sm whitespace-nowrap py-1 px-4 ${
                selectedCategory === category
                  ? 'bg-[#0066b3] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
