import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import CategoryArcNav from '@/components/CategoryArcNav';

interface Ride {
  id: number;
  name: string;
  description: string;
  location: string;
  imageUrl: string;
  category: 'Land' | 'Water' | 'Kids';
}

const RideSelection = () => {
  const [activeCategory, setActiveCategory] = useState("Land");

  const rides: Ride[] = [
    // LAND RIDES
    {
      id: 1,
      name: "Kangaroo",
      description: "A safe freefall with a tall & deep pool",
      location: "Bengaluru",
      imageUrl: "https://picsum.photos/200/300?random=1",
      category: "Land",
    },
    {
      id: 2,
      name: "Mini Coco Cup",
      description: "Spin around in a gigantic cup placed on",
      location: "Bengaluru",
      imageUrl: "https://picsum.photos/200/300?random=2",
      category: "Land",
    },
    {
      id: 3,
      name: "Carousel",
      description: "Gallop around on colourful horses",
      location: "Hyderabad",
      imageUrl: "https://picsum.photos/200/300?random=3",
      category: "Land",
    },
    {
      id: 4,
      name: "Crazy Cars",
      description: "Dash and crash into your friends' cars",
      location: "Bhubaneswar",
      imageUrl: "https://picsum.photos/200/300?random=4",
      category: "Land",
    },
    {
      id: 5,
      name: "Pony Train",
      description: "Hop onto a chariot-pulled pony through",
      location: "Kochi",
      imageUrl: "https://picsum.photos/200/300?random=5",
      category: "Land",
    },
    {
      id: 6,
      name: "Jungle Safari",
      description: "An adventurous ride through animatronic wildlife",
      location: "Delhi",
      imageUrl: "https://picsum.photos/200/300?random=6",
      category: "Land",
    },
    {
      id: 7,
      name: "Thunder Drop",
      description: "A thrilling vertical drop from dizzying heights",
      location: "Pune",
      imageUrl: "https://picsum.photos/200/300?random=7",
      category: "Land",
    },
    {
      id: 8,
      name: "Pirate Ship",
      description: "A swinging ship that gives a stomach-lurching thrill",
      location: "Jaipur",
      imageUrl: "https://picsum.photos/200/300?random=8",
      category: "Land",
    },
    {
      id: 9,
      name: "Mine Train Coaster",
      description: "Speed through tunnels and wild tracks",
      location: "Chennai",
      imageUrl: "https://picsum.photos/200/300?random=9",
      category: "Land",
    },
    {
      id: 10,
      name: "Sky Glider",
      description: "Float high above the park for a scenic overview",
      location: "Amritsar",
      imageUrl: "https://picsum.photos/200/300?random=10",
      category: "Land",
    },
  
    // WATER RIDES
    {
      id: 11,
      name: "Aqua Loop",
      description: "Experience a heart-racing loop slide",
      location: "Mumbai",
      imageUrl: "https://picsum.photos/200/300?random=11",
      category: "Water",
    },
    {
      id: 12,
      name: "Lazy River",
      description: "Float along a scenic, slow-moving trail",
      location: "Chandigarh",
      imageUrl: "https://picsum.photos/200/300?random=12",
      category: "Water",
    },
    {
      id: 13,
      name: "Storm Surge",
      description: "Ride the waves and whirlpools in this fast flume",
      location: "Goa",
      imageUrl: "https://picsum.photos/200/300?random=13",
      category: "Water",
    },
    {
      id: 14,
      name: "Volcano Vortex",
      description: "Twist and turn inside a dark, fiery tunnel",
      location: "Nagpur",
      imageUrl: "https://picsum.photos/200/300?random=14",
      category: "Water",
    },
    {
      id: 15,
      name: "Wave Pool",
      description: "Swim in tides and enjoy real beach vibes",
      location: "Surat",
      imageUrl: "https://picsum.photos/200/300?random=15",
      category: "Water",
    },
    {
      id: 16,
      name: "Typhoon Twist",
      description: "A high-speed spiral water slide ride",
      location: "Varanasi",
      imageUrl: "https://picsum.photos/200/300?random=16",
      category: "Water",
    },
    {
      id: 17,
      name: "Rain Dance Arena",
      description: "Groove under synchronized water fountains",
      location: "Ahmedabad",
      imageUrl: "https://picsum.photos/200/300?random=17",
      category: "Water",
    },
    {
      id: 18,
      name: "Free Fall Splash",
      description: "Drop vertically into a deep splash zone",
      location: "Lucknow",
      imageUrl: "https://picsum.photos/200/300?random=18",
      category: "Water",
    },
    {
      id: 19,
      name: "Family Raft Slide",
      description: "Enjoy a fun group ride through water tunnels",
      location: "Indore",
      imageUrl: "https://picsum.photos/200/300?random=19",
      category: "Water",
    },
    {
      id: 20,
      name: "Tunnel Plunge",
      description: "Dark enclosed ride with unexpected twists",
      location: "Bhopal",
      imageUrl: "https://picsum.photos/200/300?random=20",
      category: "Water",
    },
  
    // KIDS RIDES
    {
      id: 21,
      name: "Magic Tea Cups",
      description: "Spin and swirl in bright oversized teacups",
      location: "Ahmedabad",
      imageUrl: "https://picsum.photos/200/300?random=21",
      category: "Kids",
    },
    {
      id: 22,
      name: "Ball Pit Funhouse",
      description: "A multicolored ball pit with slides and tunnels",
      location: "Indore",
      imageUrl: "https://picsum.photos/200/300?random=22",
      category: "Kids",
    },
    {
      id: 23,
      name: "Mini Bumper Boats",
      description: "Bump and splash your way through kiddie fun",
      location: "Lucknow",
      imageUrl: "https://picsum.photos/200/300?random=23",
      category: "Kids",
    },
    {
      id: 24,
      name: "Tiny Train Express",
      description: "A miniature train that takes kids around the park",
      location: "Kolkata",
      imageUrl: "https://picsum.photos/200/300?random=24",
      category: "Kids",
    },
    {
      id: 25,
      name: "Kiddie Carousel",
      description: "Gentle rotating ride with animal figures",
      location: "Bengaluru",
      imageUrl: "https://picsum.photos/200/300?random=25",
      category: "Kids",
    },
    {
      id: 26,
      name: "Rocket Racers",
      description: "Mini spaceship ride with soft launches",
      location: "Hyderabad",
      imageUrl: "https://picsum.photos/200/300?random=26",
      category: "Kids",
    },
    {
      id: 27,
      name: "Jumping Frogs",
      description: "Bouncy frog-shaped seats jumping up & down",
      location: "Mumbai",
      imageUrl: "https://picsum.photos/200/300?random=27",
      category: "Kids",
    },
    {
      id: 28,
      name: "Fairy Wheel",
      description: "A tiny version of the giant wheel for young ones",
      location: "Chennai",
      imageUrl: "https://picsum.photos/200/300?random=28",
      category: "Kids",
    },
    {
      id: 29,
      name: "Candy Coaster",
      description: "Soft-turning rollercoaster with candy decor",
      location: "Noida",
      imageUrl: "https://picsum.photos/200/300?random=29",
      category: "Kids",
    },
    {
      id: 30,
      name: "Bubble Blaster",
      description: "Ride through a stream of bubbles and laughter",
      location: "Patna",
      imageUrl: "https://picsum.photos/200/300?random=30",
      category: "Kids",
    }
  ];
  

  const filteredRides = rides.filter((ride) => ride.category === activeCategory);

  return (
    <div className="min-h-screen pt-16 bg-[#171f38]">
      <Header />

      <div className="relative pb-16">
        {/* Category Side Nav */}
        <CategoryArcNav active={activeCategory} onSelect={setActiveCategory} />

        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-20">
          <h1 className="text-6xl ml-56  md:text-8xl font-bold text-white text-center mt-36 mb-12">
            OUR ICONIC RIDES
          </h1>

          <Carousel className="relative ml-80">
            <CarouselContent className="-ml-6 transition-transform ease-linear duration-150">
              {filteredRides.map((ride) => (
                <CarouselItem
                  key={ride.id}
                  className="pl-4 sm:basis-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className="relative flex flex-col bg-white rounded-lg shadow-lg overflow-hidden h-full hover:scale-[1.02] transition-all duration-300">
                    <div className="h-148 w-full overflow-hidden">
                      <img
                        src={ride.imageUrl}
                        alt={ride.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://wonderla.com/images/rides/placeholder.jpg';
                        }}
                      />
                    </div>

                    <div className="bottom-1 text-white absolute p-4 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-1">{ride.name}</h3>
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
