import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, MapPin, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu';

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const locations = ['KOCHI', 'BENGALURU', 'HYDERABAD', 'BHUBANESHWAR'];

  return (
    <>
      <header className="fixed rounded-md top-10 left-10 right-10 bg-white z-50 shadow">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://wonderla.com/images/logo.png" 
              alt="Wonderla" 
              className="h-10 cursor-pointer"
              onClick={() => navigate('/')}
            />
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="flex items-center text-gray-600 font-medium uppercase bg-transparent hover:bg-transparent hover:text-[#0066b3] p-0">
                    <MapPin className="h-5 w-5 mr-1 text-gray-500" />
                    LOCATIONS
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[200px]">
                    <ul className="grid w-[200px] gap-1 p-1">
                      {locations.map((location) => (
                        <li key={location} className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
                          <img 
                            src={`https://placehold.co/32x32/png?text=${location.charAt(0)}`} 
                            alt={location}
                            className="w-8 h-8 rounded mr-2"
                          />
                          <span>{location}</span>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="text-gray-600 font-medium uppercase cursor-pointer hover:text-[#0066b3]">OFFERS</div>
            <div className="text-[#0066b3] font-bold uppercase cursor-pointer">RIDES</div>
            <div className="text-gray-600 font-medium uppercase cursor-pointer hover:text-[#0066b3]">RESTAURANTS</div>
            <div className="text-gray-600 font-medium uppercase cursor-pointer hover:text-[#0066b3]">EVENTS</div>
          </div>

          <div className="flex items-center gap-4">
            <Button className="bg-[#ffd100] hover:bg-[#ffc000] text-[#1A1F2C] font-bold rounded-md hidden md:flex uppercase">
              BOOK TICKETS
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-[#0066b3] hidden md:flex"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-[998]"
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Sliding Menu */}
            <motion.div
              className="fixed top-0 right-0 w-full max-w-sm h-full bg-white shadow-lg z-[999]"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="p-5 border-b flex items-center justify-between">
                <img src="https://wonderla.com/images/logo.png" alt="Wonderla" className="h-8" />
                <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                  <X className="h-6 w-6 text-gray-600" />
                </Button>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-sm text-gray-400 uppercase">Timings And Guidelines</h3>

                <div className="space-y-3">
                  <button className="w-full bg-[#ffd100] text-[#1A1F2C] font-semibold p-3 rounded-md text-left">
                    Group Booking
                  </button>
                  <button className="w-full bg-[#3758f9] text-white font-semibold p-3 rounded-md text-left">
                    Tour Operator Portal
                  </button>
                  <button className="w-full bg-[#ffd100] text-[#1A1F2C] font-semibold p-3 rounded-md text-left">
                    Partner With Us
                  </button>
                </div>

                <hr />

                <div className="space-y-2">
                  <p className="text-gray-800 font-semibold">About Us</p>
                  <p className="text-gray-800 font-semibold">Quick Links</p>
                  <ul className="ml-4 text-sm space-y-1 text-gray-600">
                    <li>Restaurants</li>
                    <li>Merchandise</li>
                    <li>Events</li>
                  </ul>
                  <p className="text-gray-800 font-semibold">Contact Us</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
