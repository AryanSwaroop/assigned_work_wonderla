
import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';

export interface Ride {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  status: 'Open' | 'Closed' | 'Maintenance';
  category: string;
  waitTime?: number;
  recommended?: boolean;
}

interface RideCardProps {
  ride: Ride;
  onSelect: (id: number, selected: boolean) => void;
}

const RideCard: React.FC<RideCardProps> = ({ ride, onSelect }) => {
  const [selected, setSelected] = useState(false);

  const handleToggle = () => {
    const newSelected = !selected;
    setSelected(newSelected);
    onSelect(ride.id, newSelected);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Closed':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Maintenance':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const isDisabled = ride.status !== 'Open';

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${isDisabled ? 'opacity-80' : ''}`}>
      <div className="relative">
        <img 
          src={ride.imageUrl} 
          alt={ride.name} 
          className="w-full h-48 object-cover"
        />
        {ride.waitTime !== undefined && (
          <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white text-xs py-1 px-2 rounded flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            <span>{ride.waitTime} min</span>
          </div>
        )}
        {ride.recommended && (
          <div className="absolute top-3 left-3 bg-[#ff9933] text-white text-xs py-1 px-2 rounded">
            Recommended
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-[#0066b3] line-clamp-1">{ride.name}</h3>
          <Badge className={`${getStatusColor(ride.status)} font-normal text-xs border`}>
            {ride.status}
          </Badge>
        </div>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{ride.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{ride.category}</span>
          <div className="flex items-center">
            <Checkbox
              id={`ride-${ride.id}`}
              disabled={isDisabled}
              checked={selected}
              onCheckedChange={handleToggle}
              className="mr-2 data-[state=checked]:bg-[#0066b3] data-[state=checked]:border-[#0066b3]"
            />
            <label 
              htmlFor={`ride-${ride.id}`}
              className={`text-sm font-medium cursor-pointer select-none ${isDisabled ? 'text-gray-400' : 'text-gray-700'}`}
            >
              Select
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideCard;
