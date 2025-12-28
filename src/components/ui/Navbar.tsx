import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-20 flex h-16 items-center bg-black px-6">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-green-400 font-bold text-xl">FilmFlex</span>
      </div>  
      
      {/* Nav Links - Centered */}
      <div className="flex-1 flex items-center justify-center space-x-8">
        <a href="/" className="text-gray-300 hover:text-white transition-colors">
          Home
        </a>
        <a href="/about" className="text-gray-300 hover:text-white transition-colors">
          Library
        </a>
        <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
          Reviews
        </a>
      </div>
      
      {/* Search Button + Avatar */}
      <div className="flex items-center gap-4">
        <Button variant="hex1" size="default" className="bg-green-600">
          Search
        </Button>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;