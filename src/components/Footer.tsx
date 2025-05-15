
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface FooterProps {
  totalSelected: number;
}

const Footer: React.FC<FooterProps> = ({ totalSelected }) => {
  const navigate = useNavigate();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#171f38] border-t border-gray-800 py-6 px-4 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-xs text-gray-400">© {currentYear} Wonderla Holidays Limited. All Rights Reserved.</p>
        </div>

        <div className="flex gap-4">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-[#0066b3]/20"
          >
            Privacy Policy
          </Button>
          <Button 
            variant="ghost" 
            className="text-white hover:bg-[#0066b3]/20"
          >
            Terms & Conditions
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
