import { Book, Clock, Users } from 'lucide-react';
import { Card } from './ui/card';
import { formatNumber } from '@/lib/utils';

const stats = [
  {
    name: 'Total Books',
    value: 12458,
    icon: Book,
    change: '+2.5%',
    changeType: 'increase',
  },
  {
    name: 'Active Loans',
    value: 245,
    icon: Clock,
    change: '+18.2%',
    changeType: 'increase',
  },
  {
    name: 'Members',
    value: 3891,
    icon: Users,
    change: '+4.1%',
    changeType: 'increase',
  },
  {
    name: 'Overdue',
    value: 23,
    icon: Clock,
    change: '-12.5%',
    changeType: 'decrease',
  },
];

export function Stats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.name}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">{stat.name}</p>
              <p className="mt-1 text-2xl font-semibold">
                {formatNumber(stat.value)}
              </p>
            </div>
            <div
              className={`rounded-full p-3 ${
                stat.changeType === 'increase'
                  ? 'bg-green-50 text-green-600'
                  : 'bg-red-50 text-red-600'
              }`}
            >
              <stat.icon className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4">
            <span
              className={`text-sm ${
                stat.changeType === 'increase'
                  ? 'text-green-600'
                  : 'text-red-600'
              }`}
            >
              {stat.change}
            </span>
            <span className="text-sm text-gray-500"> from last month</span>
          </div>
        </Card>
      ))}
    </div>
  );
}