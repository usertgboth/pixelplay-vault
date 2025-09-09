import { Link, useLocation } from 'react-router-dom';
import { Home, Store, Gamepad2, Users, User } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home', gradient: 'primary' },
    { path: '/market', icon: Store, label: 'Market', gradient: 'market' },
    { path: '/games', icon: Gamepad2, label: 'Games', gradient: 'games' },
    { path: '/referrals', icon: Users, label: 'Referrals', gradient: 'referrals' },
    { path: '/profile', icon: User, label: 'Profile', gradient: 'profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex justify-around items-center py-2 px-4 max-w-md mx-auto">
        {navItems.map(({ path, icon: Icon, label, gradient }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center p-2 transition-all duration-200 ${
                isActive ? 'scale-110' : 'hover:scale-105'
              }`}
            >
              <div className={`p-2 rounded-lg transition-all duration-200 ${
                isActive 
                  ? `bg-accent-${gradient} shadow-lg` 
                  : 'hover:bg-muted'
              }`}>
                <Icon 
                  size={20} 
                  className={isActive ? 'text-white' : 'text-muted-foreground'}
                />
              </div>
              <span className={`text-xs mt-1 font-medium ${
                isActive 
                  ? `text-gradient-${gradient}` 
                  : 'text-muted-foreground'
              }`}>
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;