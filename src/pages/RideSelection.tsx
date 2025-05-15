import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CategoryArcNav from '@/components/CategoryArcNav';

interface Ride {
  id: number;
  name: string;
  description: string;
  location: string;
  imageUrl: string;
}

const RideSelection = () => {
  const [activeCategory, setActiveCategory] = useState('Land');
  
  const rides: Ride[] = [
    {
      id: 1,
      name: "Kangaroo",
      description: "A safe freefall with a tall & deep pool",
      location: "Bengaluru",
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      name: "Mini Coco Cup",
      description: "Spin around in a gigantic cup placed on",
      location: "Bengaluru",
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      name: "Carousel",
      description: "Gallop around on colourful horses like",
      location: "Hyderabad",
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      name: "Crazy Cars",
      description: "Dash and crash into your friends' cars",
      location: "Bhubaneswar",
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      id: 5,
      name: "Pony Train",
      description: "Hop onto a chariot-pulled pony through",
      location: "Kochi",
      imageUrl: "https://picsum.photos/200/300",
    },    
    {
      id: 6,
      name: "Kangaroo",
      description: "A safe freefall with a tall & deep pool",
      location: "Bengaluru",
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      id: 7,
      name: "Mini Coco Cup",
      description: "Spin around in a gigantic cup placed on",
      location: "Bengaluru",
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      id: 8,
      name: "Carousel",
      description: "Gallop around on colourful horses like",
      location: "Hyderabad",
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      id: 9,
      name: "Crazy Cars",
      description: "Dash and crash into your friends' car",
      location: "Bhubaneswar",
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      id: 10,
      name: "Pony Train",
      description: "Hop onto a chariot-pulled pony throug",
      location: "Kochi",
      imageUrl: "https://picsum.photos/200/300",
    }
  ];
  
  const getCountByCategory = (category: string) => {
    switch(category) {
      case 'Land': return 73;
      case 'Water': return 54;
      case 'Kids': return 35;
      default: return 0;
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-[#171f38]">
      <Header />
      
      <div className="relative pb-16">
        {/* Side Navigation with Categories */}
        <CategoryArcNav active={activeCategory} onSelect={setActiveCategory} />
        
        {/* Main Content */}
        <div className="container mx-auto mr-0 px-4 pl-1 md:px-64">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mt-20 mb-10">OUR ICONIC RIDES</h1>
          
          {/* Carousel */}
          <Carousel className="relative">
            <CarouselContent className="-ml-6">
              {rides.map((ride) => (
                <CarouselItem key={ride.id} className="pl-4 sm:basis-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="flex flex-col h-full">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={ride.imageUrl} 
                        alt={ride.name} 
                        className="w-full rounded-md h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://wonderla.com/images/rides/placeholder.jpg';
                        }}
                      />
                    </div>
                    
                    <div className="bg-[#0066b3] p-4 flex flex-col h-44">
                      <h3 className="text-xl font-bold text-white mb-1">{ride.name}</h3>
                      <p className="text-sm text-white/75 mb-2">{ride.location}</p>
                      <p className="text-sm text-white/90 mb-4 flex-grow">{ride.description}</p>
                      
                      <Button className="bg-[#FFD100] hover:bg-[#FFD100]/90 text-[#171f38] font-bold rounded w-full mt-auto">
                        RIDE DETAILS
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="absolute top-1/2 -left-4 -translate-y-1/2 h-12 w-12 rounded-full bg-[#FFD100] text-[#171f38] hover:bg-[#FFD100]/90 z-10" />
            <CarouselNext className="absolute top-1/2 -right-4 -translate-y-1/2 h-12 w-12 rounded-full bg-[#FFD100] text-[#171f38] hover:bg-[#FFD100]/90 z-10" />
          </Carousel>
          
          {/* Explore All Button */}
          <div className="flex justify-center mt-16">
            <Button className="bg-[#FFD100] hover:bg-[#FFD100]/90 text-[#171f38] font-bold text-lg py-6 px-12 rounded-full">
              Explore All Rides!
            </Button>
          </div>
        </div>
      </div>
      
      <Footer totalSelected={0} />
    </div>
  );
};

export default RideSelection;
