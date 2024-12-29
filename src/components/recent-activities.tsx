import { Clock } from 'lucide-react';
import { Card } from './ui/card';

const activities = [
  {
    user: 'Sarah Johnson',
    action: 'borrowed',
    book: 'The Great Gatsby',
    time: '2 hours ago',
  },
  {
    user: 'Michael Chen',
    action: 'returned',
    book: '1984',
    time: '4 hours ago',
  },
  {
    user: 'Emily Davis',
    action: 'borrowed',
    book: 'Pride and Prejudice',
    time: '5 hours ago',
  },
  {
    user: 'James Wilson',
    action: 'renewed',
    book: 'To Kill a Mockingbird',
    time: '1 day ago',
  },
  {
    user: 'Lisa Anderson',
    action: 'borrowed',
    book: 'The Catcher in the Rye',
    time: '1 day ago',
  },
  {
    user: 'David Kim',
    action: 'returned',
    book: 'The Hobbit',
    time: '1 day ago',
  },
  {
    user: 'Rachel Green',
    action: 'borrowed',
    book: 'Dune',
    time: '2 days ago',
  },
  {
    user: 'Tom Martinez',
    action: 'renewed',
    book: 'The Alchemist',
    time: '2 days ago',
  },
  {
    user: 'Emma Wilson',
    action: 'borrowed',
    book: 'Norwegian Wood',
    time: '2 days ago',
  },
  {
    user: 'Chris Lee',
    action: 'returned',
    book: 'The Silent Patient',
    time: '3 days ago',
  },
  {
    user: 'Sophie Brown',
    action: 'borrowed',
    book: 'The Midnight Library',
    time: '3 days ago',
  },
  {
    user: 'Alex Turner',
    action: 'renewed',
    book: 'Project Hail Mary',
    time: '3 days ago',
  },
  {
    user: 'Maya Patel',
    action: 'returned',
    book: 'Atomic Habits',
    time: '4 days ago',
  },
  {
    user: 'Daniel Lee',
    action: 'borrowed',
    book: 'The Song of Achilles',
    time: '4 days ago',
  },
  {
    user: 'Olivia Wang',
    action: 'renewed',
    book: 'The Seven Husbands of Evelyn Hugo',
    time: '5 days ago',
  },
  {
    user: 'Kevin Zhang',
    action: 'borrowed',
    book: 'The Invisible Life of Addie LaRue',
    time: '5 days ago',
  },
  {
    user: 'Isabella Garcia',
    action: 'returned',
    book: 'The House in the Cerulean Sea',
    time: '6 days ago',
  },
  {
    user: 'Nathan Park',
    action: 'renewed',
    book: 'A Court of Thorns and Roses',
    time: '6 days ago',
  },
  {
    user: 'Sophia Martinez',
    action: 'borrowed',
    book: 'The Love Hypothesis',
    time: '6 days ago',
  },
  {
    user: 'William Chen',
    action: 'returned',
    book: 'Beach Read',
    time: '7 days ago',
  }
];

const actionColors = {
  borrowed: 'text-blue-600 bg-blue-50',
  returned: 'text-green-600 bg-green-50',
  renewed: 'text-amber-600 bg-amber-50',
};

export function RecentActivities() {
  return (
    <div className="divide-y">
      {activities.map((activity, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-4 hover:bg-gray-50/50"
        >
          <div className="flex gap-3">
            <span 
              className={`mt-0.5 inline-flex h-6 items-center rounded-full px-2 text-xs font-medium ${
                actionColors[activity.action as keyof typeof actionColors]
              }`}
            >
              {activity.action}
            </span>
            <div>
              <p className="text-sm font-medium">{activity.user}</p>
              <p className="text-sm text-gray-500">"{activity.book}"</p>
            </div>

          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <Clock className="h-3.5 w-3.5" />
            {activity.time}
          </div>
        </div>
      ))}
    </div>
  );
}