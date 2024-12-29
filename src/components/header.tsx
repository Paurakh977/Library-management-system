import { Bell, Search, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const notifications = [
  {
    id: 1,
    title: "Book Due Tomorrow",
    message: "'The Great Gatsby' is due tomorrow",
    time: "1 hour ago",
    isNew: true,
  },
  {
    id: 2,
    title: "New Member Joined",
    message: "Emma Thompson has registered",
    time: "2 hours ago",
    isNew: true,
  },
  {
    id: 3,
    title: "Overdue Book",
    message: "'1984' is 2 days overdue",
    time: "1 day ago",
    isNew: false,
  }
];

export function Header() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(notifications);

  const handleMarkAllAsRead = () => {
    setUnreadNotifications(unreadNotifications.map(notif => ({ ...notif, isNew: false })));
  };

  // Close notifications when clicking outside
  const handleClickOutside = (e: MouseEvent) => {
    if (showNotifications) {
      setShowNotifications(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showNotifications]);

  return (
    <header className="relative flex h-16 flex-shrink-0 items-center justify-between border-b bg-white/80 px-3 md:px-6 backdrop-blur-sm z-30">
      <div className="flex-1 max-w-[180px] sm:max-w-md md:max-w-lg">
        <div className="flex w-full items-center gap-2 rounded-xl border bg-white px-3 py-2 md:px-4 md:py-2.5">
          <Search className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400 w-full"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-6">
        <div className="relative">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setShowNotifications(!showNotifications);
            }}
            className="group relative rounded-full p-1.5 md:p-2 transition-all hover:bg-gray-100"
          >
            <Bell className="h-5 w-5 text-gray-600 transition-colors group-hover:text-blue-600" />
            {unreadNotifications.some(n => n.isNew) && (
              <span className="absolute right-1 top-1 h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-red-500 ring-2 ring-white" />
            )}
          </button>
          {/* Notifications Dropdown */}
          {showNotifications && (
            <div 
              onClick={(e) => e.stopPropagation()}
              className="fixed right-2 top-[4.5rem] sm:absolute sm:right-0 sm:top-auto sm:mt-2 w-[calc(100vw-1rem)] sm:w-[320px] md:w-[380px] max-h-[calc(100vh-6rem)] overflow-y-auto rounded-xl border bg-white shadow-lg ring-1 ring-black/5 z-50"
            >
              <div className="sticky top-0 z-[51] mb-2 flex items-center justify-between border-b bg-white px-3 py-2">
                <h3 className="font-medium">Notifications</h3>
                <button 
                  onClick={handleMarkAllAsRead}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Mark all as read
                </button>
              </div>
              <div className="divide-y p-1">
                {unreadNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-medium truncate">{notification.title}</p>
                        {notification.isNew && (
                          <span className="h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" />
                        )}
                      </div>
                      <p className="text-sm text-gray-500 truncate">{notification.message}</p>
                      <p className="mt-1 text-xs text-gray-400">{notification.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            className="h-8 w-8 md:h-9 md:w-9 rounded-full ring-2 ring-white"
          />
          <span className="hidden sm:block text-sm font-medium">John Doe</span>
        </div>
      </div>
    </header>
  );
}