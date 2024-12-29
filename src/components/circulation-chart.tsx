import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Card } from './ui/card';

const data = [
  { month: 'Jan', loans: 65 },
  { month: 'Feb', loans: 78 },
  { month: 'Mar', loans: 85 },
  { month: 'Apr', loans: 91 },
  { month: 'May', loans: 95 },
  { month: 'Jun', loans: 88 },
  { month: 'Jul', loans: 92 },
];

export function CirculationChart() {
  return (
    <Card className="h-[400px]">
      <h2 className="mb-6 text-lg font-semibold">Book Circulation</h2>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorLoans" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="loans"
            stroke="#3b82f6"
            fillOpacity={1}
            fill="url(#colorLoans)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
}