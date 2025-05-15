
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-[#171f38]">
      <Header />
      
      <div className="flex-1 container mx-auto px-4 flex flex-col items-center justify-center py-16 mt-16">
        <div className="bg-[#0066b3]/20 p-8 rounded-2xl backdrop-blur-sm max-w-2xl w-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Welcome to Wonderla</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-lg mx-auto mb-10">
            Discover India's largest and most popular amusement parks with thrilling rides and attractions for all ages
          </p>
          <Button
            onClick={() => navigate('/ride-selection')}
            className="bg-[#FFD100] hover:bg-[#FFD100]/90 text-[#171f38] px-8 py-6 rounded-full text-lg font-bold flex items-center justify-center gap-2 w-full md:w-auto"
          >
            <span>Explore Our Rides</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-[#0066b3] to-[#0088cc] py-12 mt-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Experience the Ultimate Thrill</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-white">
              <div className="bg-white/20 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Land Rides</h3>
              <p className="text-white/80">Experience thrilling adventures with our exciting land rides</p>
            </div>
            <div className="text-white">
              <div className="bg-white/20 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Water Rides</h3>
              <p className="text-white/80">Make a splash with our refreshing water attractions</p>
            </div>
            <div className="text-white">
              <div className="bg-white/20 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Kids Rides</h3>
              <p className="text-white/80">Safe and fun experiences designed for our youngest visitors</p>
            </div>
          </div>
          <Button
            onClick={() => navigate('/ride-selection')}
            className="bg-[#FFD100] hover:bg-[#FFD100]/90 text-[#171f38] px-8 py-3 rounded-full text-lg font-bold mt-8"
          >
            Book Tickets Now
          </Button>
        </div>
      </div>
      
      <Footer totalSelected={0} />
    </div>
  );
};

export default Index;
