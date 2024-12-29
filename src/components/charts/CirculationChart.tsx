import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from '../ui/card';

const data = [
  { month: 'Jan', loans: 2620 },
  { month: 'Feb', loans: 2625 },
  { month: 'Mar', loans: 2630 },
  { month: 'Apr', loans: 2640 },
  { month: 'May', loans: 2635 },
  { month: 'Jun', loans: 2625 },
  { month: 'Jul', loans: 2615 },
  { month: 'Aug', loans: 2610 },
  { month: 'Sep', loans: 2600 },
];

export function CirculationChart() {
  return (
    <Card className="h-[400px]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="heading-2">Monthly Circulation</h2>
        <select className="px-3 py-1.5 rounded-md border border-gray-200 text-sm">
          <option>Last 30 days</option>
          <option>Last 90 days</option>
          <option>Last year</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorLoans" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#60A5FA" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="month" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6B7280', fontSize: 12 }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6B7280', fontSize: 12 }}
            domain={['dataMin - 10', 'dataMax + 10']}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
            }}
          />
          <Area
            type="monotone"
            dataKey="loans"
            stroke="#60A5FA"
            strokeWidth={2}
            fill="url(#colorLoans)"
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
}