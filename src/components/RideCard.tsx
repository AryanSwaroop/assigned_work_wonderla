import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';

export interface Ride {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  status: 'Open' | 'Closed' | 'Maintenance';
  category: string;
  waitTime?: number;
  recommended?: boolean;
  location?: string;
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

  const isDisabled = ride.status !== 'Open';

  return (
    <div className={`relative rounded-lg overflow-hidden shadow-md cursor-pointer max-w-sm`} style={{ aspectRatio: '3 / 4' }}>
      {/* Ride Image */}
      <img
        src={ride.imageUrl}
        alt={ride.name}
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white">
        <h3 className="text-xl font-bold mb-1 line-clamp-1">{ride.name}</h3>
        {ride.location && (
          <p className="text-sm opacity-80 mb-1">{ride.location}</p>
        )}
        <p className="text-sm opacity-80 mb-3 line-clamp-3">{ride.description}</p>
        
        <button
          className="bg-yellow-400 hover:bg-yellow-500 font-bold py-2 rounded w-full"
          type="button"
        >
          RIDE DETAILS
        </button>
      </div>

      {/* Checkbox - positioned top right */}
      <div className="absolute top-3 right-3 bg-black bg-opacity-50 rounded p-1">
        <Checkbox
          id={`ride-${ride.id}`}
          disabled={isDisabled}
          checked={selected}
          onCheckedChange={handleToggle}
          className="data-[state=checked]:bg-yellow-400 data-[state=checked]:border-yellow-400"
        />
      </div>
    </div>
  );
};

export default RideCard;
