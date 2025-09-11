import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Store, Gamepad2, Users, User, LucideIcon } from 'lucide-react';

interface NavItem {
  path: string;
  icon: LucideIcon;
  label: string;
}

const Navbar: React.FC = () => {
  const location = useLocation();

  const navItems: NavItem[] = [
    { path: '/market', icon: Store, label: 'Market' },
    { path: '/games', icon: Gamepad2, label: 'Games' },
    { path: '/referrals', icon: Users, label: 'Referrals' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border z-50 safe-area-inset-bottom">
      <div className="flex justify-around items-center py-3 px-4 max-w-md mx-auto">
        {navItems.map(({ path, icon: Icon, label }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={`nav-item ${isActive ? 'active' : ''}`}
            >
              <div className={`p-2.5 rounded-xl transition-all duration-200 ${
                isActive 
                  ? 'bg-primary/10' 
                  : 'hover:bg-muted'
              }`}>
                <Icon 
                  size={22} 
                  className={isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}
                />
              </div>
              <span className={`text-xs mt-1 font-medium transition-colors ${
                isActive 
                  ? 'text-primary' 
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