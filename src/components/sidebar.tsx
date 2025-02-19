import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  BarChart3,
  BookOpen,
  Home,
  Settings,
  Users,
  History,
  Menu,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Dashboard', icon: Home, href: '/' },
  { name: 'Books', icon: BookOpen, href: '/books' },
  { name: 'Members', icon: Users, href: '/members' },
  { name: 'Circulation', icon: History, href: '/circulation' },
  { name: 'Reports', icon: BarChart3, href: '/reports' },
  { name: 'Settings', icon: Settings, href: '/settings' },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Mobile menu button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-3 left-3 z-50 rounded-lg p-2 bg-white shadow-sm ring-1 ring-black/[0.03]"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Sidebar */}
      <div className={cn(
        'fixed inset-y-0 left-0 z-40 w-64 transform bg-white/80 backdrop-blur-sm transition-transform duration-200 ease-in-out lg:relative lg:translate-x-0',
        'border-r shadow-sm',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      )}>
        <div className="flex h-16 items-center gap-2 border-b px-4 md:px-6">
          <BookOpen className="h-6 w-6 text-blue-600" />
          <span className="font-semibold">Library System</span>
        </div>
        <nav className="flex flex-col gap-1 p-3 md:p-4">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => cn(
                'group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium',
                'transition-all duration-200 hover:bg-gray-50 hover:text-blue-600',
                'active:scale-[0.98]',
                isActive 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600'
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}