import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Card } from '../ui/card';

const data = [
  { name: 'Fiction', value: 15.69 },
  { name: 'Non-Fiction', value: 16.26 },
  { name: 'Academic', value: 16.31 },
  { name: 'Reference', value: 17.18 },
  { name: 'Children', value: 17.21 },
  { name: 'Other', value: 17.36 },
];

const COLORS = ['#1E40AF', '#2563EB', '#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE'];

const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
  const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      className="text-xs font-medium"
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

export function CategoryChart() {
  return (
    <Card className="h-[400px]">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2 className="text-lg font-semibold">Book Categories</h2>
        <select className="px-2 py-1 md:px-3 md:py-1.5 rounded-md border border-gray-200 text-sm bg-white">
          <option>All Time</option>
          <option>This Year</option>
          <option>This Month</option>
        </select>
      </div>
      <div className="h-[calc(100%-4rem)]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={2}
              dataKey="value"
              label={CustomLabel}
            >
              {data.map((_, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]}
                  stroke="white"
                  strokeWidth={2}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              }}
              formatter={(value: number) => [`${value}%`, 'Percentage']}
            />
            <Legend 
              layout="horizontal" 
              verticalAlign="bottom" 
              align="center"
              wrapperStyle={{
                paddingTop: '1rem'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}