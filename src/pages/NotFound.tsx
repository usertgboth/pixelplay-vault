import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl mb-6">🎮</div>
        
        <h1 className="text-6xl font-bold text-gradient-market mb-4">404</h1>
        
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Pixel Not Found
        </h2>
        
        <p className="text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't exist in our pixel universe.
        </p>

        <div className="space-y-3">
          <Link 
            to="/" 
            className="btn-pixel btn-market w-full flex items-center justify-center gap-2"
          >
            <Home size={16} />
            Return to Home
          </Link>
          
          <Link 
            to="/market" 
            className="btn-pixel bg-muted hover:bg-muted/80 text-foreground w-full flex items-center justify-center gap-2"
          >
            <Search size={16} />
            Explore Market
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
